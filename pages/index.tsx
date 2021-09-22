import { getAllData, HomepageDTO } from "@api";
import { DataProvider } from "@context";
import { HighlightedStory, TopStory } from "@components";
import { parseDate } from "@utils";
import css from "@styles/Home.module.css";

const Home = ({ data }: { data: HomepageDTO }) => {
  return (
    <DataProvider initialData={data}>
      <section className={css.section}>
        <HighlightedStory />
        <aside className={css.aside}>
          <div className={css.titleContainer}>
            <p className={css.title}>TOP 10 NEWS</p>
            <p className={css.date}>{parseDate(Date.now() / 1000, "long")}</p>
          </div>
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
