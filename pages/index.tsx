import type { GetServerSideProps } from "next";
import Link from "next/link";
import { getRandomStories, StoryPreview } from "@api";
import { HighlightedStory } from "@components";
import css from "@styles/Home.module.css";

const Home = ({
  stories,
  highlightedStory,
}: {
  stories: StoryPreview[];
  highlightedStory: StoryPreview;
}) => {
  return (
    <section className={css.section}>
      <article className={css.highlight}>
        <HighlightedStory story={highlightedStory} />
      </article>
      <aside>
        <ul>
          {stories.map((story) => {
            return (
              <li key={story.id}>
                <Link href={`/${story.id}/story`} passHref>
                  <a>{story.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </section>
  );
};

export const getServerSideProps = async (ctx: GetServerSideProps) => {
  const stories = await getRandomStories(10);

  return {
    props: {
      highlightedStory: stories[0],
      stories: stories.slice(1, 9),
    },
  };
};

export default Home;
