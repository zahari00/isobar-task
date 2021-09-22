import css from "@styles/Home.module.css";
import { getAllData, HomepageDTO } from "@api";
import { DataProvider } from "@context";
import { HighlightedStory } from "@components";

const Home = ({ data }: { data: HomepageDTO }) => {
  return (
    <DataProvider initialData={data}>
      <section className={css.section}>
        <article className={css.highlight}>
          <HighlightedStory />
        </article>
        <aside></aside>
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
