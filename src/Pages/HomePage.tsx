
import CardSection from "../Components/RK_Hero/CardSection";
import Hero from "../Components/RK_Hero/Hero";
import Article from "../Components/Article/Article"
import Testimonials from "../Components/Testimonials/Testimonials"


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
      <CardSection/>

    
   <Article/>
   <Testimonials/>

    </div>
  );
};

export default HomePage;
