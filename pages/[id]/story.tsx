import { getStory, query, Story } from "@api";
import type { GetServerSidePropsContext } from "next";
import { useEffect } from "react";

const StoryPage = ({ story }: { story: Story }) => {
  console.log(story);

  useEffect(() => {
    if (typeof story.comments[0] === "number")
      query(`comments?comments=${story.comments.join(',')}`, "http://localhost:3000/api").then(console.log);
  }, []);

  return <ul>{story.title}</ul>;
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const story = await getStory(+(params?.id || ''));
  return {
    props: {
      story,
    },
  };
};

export default StoryPage;
