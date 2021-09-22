import { HomepageDTO } from '../dto';
import fetch from 'isomorphic-unfetch'

export const getAllData = async (): Promise<HomepageDTO> => {
  return await fetch(`${process.env.host}/api/homepage`).then((r) => r.json());
};