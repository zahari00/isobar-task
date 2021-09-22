import { useTopStories } from "@context";
import { TopStory } from "../TopStory";

export const TopStoryList = () => {
  const stories = useTopStories();

  return (
    <ul>
      {stories.map((story) => (
        <li key={`Story__${story.id}`}>
          <TopStory story={story} />
        </li>
      ))}
    </ul>
  );
}
