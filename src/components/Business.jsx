import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px]  ${index !== features.length - 1 ? "mb-10" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full  bg-purple-gradient ${styles.flexCenter}`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
     <div className=" border-[1px] border-[#D10CB1] w-[584px] rounded-md h-[254px] mt-5 mr-10 mb-10 p-5">
      <h2 className="text-white  text-[42px]">Interested in raising capital?</h2>
      <a href="/Crowdfund"><button className="rounded-md border-[1px] mt-10 p-3 border-[#D10CB1] text-white text-[25px]">Get Started</button>
      </a>   </div>
     <div  className="border-[1px] border-[#0091FA] rounded-md w-[584px] mr-10 h-[254px] p-5">
      <h2 className="text-white text-[42px] ">Interested in investing?</h2>
      <a href="/Invest"><button className="rounded-md border-[1px] mt-10 p-3 border-[#0091FA] text-white text-[25px]">Get Started</button>
      </a>    </div>

    
    </div>

    <div className={`${layout.sectionImg}text-left flex-col mb-4`}>
    <h2 className="text-white text-start text-[42px] mr-45 mb-10">Why Pitch Connect?</h2>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
