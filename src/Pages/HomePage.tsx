
import CardSection from "../Components/RK_Hero/CardSection";
import Hero from "../Components/RK_Hero/Hero";
import Article from "../Components/HH_Article/Article"
import Testimonials from "../Components/HH_Testimonials/Testimonials"
import FutureTechFeatures from "../Components/HH_FutureTechFeatures/FutureTechFeatures";
import BookSection from "../Components/HH_Ebook/BookSection";


const HomePage = () => {
  return (
    <div>

      <Hero
        title="Explore the Frontiers of Artificial Intelligence"
        subtitle="Your Journey to Tomorrow Begins Here"
        description="Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI."
        resourceText="Explore 1000+ resources"
        resourceDescription="Over 1,000 articles on emerging tech trends and breakthroughs."
      />
      <CardSection />

      <FutureTechFeatures />
      <Article />
      <BookSection />
      <Testimonials />

    </div>
  );
};

export default HomePage;
