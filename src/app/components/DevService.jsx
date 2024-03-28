"use client";
import Image from "next/image";
import brainstorm from "../assets/images/svgs/brainstorm__1_-removebg-preview 1.svg";
import dataRemove from "../assets/images/svgs/data-removebg-preview 1.svg";
import paymentMethod from "../assets/images/svgs/payment-method-removebg-preview 1.svg";
import qualityAssurance from "../assets/images/svgs/quality-assurance-removebg-preview 1.svg";
import reportRemove from "../assets/images/svgs/report-removebg-preview 1.svg";
import satisfaction from "../assets/images/svgs/satisfaction-removebg-preview 1.svg";
import socialMedia from "../assets/images/svgs/social-media-removebg-preview 1.svg";
import techSupport from "../assets/images/svgs/technical-support__1_-removebg-preview 1.svg";
import webDesign from "../assets/images/svgs/web-design-removebg-preview 1.svg";
import SwiperCard from "./SwiperCard";
import useWindowResize from "../hooks/useWindowResize";
const DevService = () => {
  const { width, height } = useWindowResize();

  const arr = [
    {
      image: dataRemove,
      context: "Leading and Affordable Website Development company in India",
    },
    {
      image: reportRemove,
      context: "Highly Competitive and Affordable Pricing Models",
    },
    {
      image: webDesign,
      context: "Customized and Readymade App Development Solutions",
    },
    {
      image: paymentMethod,
      context: "Cashless, Secure and Multiple Payment Methods",
    },
    {
      image: techSupport,
      context: "Streamlined Operations and Post-Launch Support",
    },
    {
      image: brainstorm,
      context: "Experienced and highly qualified team of Professionals",
    },
    {
      image: socialMedia,
      context: "Reviews, Ratings & Social Media Integration",
    },
    {
      image: satisfaction,
      context: "Enhanced Customer Satisfaction ",
    },
    {
      image: qualityAssurance,
      context: "Commitment to Quality and Timely Delivery",
    },
  ];

  return (
    <>
      <section>
        <div>
          <h1 className="dev-service-heading">
            Why should you Choose Stackkaroo&apos;s Website Development Service?
          </h1>
          {width < 700 ? (
            <SwiperCard arr={arr} />
          ) : (
            <div className="box-container">
              {arr.map((item, i) => (
                <div className="box-grad">
                  <div className="box">
                    <Image className="box-img" src={item.image} />
                    <p>{item.context}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DevService;
