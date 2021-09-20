import { StoryPreview } from "@api";
import css from "./HighlightedStory.module.css";

export const HighlightedStory = ({ story }: { story: StoryPreview }) => {
  return (
    <article className={css.article}>
      <div
        className={css.bg}
        style={{ backgroundImage: `url(/img/stories/${story.image})` }}
      />
      <div className={css.content}>
        <h1 className={css.title}>{story.title}</h1>
      </div>
    </article>
  );
};
