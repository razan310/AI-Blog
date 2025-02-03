import ContentSection from "./ContentSection";

const FutureTechFeatures = () => {
    return (
        <section>
            <div className="flex items-center w-full bg-[#262626] py-[120px] border border-b-0 border-Black_15 container-padding
             max-[1440px]:p-[80px] max-[500px]:flex-col max-[500px]:px-[16px] max-[500px]:py-[40px]">
                <div>
                    <p className="bg-[#333333] font-Inter font-medium text-xl text-white py-[6px] px-[10px] w-max my-4 rounded
                    max-[1440px]:text-[16px] max-[1440px]:py-[4px] max-[1440px]:px-[8px] max-[500px]:text-[14px]">Unlock the Power of</p>
                    <h1 className="font-Kumbh font-medium text-white text-[58px]
                    max-[1440px]:text-[44px] max-[500px]:text-[28px]">FutureTech Features</h1>
                </div>
            </div>
            <div className=" container-padding">
                <ContentSection
                    icon="/AI-Blog/src/assets/icon/Icon(4).svg"
                    title="Future Technology Blog"
                    description="Stay informed with our blog section dedicated to future technology."
                    features={[
                        { title: "Quantity", description: "Over 1,000 articles on emerging tech trends and breakthroughs." },
                        { title: "Variety", description: "Articles cover fields like AI, robotics, biotechnology, and more." },
                        { title: "Frequency", description: "Fresh content added daily to keep you up to date." },
                        { title: "Authoritative", description: "Written by our team of tech experts and industry professionals." },
                    ]}
                />
                <ContentSection
                    icon="/AI-Blog/src/assets/icon/Icon(5).svg"
                    title="Research Insights Blogs"
                    description="Dive deep into future technology concepts with our research section."
                    features={[
                        { title: "Depth", description: "500+ research articles for in-depth understanding." },
                        { title: "Graphics", description: "Visual aids and infographics to enhance comprehension." },
                        { title: "Trends", description: "Explore emerging trends in future technology research." },
                        { title: "Contributors", description: "Contributions from tech researchers and academics." },
                    ]}
                />
            </div>
        </section>
    );
};
export default FutureTechFeatures;