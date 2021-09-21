import type { GetServerSidePropsContext } from "next";
import { useStoryComments } from "@api";
import { prefetchStory, useStory } from "api/queries/useStory";

const StoryPage = ({ id }: { id: string }) => {
  const { data: story } = useStory(id);

  console.log("story", story);

  const comments = useStoryComments(story?.comments || []);

  return <ul>{story?.title}</ul>;
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const id = params?.id as string;
  const fallback = await prefetchStory(id);

  console.log("fallback", fallback);

  return {
    props: {
      fallback,
      id,
    },
  };
};

export default StoryPage;
