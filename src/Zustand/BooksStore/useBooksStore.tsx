import { create } from "zustand";
import { BookData, books } from "./BookData";


interface BookStore {
  books: BookData[];
  }
  
const useStore = create<BookStore>(() => ({
  books: books,

}))

export default useStore;