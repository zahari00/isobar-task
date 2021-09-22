import { AuthorPreview } from "components/author";
import { LazyImage } from "@components/ui";
import { StoryDTO } from "@api";
import css from "./StoryInformation.module.css";

export const StoryInformation = ({
  story,
  isInverted = false,
}: {
  story: StoryDTO;
  isInverted?: boolean;
}) => {
  return (
    <div className={css.container}>
      <AuthorPreview author={story.author} isInverted={isInverted} />
      <span className={css.spacer} />
      <p className={css.text}>{story.date}</p>
      <span className={css.spacer} />
      <div className={css.text}>
        <div className={css.claps}>
          <LazyImage
            alt={story.title}
            src={`/img/icons/${isInverted ? "white" : "black"}-claps.svg`}
            width={18}
            height={18}
          />
        </div>
        {story.score}
      </div>
    </div>
  );
};
