import Link from "next/link";
import { HighlightedStory } from "@components";
import { prefetchHomepageData, useHomepageData } from "@api";
import fetch from "isomorphic-unfetch";
import css from "@styles/Home.module.css";

const Home = () => {
  const { data } = useHomepageData();

  return (
    <section className={css.section}>
      <article className={css.highlight}>
        {data?.highlight && <HighlightedStory story={data?.highlight} />}
      </article>
      <aside>
        <ul>
          {data?.stories.map((story) => {
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

export const getServerSideProps = async () => {
  return {
    props: {
      fallback: await prefetchHomepageData(),
    },
  };
};

export default Home;
