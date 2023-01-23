import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        
          <p className={`${styles.paragraph} ml-2`}>
          Get <span className="text-white"> $100</span> Toward your{" "}
            <span className="text-white">First</span> Campaign
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
        <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Next Level<br className="sm:block hidden" />{" "}
            <span className="text-gradient">Crowdfunding</span>{" "}
          </h1>
       
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Is Here
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Crowdfund and connect in a whole new way. Our feature rich platform enables both investors and companies to come together.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 mr-5px relative`}>
        <div className="mobileWrap">
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      
      </div>
    </section>
  );
};

export default Hero;
