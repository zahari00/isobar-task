import { getAllData, HomepageDTO } from "@api";
import { DataProvider } from "@context";
import { HighlightedStory, TopStory } from "@components";
import css from "@styles/Home.module.css";

const Home = ({ data }: { data: HomepageDTO }) => {
  return (
    <DataProvider initialData={data}>
      <section className={css.section}>
        <HighlightedStory />
        <aside className={css.aside}>
          <ul>
            {data.topStories.map((story) => (
              <li key={`Story__${story.id}`}>
                <TopStory story={story} />
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </DataProvider>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      data: await getAllData(),
    },
  };
};

export default Home;
