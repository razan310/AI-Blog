import { create } from "zustand";
import { books, Book } from "./BookData";

interface BookStore {
    getFilteredBooks: () => Partial<Book>[]; // تعريف التابع الذي يعيد الكائنين الأول والثاني
    getThirdAndFourthBooks: () => Partial<Book>[]; // تعريف التابع الذي يعيد الكائنين الثالث والرابع
    getFifthToSeventhBooks: () => Partial<Book>[]; // الكائن الخامس والسادس والسابع
  }
  export const useBookStore = create<BookStore>(() => ({
    getFilteredBooks: () => {
      // استخراج أول كائنين من المصفوفة
      const firstTwoBooks = books.slice(0, 2);
  
      // تطبيق الفلترة للحصول على الحقول المطلوبة فقط
      return firstTwoBooks.map(({ logoTitle,logoDescription, downloadLink ,   bookDescription, bookImage, authorRating, totalBooks, }) => ({
        logoTitle,
        logoDescription,
        downloadLink,
        bookDescription,
        bookImage,
        totalBooks,
        authorRating,
        
      }));
    },



  // التابع لجلب الكائن الثالث والرابع
  getThirdAndFourthBooks: () => {
    const thirdAndFourthBooks = books.slice(2, 4); // استخراج الكائن الثالث والرابع
    return thirdAndFourthBooks.map(({ logoTitle, logoDescription, bookImage, bookDescription, downloadLink, publicationDate, category, authorName }) => ({
      logoTitle,
      logoDescription,
      bookImage,
      bookDescription,
      downloadLink,
      publicationDate,
      category,
      authorName,
    }));
  },


   // التابع لجلب الكائن الخامس إلى السابع
   getFifthToSeventhBooks: () => {
    const fifthToSeventhBooks = books.slice(4, 7); // استخراج الكائن الخامس إلى السابع
    return fifthToSeventhBooks.map(({ bookImage, bookDescription, bookTitle}) => ({
      bookImage,         // صورة الكتاب
      bookDescription,   // شرح عن نوع الكتاب
      bookTitle,             // اسم الكتاب
    }));
  },

  }));
export default useBookStore;