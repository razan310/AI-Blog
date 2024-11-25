import { create } from "zustand";
import { books } from "./BookData";

const useStore = create(() => ({
    articles: books,

}))

export default useStore;