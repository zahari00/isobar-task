import { AuthorPreview } from "components/author";
import { LazyImage } from "@components/ui";
import { StoryDTO } from "@api";
import css from "./StoryInformation.module.css";
import cn from "classnames";

export const StoryInformation = ({
  story,
  isInverted = false,
}: {
  story: StoryDTO;
  isInverted?: boolean;
}) => {
  return (
    <div
      className={cn({
        [css.container]: true,
        [css.inverted]: isInverted,
      })}
    >
      <AuthorPreview author={story.author} isInverted={isInverted} />
      {story.isLoading && (
        <>
          <span className={cn([css.spacer, css.placeholder])}>•</span>
          <span className={css.textPlaceholder} />
          <span className={cn([css.spacer, css.placeholder])}>•</span>
          <div className={css.text}>
            <span className={css.textPlaceholder} />
          </div>
        </>
      )}
      {!story.isLoading && (
        <>
          <span className={css.spacer}>•</span>
          <p className={css.text}>{story.date}</p>
          <span className={css.spacer}>•</span>
          <div className={css.text}>
            <div className={css.stars}>
              <LazyImage
                alt={story.title}
                src={`/img/icons/${isInverted ? "white" : "black"}-stars.svg`}
                width={18}
                height={18}
              />
            </div>
            {story.score}
          </div>
        </>
      )}
    </div>
  );
};
