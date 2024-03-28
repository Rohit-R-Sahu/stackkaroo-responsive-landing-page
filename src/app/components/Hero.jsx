import heroImg from "../assets/images/heroImg.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="hero-content">
          <h2>Boost Your Web Development Success with Stackkaroo&apos;s</h2>
          <h1>PROJECT EXECUTION MODEL</h1>
          <button className="btn">Let&apos;s Discuss</button>
        </div>
        <div className="hero-image">
          <Image src={heroImg} alt="" className="heroImg" />
        </div>
      </div>
      <div className="service-desc">
        <ul className="service-desc-list">
          <li>Flexible</li>
          <li>Client-Centric</li>
          <li>Balanced</li>
        </ul>
        <p className="text-para">
          Every project is one-of-a-kind, which means it needs to be treated
          with care and attention. In addition to considering the cost, time,
          and scope, the relationship between the client and the agency is also
          crucial in maintaining a balance.
        </p>
      </div>
    </section>
  );
};

export default Hero;
