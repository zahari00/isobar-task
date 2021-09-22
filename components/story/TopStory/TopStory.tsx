import { StoryDTO } from "@api";
import { LazyImage } from "@components/ui";
import { StoryInformation } from "../StoryInformation";
import css from "./TopStory.module.css";
import cn from "classnames";

export const TopStory = ({ story }: { story: StoryDTO }) => {
  return (
    <article className={css.article}>
      <div className={css.flexCon}>
        <div className={css.full}>
          <span className={css.tag}>Top Story</span>
          {story.isLoading && (
            <>
              <div className={css.textPlaceholder} style={{ width: "90%" }} />
              <div className={css.textPlaceholder} style={{ width: "85%" }} />
              <div className={css.textPlaceholder} style={{ width: "95%" }} />
              <div className={css.textPlaceholder} style={{ width: "60%" }} />
            </>
          )}
          {!story.isLoading && (
            <a href={story.url} target="_blank" rel="noreferrer">
              <h2 className={css.title}>{story.title}</h2>
            </a>
          )}
        </div>
        {story.isLoading && <div className={cn([css.placeholder, css.img])} />}
        {!story.isLoading && (
          <figure className={css.img}>
            <a href={story.url} target="_blank" rel="noreferrer">
              <LazyImage
                src={`/img/stories/${story.image}`}
                alt={story.title}
                width={90}
                height={90}
                objectFit="cover"
                objectPosition="center center"
              />
            </a>
          </figure>
        )}
      </div>
      <StoryInformation story={story} />
    </article>
  );
};
