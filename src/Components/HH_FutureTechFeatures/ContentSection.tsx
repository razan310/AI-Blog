
interface FeatureCardProps {
    title: string;
    description: string;
}

interface ContentSectionProps {
    icon: string;
    title: string;
    description: string;
    features: FeatureCardProps[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
    return (
        <div className=" bg-Black_15 p-4 rounded-2xl  text-white">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};


const ContentSection: React.FC<ContentSectionProps> = ({ icon, title, description, features }) => {
    return (
        <div className="  text-white flex flex-col md:flex-row gap-6 border-b-2 border-Black_15">
            <div className=" py-[155px] flex-1 flex flex-col  border-r-2 border-Black_15 
            max-[1440px]:py-[122.5px] max-[767px]:border-r-0 max-[767px]:py-[50px]">
            <img src={icon} alt={title} className="mb-4 w-20" />
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-400 mt-2">{description}</p>
            </div>
            <div className="py-20 pl-20 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4
            max-[1440px]:py-[60px] max-[1440px]:pl-[60px] max-[767px]:py-[30px] max-[767px]:pl-[0px]">
                {features.map((feature, index) => (
                    <FeatureCard key={index} title={feature.title} description={feature.description} />
                ))}
            </div>
        </div>
    );
};

export default ContentSection;