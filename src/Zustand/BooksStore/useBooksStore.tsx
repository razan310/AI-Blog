import { create } from "zustand";
import { books, Book } from "./BookData";

interface BookStore {
    getFilteredBooks: () => Partial<Book>[]; // تعريف التابع الذي يعيد البيانات المفلترة
  }
  
  export const useBookStore = create<BookStore>(() => ({
    getFilteredBooks: () => {
      // استخراج أول كائنين من المصفوفة
      const firstTwoBooks = books.slice(0, 2);
  
      // تطبيق الفلترة للحصول على الحقول المطلوبة فقط
      return firstTwoBooks.map(({ logoTitle,logoDescription, downloadLink,  bookImage, authorRating, totalBooks, }) => ({
        logoTitle,
        logoDescription,
        downloadLink,
        bookImage,
        totalBooks,
        authorRating,
        
      }));
    },
  }));
export default useBookStore;