import articl1 from "../../assets/images/BlogOpenPage/SimilarNews1.png";
import articl2 from "../../assets/images/BlogOpenPage/SimilarNews2.png";
import articl3 from "../../assets/images/BlogOpenPage/SimilarNews1.png";
import articl4 from "../../assets/images/BlogOpenPage/SimilarNews3.png";
import articl5 from "../../assets/images/NewsPage/Climate Action.png";
import articl6 from "../../assets/images/BlogOpenPage/hero.png";
import likeicon from "../../assets/icon/Icon(6).svg";
import commenticon from "../../assets/icon/Icon(7).svg";
import shareicon from "../../assets/icon/Icon(8).svg";
import viewsicon from "../../assets/icon/Icon (22).svg";
import arrowicon from "../../assets/icon/Icon(23).svg";
import ArrowUpRight from "../../assets/icon/Icon.svg";
import profile1 from "../../assets/images/HomePage/Profile1.png";
import profile2 from "../../assets/images/HomePage/Profile2.png";
import profile3 from "../../assets/images/HomePage/Profile3.png";
import profile4 from "../../assets/images/HomePage/Profile4.png";
import profile5 from "../../assets/images/HomePage/Profile5.png";
import profile6 from "../../assets/images/HomePage/Profile6.png";
import profile7 from "../../assets/images/HomePage/Profile7.png";
import profile8 from "../../assets/images/HomePage/Profile8.png";
import profile10 from "../../assets/images/HomePage/Profile10.png";
import profile11 from "../../assets/images/HomePage/Profile11.png";

export interface ArticleSection {
  title: string; // عنوان القسم
  content: string; // نص الفقرة
}

export interface Article {
  id: number; // معرف فريد للمقال
  authorName: string; // اسم الكاتب
  profileImage: string; // صورة بروفايل الكاتب
  likeicon: string; // ايقونة الاعجاب
  commenticon: string; // ايقونة التعليق
  shareicon: string; // ايقونة المشاركة
  viewsicon: string; // ايقونةالمشاهدات
  ArrowUpRight:string;
  arrowicon: string; // ايقونةالمشاهدات
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
    id: 1,
    authorName: "Emily Walker",
    profileImage: profile1,
    articleType: "Healthcare",
    publishDate: "October 15, 2023",
    readingTime: "10 Min",
    views: 50,
    likes: 0,
    comments: 45,
    shares: 20,
    rating: 5,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl6,
    title: "The Rise of Artificial Intelligence in Healthcare",
    description: "An in-depth look into how AI is shaping the future.",
    introduction:
      "Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.",
    sections: [
      {
        title: "Artificial Intelligence (AI)",
        content: "Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Predictive Analytics and Disease Prevention",
        content: "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.",
      },
      {
        title: "Ethical Considerations",
        content: "One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.",
      },
    ],
  },
  // Quantum Computing
  {
    id: 2,
    authorName: "John Doe",
    profileImage: profile2,
    articleType: "Quantum Computing",
    publishDate: "November 5, 2023",
    readingTime: "12 Min",
    views: 300,
    likes: 0,
    comments: 80,
    shares: 50,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl1,
    title: "Understanding Quantum Bits",
    description: "Exploring the basics of quantum mechanics in computing.",
    introduction:
      "Quantum bits, or qubits, form the foundation of quantum computing. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.",
    sections: [
      {
        title: "Introduction to Qubits",
        content: "Qubits can exist in superposition states and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Applications",
        content: "Quantum computing can solve complex problems and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Challenges",
        content: "Building stable qubits is a major hurdle and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  {
    id: 3,
    authorName: "Alice Smith",
    profileImage: profile3,
    articleType: "Quantum Computing",
    publishDate: "December 10, 2023",
    readingTime: "15 Min",
    views: 400,
    likes: 0,
    comments: 120,
    shares: 70,
    rating: 3,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl2,
    title: "Quantum Computing in Cryptography",
    description:
      "How quantum computing is revolutionizing secure communication.",
    introduction:
      "Cryptography relies on the difficulty of certain mathematical problems.In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.",
    sections: [
      {
        title: "Quantum Keys",
        content: "Quantum computers generate unbreakable keys. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Post-Quantum Security",
        content: "Adapting encryption to withstand quantum attacks. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  {
    id: 4,
    authorName: "Ethan Brown",
    profileImage: profile4,
    articleType: "Quantum Computing",
    publishDate: "December 11, 2024",
    readingTime: "20 Min",
    views: 500,
    likes: 0,
    comments: 150,
    shares: 90,
    rating: 5,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl3,
    title: "The Future of Quantum Internet",
    description: "Examining the potential of quantum networks.",
    introduction: "Quantum networks promise ultra-secure communication. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    sections: [
      {
        title: "What is Quantum Internet?",
        content: "A network leveraging quantum entanglement  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Benefits",
        content: "Unhackable communication and faster processing  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  // AI Ethics
  {
    id: 5,
    authorName: "Jane Wilson",
    profileImage: profile5,
    articleType: "AI Ethics",
    publishDate: "November 7, 2022",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 3,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl4,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  {
    id: 6,
    authorName: "Jane Wilson",
    profileImage: profile6,
    articleType: "AI Ethics",
    publishDate: "October 13, 2022",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 3,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
    "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
  sections: [
    {
      title: "AI Bias",
      content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
    {
      title: "Privacy Concerns",
      content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
  ],
  },
  {
    id: 7,
    authorName: "Jane Wilson",
    profileImage: profile6,
    articleType: "AI Ethics",
    publishDate: "June 15, 2023",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  // Space Exploration
  {
    id: 8,
    authorName: "Jane Wilson",
    profileImage: profile7,
    articleType: "Space Exploration",
    publishDate: "May 12, 2021",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl6,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
    "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
  sections: [
    {
      title: "AI Bias",
      content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
    {
      title: "Privacy Concerns",
      content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
  ],
  },
  {
    id: 9,
    authorName: "Jane Wilson",
    profileImage: profile8,
    articleType: "Space Exploration",
    publishDate: "May 12, 2021",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  {
    id: 10,
    authorName: "Jane Wilson",
    profileImage: profile11,
    articleType: "Space Exploration",
    publishDate: "April 12, 2021",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl1,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
    "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
  sections: [
    {
      title: "AI Bias",
      content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
    {
      title: "Privacy Concerns",
      content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
  ],
  },
  //Biotechnology,
  {
    id: 11,
    authorName: "Jane Wilson",
    profileImage: profile10,
    articleType: "Biotechnology",
    publishDate: "March 12, 2021",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl3,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  {
    id: 12,
    authorName: "Jane Wilson",
    profileImage: profile6,
    articleType: "Biotechnology",
    publishDate: "March 10, 2020",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl4,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
    "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
  sections: [
    {
      title: "AI Bias",
      content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
    {
      title: "Privacy Concerns",
      content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
  ],
  },
  {
    id: 13,
    authorName: "Jane Wilson",
    profileImage: profile7,
    articleType: "Biotechnology",
    publishDate: "July 15, 2022",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
    "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
  sections: [
    {
      title: "AI Bias",
      content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
    {
      title: "Privacy Concerns",
      content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
  ],
  },
  //Renewable Energy
  {
    id: 14,
    authorName: "Jane Wilson",
    profileImage: profile8,
    articleType: "Healthcare",
    publishDate: "July 10, 2021",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl5,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
    "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
  sections: [
    {
      title: "AI Bias",
      content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
    {
      title: "Privacy Concerns",
      content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    },
  ],
  },
  {
    id: 15,
    authorName: "Jane Wilson",
    profileImage: profile5,
    articleType: "Biotechnology",
    publishDate: "Januray 15, 2022",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl1,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  {
    id: 16,
    authorName: "Jane Wilson",
    profileImage: profile11,
    articleType: "Biotechnology",
    publishDate: "Januray 12, 2021",
    readingTime: "10 Min",
    views: 250,
    likes: 0,
    comments: 70,
    shares: 40,
    rating: 4,
    likeicon: likeicon,
    commenticon: commenticon,
    shareicon: shareicon,
    viewsicon: viewsicon,
    arrowicon: arrowicon,
    ArrowUpRight: ArrowUpRight,
    articleImage: articl2,
    title: "The Ethical Dilemmas of AI",
    description: "Exploring the moral challenges posed by AI development.",
    introduction:
      "AI brings ethical concerns like bias, privacy, and accountability. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
    sections: [
      {
        title: "AI Bias",
        content: "Algorithms can perpetuate societal biases  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
      {
        title: "Privacy Concerns",
        content: "AI systems collect vast amounts of data  The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.",
      },
    ],
  },
  
];

export const articleSection: ArticleSection[] = articles[0].sections.map(section => ({
  title: section.title,
  content: section.content,
}));