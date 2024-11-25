import articl1 from "./../../assets/images/BlogOpenPage/SimilarNews1.png";
import articl2 from "./../../assets/images/BlogOpenPage/SimilarNews2.png";
import articl3 from "./../../assets/images/BlogOpenPage/SimilarNews1.png";
import articl4 from "./../../assets/images/BlogOpenPage/SimilarNews3.png";
import articl5 from "./../../assets/images/NewsPage/Climate Action.png";
import articl6 from "./../../assets/images/BlogOpenPage/hero.png";
import profile1 from "./../../assets/images/HomePage/Profile1.png";
import profile2 from "./../../assets/images/HomePage/Profile2.png";
import profile3 from "./../../assets/images/HomePage/Profile3.png";
import profile4 from "./../../assets/images/HomePage/Profile4.png";
import profile5 from "./../../assets/images/HomePage/Profile5.png";
import profile6 from "./../../assets/images/HomePage/Profile6.png";
import profile7 from "./../../assets/images/HomePage/Profile7.png";
import profile8 from "./../../assets/images/HomePage/Profile8.png";
import profile9 from "./../../assets/images/HomePage/Profile9.png";
import profile10 from "./../../assets/images/HomePage/Profile10.png";
import profile11 from "./../../assets/images/HomePage/Profile11.png";

export interface ArticleSection {
  title: string; // عنوان القسم
  content: string; // نص الفقرة
}

export interface Article {
  id: string; // معرف فريد للمقال
  authorName: string; // اسم الكاتب
  profileImage: string; // صورة بروفايل الكاتب
  articleType: string; // نوع المقالة
  publishDate: string; // تاريخ كتابة المقالة
  readingTime: string; // مدة القراءة
  views: number; // عدد المشاهدات
  likes: number; // عدد الأشخاص الذين أعجبهم المقالة
  comments: number; // عدد التعليقات
  shares: number; // عدد الإرسالات
  rating: number; // تقييم المقالة من 5
  articleImage: string; // صورة المقالة
  title: string; // عنوان المقالة
  description: string; // وصف تعريفي بسيط
  introduction: string; // مقدمة المقالة
  sections: ArticleSection[]; // أقسام المقالة (عنوان + فقرة)
}

export const articles: Article[] = [
  //blog page article
  {
    id: "1",
    authorName: "Dr. Emily Walker",
    profileImage: profile1,
    articleType: "Healthcare",
    publishDate: "October 15, 2023",
    readingTime: "10 Min",
    views: 50,
    likes: 150,
    comments: 45,
    shares: 20,
    rating: 5,
    articleImage: articl6,
    title: "The Rise of Artificial Intelligence in Healthcare",
    description: "An in-depth look into how AI is shaping the future.",
    introduction:
      "Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry...",
    sections: [
      {
        title: "AI in Diagnostic Imaging",
        content: "AI is improving diagnostic accuracy...",
      },
      {
        title: "Predictive Analytics",
        content: "AI helps predict diseases...",
      },
      {
        title: "Ethical Considerations",
        content: "AI in healthcare raises ethical questions...",
      },
    ],
  },
  // Quantum Computing
  {
    id: "2",
    authorName: "Dr. John Doe",
    profileImage: profile2,
    articleType: "Quantum Computing",
    publishDate: "2024-11-01",
    readingTime: "12 Min",
    views: 300,
    likes: 200,
    comments: 80,
    shares: 50,
    rating: 4,
    articleImage: articl1,
    title: "Understanding Quantum Bits",
    description: "Exploring the basics of quantum mechanics in computing.",
    introduction:
      "Quantum bits, or qubits, form the foundation of quantum computing...",
    sections: [
      {
        title: "Introduction to Qubits",
        content: "Qubits can exist in superposition states...",
      },
      {
        title: "Applications",
        content: "Quantum computing can solve complex problems...",
      },
      {
        title: "Challenges",
        content: "Building stable qubits is a major hurdle...",
      },
    ],
  },
  {
    id: "3",
    authorName: "Prof. Alice Smith",
    profileImage: profile3,
    articleType: "Quantum Computing",
    publishDate: "2024-11-05",
    readingTime: "15 Min",
    views: 400,
    likes: 350,
    comments: 120,
    shares: 70,
    rating: 3,
    articleImage: articl2,
    title: "Quantum Computing in Cryptography",
    description:
      "How quantum computing is revolutionizing secure communication.",
    introduction:
      "Cryptography relies on the difficulty of certain mathematical problems...",
    sections: [
      {
        title: "Quantum Keys",
        content: "Quantum computers generate unbreakable keys...",
      },
      {
        title: "Post-Quantum Security",
        content: "Adapting encryption to withstand quantum attacks...",
      },
    ],
  },
  {
    id: "4",
    authorName: "Dr. Ethan Brown",
    profileImage: profile4,
    articleType: "Quantum Computing",
    publishDate: "2024-11-10",
    readingTime: "20 Min",
    views: 500,
    likes: 420,
    comments: 150,
    shares: 90,
    rating: 5,
    articleImage: articl3,
    title: "The Future of Quantum Internet",
    description: "Examining the potential of quantum networks.",
    introduction: "Quantum networks promise ultra-secure communication...",
    sections: [
      {
        title: "What is Quantum Internet?",
        content: "A network leveraging quantum entanglement...",
      },
      {
        title: "Benefits",
        content: "Unhackable communication and faster processing...",
      },
    ],
  },
  // AI Ethics
  {
    id: "5",
    authorName: "Jane Wilson",
    profileImage: profile5,
    articleType: "AI Ethics",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 3,
    articleImage: articl4,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "6",
    authorName: "Jane Wilson",
    profileImage: profile6,
    articleType: "AI Ethics",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 3,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "7",
    authorName: "Jane Wilson",
    profileImage: profile6,
    articleType: "AI Ethics",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  // (Space Exploration,
  {
    id: "8",
    authorName: "Jane Wilson",
    profileImage: profile7,
    articleType: "Space Exploration",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl6,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "9",
    authorName: "Jane Wilson",
    profileImage: profile8,
    articleType: "Space Exploration",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "10",
    authorName: "Jane Wilson",
    profileImage: profile11,
    articleType: "Space Exploration",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl1,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "10",
    authorName: "Jane Wilson",
    profileImage: profile9,
    articleType: "Space Exploration",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl2,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  //Biotechnology,
  {
    id: "11",
    authorName: "Jane Wilson",
    profileImage: profile10,
    articleType: "Biotechnology",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl3,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "12",
    authorName: "Jane Wilson",
    profileImage: profile6,
    articleType: "Biotechnology",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl4,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "13",
    authorName: "Jane Wilson",
    profileImage: profile7,
    articleType: "Biotechnology",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  //Renewable Energy
  {
    id: "14",
    authorName: "Jane Wilson",
    profileImage: profile8,
    articleType: "Biotechnology",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "15",
    authorName: "Jane Wilson",
    profileImage: profile5,
    articleType: "Biotechnology",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl1,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
  {
    id: "16",
    authorName: "Jane Wilson",
    profileImage: profile11,
    articleType: "Biotechnology",
    publishDate: "2024-11-02",
    readingTime: "10 Min",
    views: 250,
    likes: 180,
    comments: 70,
    shares: 40,
    rating: 4,
    articleImage: articl2,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability...",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases...",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data...",
      },
    ],
  },
];
