import Image from "next/image";
import modelImg from "../assets/images/Group 169.png";
import SwiperModel from "./SwiperModel";
export const ModelBox = () => {
  return (
    <>
      <section>
        <div className="model-container">
          <Image src={modelImg} alt="" className="model-img" />
        </div>
      </section>
      <SwiperModel />
    </>
  );
};
