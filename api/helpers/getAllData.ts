import { HomepageDTO } from "../dto";
import fetch from "isomorphic-unfetch";

export const getAllData = async (): Promise<HomepageDTO> => {
  try {
    return await fetch(`${process.env.host}/api/homepage`).then((r) =>
      r.json()
    );
  } catch (e) {
    // Sometimes the API is returning job and this results in error 
    return await getAllData();
  }
};
