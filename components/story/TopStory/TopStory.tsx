import { StoryDTO } from "@api";
import css from "./TopStory.module.css";

export const TopStory = ({ story }: { story: StoryDTO }) => {
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
