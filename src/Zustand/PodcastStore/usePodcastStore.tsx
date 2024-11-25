import { create } from "zustand";
import { podcast } from "./PodcastData";

const useStore = create(() => ({
    articles: podcast,

}))

export default useStore;