import { StoryDTO } from "../dto";
import useSWR from "swr";
import fetch from "isomorphic-unfetch";

const getRoute = (id: string | number) => `${process.env.host}/api/story/${id}`;

export const useStory = (id: string | number, isDisabled = false) => {
  return useSWR<StoryDTO>(!isDisabled ? getRoute(id) : null);
};

export const prefetchStory = async (id: string | number) => {
  return {
    [getRoute(id)]: await fetch(getRoute(id)).then((res) => res.json()),
  };
};
