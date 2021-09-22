import { useHighlightStory } from "@context";
import { StoryInformation } from "../StoryInformation";
import css from "./HighlightedStory.module.css";

export const HighlightedStory = () => {
  const story = useHighlightStory();

  return (
    <article className={css.article}>
      <div className={css.con}>
        {story.isLoading && (
          <>
            <div className={css.content}>
              <div className={css.infoWrapper}>
                <StoryInformation story={story} isInverted />
              </div>
            </div>
          </>
        )}
        {!story.isLoading && (
          <>
            <div
              className={css.bg}
              style={{ backgroundImage: `url(/img/stories/${story.image})` }}
            />
            <div className={css.content}>
              <span className={css.tag}>Highlight</span>
              <h2 className={css.title}>{story.title}</h2>
              <div className={css.infoWrapper}>
                <StoryInformation story={story} isInverted />
              </div>
            </div>
            <a
              href={story.url}
              className={css.link}
              target="_blank"
              rel="noreferrer"
            />
          </>
        )}
      </div>
    </article>
  );
};
