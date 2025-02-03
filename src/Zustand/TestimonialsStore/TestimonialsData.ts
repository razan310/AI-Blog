import profile1 from "/AI-Blog/src/assets/images/HomePage/Profile1.png";
import profile2 from "/AI-Blog/src/assets/images/HomePage/Profile2.png";
import profile3 from "/AI-Blog/src/assets/images/HomePage/Profile3.png";
import profile4 from "/AI-Blog/src/assets/images/HomePage/Profile4.png";
import profile5 from "/AI-Blog/src/assets/images/HomePage/Profile5.png";
import profile6 from "/AI-Blog/src/assets/images/HomePage/Profile6.png";


export interface TestimonialsData {
    id: string; 
    profileImage: string;
    ReaderName: string;
    ReaderResidence: string;
    ReaderOpinion: string;
    rating: number;
  }

export const cardData: TestimonialsData[] = [
    {
      id: "1",
      profileImage:profile1 ,
      ReaderName: "Sarah Thompson",
      ReaderResidence: "San Francisco, USA",
      ReaderOpinion: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
      rating: 5,
    },
    {
      id: "2",
      profileImage: profile2,
      ReaderName: "Raj Patel",
      ReaderResidence: "Mumbai, India",
      ReaderOpinion: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
      rating: 4,
    },
    {
      id: "3",
      profileImage: profile3,
      ReaderName: "Emily Adams",
      ReaderResidence: "London, UK",
      ReaderOpinion: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
      rating: 3,
    },
    {
      id: "4",
      profileImage: profile4,
      ReaderName: "Alan Jackson",
      ReaderResidence: "Houston, USA",
      ReaderOpinion: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
      rating: 2,
    },
    {
      id: "5",
      profileImage: profile5,
      ReaderName: "Jessica Miller",
      ReaderResidence: "Boston, USA",
      ReaderOpinion: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research.",
      rating: 2,
    },
    {
      id: "6",
      profileImage: profile6,
      ReaderName: "Diego Lopez",
      ReaderResidence: "Barcelona, Spain",
      ReaderOpinion: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
      rating: 3,
    },
  ]