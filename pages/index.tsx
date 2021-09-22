import { getAllData } from "@api";
import { HighlightedStory, TopStoryList } from "@components";
import { parseDate } from "@utils";
import css from "@styles/Home.module.css";

const Home = () => {
  return (
    <section className={css.section}>
      <HighlightedStory />
      <aside className={css.aside}>
        <div className={css.titleContainer}>
          <p className={css.title}>TOP 10 NEWS</p>
          <p className={css.date}>{parseDate(Date.now() / 1000, "long")}</p>
        </div>
        <TopStoryList />
      </aside>
    </section>
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
