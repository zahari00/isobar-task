import { StoryDTO } from "@api";

export interface HomepageDTO {
  highlight: StoryDTO
  topStories: StoryDTO[]
}