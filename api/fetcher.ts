import fetch from "isomorphic-unfetch";

const defaultBasePath = "https://hacker-news.firebaseio.com/v0";

export async function fetcher<T>(path: string, ...attrs: any[]) {
  const res = await fetch(`${defaultBasePath}/${path}`, ...attrs).then(
    async (r) => {
      try {
        return {
          data: (await r.json()) as T,
          success: r.status >= 200 && r.status < 300,
        };
      } catch (e) {
        return {
          data: null,
          success: false,
          error: (e as any)?.message || "Unknown Reason",
        };
      }
    }
  );

  return res as QueryResult<T>;
}

export interface QueryResult<T> {
  success: boolean;
  data: T | null;
  error?: string;
}
