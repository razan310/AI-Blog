import book1 from "./../../assets/images/HomePage/resources1.png"
import book2 from "./../../assets/images/HomePage/resources2.png"
import viewsicon from "./../../assets/icon/Icon(10).svg";
import logo1 from "./../../assets/icon/Icon(9).svg"
import logo2 from "./../../assets/icon/Icon(11).svg"


export interface BookData{
    id: string; 
    logo: string; 
    logoTitle: string; 
    logoDescription: string; 
    downloadLink: string; 
    bookDescription: string;
    bookImage: string; 
    totalBooks: string; 
    DownloadFormats: string;
    viewsicon: string; 
    authorRating: string; 
    bookTitle: string; 
    titletotalBooks: string; 
  }
  
  export const books: BookData[] = [
    {
      id: "1",
      logo: logo1,
      logoTitle: "Ebooks",
      logoDescription: "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
      downloadLink: "https://example.com/js-book.pdf",
      bookTitle: "Variety of Topics",
      bookDescription: "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
      bookImage: book1,
      titletotalBooks:"Total Ebooks",
      totalBooks: "Over 100 ebooks",
      DownloadFormats:"PDF format for access.",
      viewsicon: viewsicon,
      authorRating:"Ebooks are authored by renowned experts with an average of 15 years of experience",
    },
    {
        id: "2",
        logo: logo2,
        logoTitle: "Whitepapers",
        logoDescription: "Dive into comprehensive reports and analyses with our collection of whitepapers. ",
        downloadLink: "https://example.com/js-book.pdf",
        bookTitle: "Topics Coverage",
        bookDescription: "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
        bookImage: book2,
        titletotalBooks:"Total Whitepapers",
        totalBooks: "Over 50 whitepapers",
        DownloadFormats:"PDF format for access.",
        viewsicon: viewsicon,
        authorRating:"Whitepapers are authored by subject matter with an average of 20 years of experience.",
      }
  ];