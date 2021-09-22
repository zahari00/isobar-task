import {
  ReactChild,
  createContext,
  useCallback,
  useState,
  useContext,
} from "react";
import { getAllData, HomepageDTO, StoryDTO } from "@api";

const DataContext = createContext<HomepageDTO>({} as any);

const DispatchContext = createContext<{
  refetch: () => void;
}>({
  refetch: () => {},
});

export const DataProvider = ({
  children,
  initialData,
}: {
  children: ReactChild[];
  initialData: HomepageDTO;
}) => {
  const [state, setState] = useState(initialData);

  const refetch = useCallback(async () => {
    setState(createEmptyData());
    const data = await getAllData();

    // setState(data);
  }, []);

  return (
    <DataContext.Provider value={state}>
      <DispatchContext.Provider
        value={{
          refetch,
        }}
      >
        {children}
      </DispatchContext.Provider>
    </DataContext.Provider>
  );
};

export const useRefetch = () => useContext(DispatchContext).refetch;

export const useTopStories = () => useContext(DataContext).topStories;

export const useHighlightStory = () => useContext(DataContext).highlight;

const createEmptyStory = (): StoryDTO => {
  return {
    author: {
      username: "",
      score: 0,
      joinedAt: "",
      about: "",
      image: "",
      isLoading: true
    },
    title: "",
    date: "",
    image: "",
    score: 0,
    url: "",
    id: 0,
    comments: [],
    isLoading: true,
  };
};

const createEmptyData = (): HomepageDTO => {
  return {
    highlight: createEmptyStory(),
    topStories: new Array(10).fill(null).map(createEmptyStory),
  };
} 