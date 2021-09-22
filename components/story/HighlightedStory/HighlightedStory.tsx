import { useHighlightStory } from "@context";
import { AuthorPreview } from "components/author";
import { LazyImage } from "@components/ui";
import css from "./HighlightedStory.module.css";

export const HighlightedStory = () => {
  const story = useHighlightStory();

  return (
    <article className={css.article}>
      <div className={css.con}>
        <div
          className={css.bg}
          style={{ backgroundImage: `url(/img/stories/${story.image})` }}
        />
        <div className={css.content}>
          <h2 className={css.title}>{story.title}</h2>
          <div className={css.bottom}>
            <AuthorPreview author={story.author} isInverted />
            <span className={css.spacer} />
            <p className={css.bottomText}>{story.date}</p>
            <span className={css.spacer} />
            <p className={css.bottomText}>
              <div className={css.claps}>
                <LazyImage
                  alt={story.title}
                  src="/img/icons/white-claps.svg"
                  width={18}
                  height={18}
                />
              </div>
              {story.score}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
