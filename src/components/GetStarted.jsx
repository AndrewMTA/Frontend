import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className="move">
    <a href="/Crowdfund">
  <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-purple-gradient p-[2px] cursor-pointer absolute mb-18 mr-15`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-white">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-white">Started</span>
      </p>
    </div>
  </div>
  </a>
  </div>
);

export default GetStarted;
