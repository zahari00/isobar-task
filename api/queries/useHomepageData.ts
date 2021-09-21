import { parseDate } from "@utils";
import useSWR from "swr";
import { StoryDTO } from "../dto";
import fetch from "isomorphic-unfetch";

const route = `${process.env.host}/api/homepage`;

export const useHomepageData = () => {
  return useSWR<{
    highlight: StoryDTO;
    stories: StoryDTO[];
  }>(route);
};

export const prefetchHomepageData = async () => {
  return {
    [route]: await fetch(route).then((res) => res.json()),
  };
};
