import { create } from "zustand";
import { cardData, TestimonialsData } from "./TestimonialsData";

interface TestimonialsStore {
    cardData: TestimonialsData[];
  }
  
const useStore = create<TestimonialsStore>(() => ({
    cardData: cardData,

}))

export default useStore;