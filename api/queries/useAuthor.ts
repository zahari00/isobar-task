import useSWR from "swr";
import fetch from "isomorphic-unfetch";
import { AuthorDTO } from "../dto";

const getRoute = (id: string | number) => `${process.env.host}/api/author/${id}`;

export const useAuthor = (id: string | number, isDisabled = false) => {
  return useSWR<AuthorDTO>(!isDisabled ? getRoute(id) : null);
};

export const prefetchAuthor = async (id: string | number) => {
  return {
    [getRoute(id)]: await fetch(getRoute(id)).then((res) => res.json()),
  };
};
