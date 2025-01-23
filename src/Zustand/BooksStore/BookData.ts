 import book1 from "./../../assets/images/HomePage/resources1.png"
import book2 from "./../../assets/images/HomePage/resources2.png"
import book3 from "./../../assets/images/ResourcesPage/Analysis1.png"
import book4 from "./../../assets/images/ResourcesPage/Analysis2.png"
import book5 from "./../../assets/images/ResourcesPage/book1.png"
import book6 from "./../../assets/images/ResourcesPage/book2.png"
import book7 from "./../../assets/images/ResourcesPage/book3.png"

// import logo1 from "./../../assets/icon/Icon(9).svg"
// import logo2 from "./../../assets/icon/Icon(10).svg"
// import logo3 from "./../../assets/icon/Icon(16).svg"
// import logo4 from "./../../assets/icon/Icon(17).svg"



  
export interface Book{
    id: string; // معرف فريد لكل كتاب
    // logo: string; // رابط أو مسار صورة الشعار
    logoTitle: string; // عنوان الشعار
    logoDescription: string; // شرح عنوان الشعار
    
    downloadLink: string; // رابط تحميل الكتاب بصيغة PDF
    bookDescription: string; // شرح عن نوع الكتاب
    bookImage: string; // رابط أو مسار صورة الكتاب
    totalBooks: string; // عدد الكتب الكلي
    authorRating: string; // معدل خبرة المؤلف ()
    publicationDate: string; // تاريخ التأليف
    category: string; // تصنيف الكتاب
    authorName: string; // اسم المؤلف
    bookTitle: string; // اسم الكتاب
  }
  
  export const books: Book[] = [
    {
      id: "1",
      // logo: logo1,
      logoTitle: "Ebooks",
      logoDescription: "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
      downloadLink: "https://example.com/js-book.pdf",
      bookDescription: "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
      bookImage: book1,
      totalBooks: "Over 100 ebooks",
      authorRating:"Ebooks are authored by renowned experts with an average of 15 years of experience",
      publicationDate: "July 2023",
      category: "Quantum Computing",
      authorName: "Dr. Quantum",
      bookTitle: "",
    },
    {
        id: "2",
        // logo: logo2,
        logoTitle: "Whitepapers",
        logoDescription: "Dive into comprehensive reports and analyses with our collection of whitepapers. ",
        downloadLink: "https://example.com/js-book.pdf",
        bookDescription: "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
        bookImage: book2,
        totalBooks: "Over 50 whitepapers",
        authorRating:"Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
        publicationDate: "September 2023",
        category: "Space Exploration",
        authorName: "FutureTech Space Division",
        bookTitle: "",
      },
      {
        id: "3",
        // logo: logo3,
        logoTitle: "Quantum Computing Whitepaper",
        logoDescription: "Provides technical specifications and requirements for implementing quantum computing systems.",
        downloadLink: "https://example.com/js-book.pdf",
        bookDescription: "An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.",
        bookImage: book3,
        totalBooks: "Over 100 ebooks",
        authorRating:"Ebooks are authored by renowned experts with an average of 15 years of experience",
        publicationDate: "July 2023",
      category: "Quantum Computing",
      authorName: "Dr. Quantum",
        bookTitle: "",
      },
      {
        id: "4",
        // logo: logo4,
        logoTitle: "Space Exploration Whitepaper",
        logoDescription: "Explores Mars colonization, asteroid resource potential, and space tourism.",
        downloadLink: "https://example.com/js-book.pdf",
        bookDescription: "An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.",
        bookImage: book4,
        totalBooks: "Over 100 ebooks",
        authorRating:"Ebooks are authored by renowned experts with an average of 15 years of experience",
        publicationDate: "September 2023",
        category: "Space Exploration",
        authorName: "FutureTech Space Division",
        bookTitle: "",
      },

      {
        id: "5",
        // logo: "/images/logo1.png",
        logoTitle: "Space Exploration Whitepaper",
        logoDescription: "Explores Mars colonization, asteroid resource potential, and space tourism.",
        downloadLink: "https://example.com/js-book.pdf",
        bookDescription: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
        bookImage: book5,
        totalBooks: "Over 100 ebooks",
        authorRating:"Ebooks are authored by renowned experts with an average of 15 years of experience",
        publicationDate: "September 2023",
        category: "Space Exploration",
        authorName: "FutureTech Space Division",
        bookTitle: "FutureTech Trends 2024",
      },

      {
        id: "6",
        // logo: "/images/logo1.png",
        logoTitle: "Space Exploration Whitepaper",
        logoDescription: "Explores Mars colonization, asteroid resource potential, and space tourism.",
        downloadLink: "https://example.com/js-book.pdf",
        bookDescription: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
        bookImage: book6,
        totalBooks: "Over 100 ebooks",
        authorRating:"Ebooks are authored by renowned experts with an average of 15 years of experience",
        publicationDate: "September 2023",
        category: "Space Exploration",
        authorName: "FutureTech Space Division",
        bookTitle: "Space Exploration Ebook",
      },

      {
        id: "7",
        // logo: "/images/logo1.png",
        logoTitle: "Space Exploration Whitepaper",
        logoDescription: "Explores Mars colonization, asteroid resource potential, and space tourism.",
        downloadLink: "https://example.com/js-book.pdf",
        bookDescription: "An in-depth whitepaper exploring the principles, applications.",
        bookImage: book7,
        totalBooks: "Over 100 ebooks",
        authorRating:"Ebooks are authored by renowned experts with an average of 15 years of experience",
        publicationDate: "September 2023",
        category: "Space Exploration",
        authorName: "FutureTech Space Division",
        bookTitle: "Quantum Computing Whitepaper",
      },
  ];
  