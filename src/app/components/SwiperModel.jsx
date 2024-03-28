"use client";
import agileModel from "../assets/images/svgs/Group 268.svg";
import devOpsModel from "../assets/images/svgs/Group 269.svg";
import iterativeModel from "../assets/images/svgs/Group 264.svg";
import waterfallModel from "../assets/images/svgs/Group 267.svg";
import { useEffect, useRef } from "react";
import Image from "next/image";
const SwiperModel = () => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <>
      <section>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1"
          navigation="true"
          pagination="false"
          className="gap-30"
        >
          <swiper-slide>
            <div className="model-heading">
              <h1>Agile Model</h1>

              <div className="model-container">
                <div className="models">
                  <Image src={agileModel} className="model-img" />
                </div>
                <div className="models">
                  <p className="text-para">
                    The Agile model is adaptable and flexible in software
                    development, following the Agile Manifesto principles and
                    focusing on customer satisfaction, working software, and
                    regular feedback. It breaks down large projects into smaller
                    increments released to customers as completed. <br /> <br />
                    The Agile model is ideal for projects with unclear
                    requirements and frequent updates. It enhances communication
                    and collaboration among team members for faster development
                    and better software quality. <br /> <br />
                    For instance, let's consider a basic Agile model for
                    developing a web application: - Planning, Designing,
                    Implementing, Testing, Reviewing, Iterating, Deploying,
                    Maintaining
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="model-heading">
              <h1>DevOps Model</h1>

              <div className="model-container">
                <div className="models">
                  <Image src={devOpsModel} className="model-img" />
                </div>
                <div className="models">
                  <p className="text-para">
                    The DevOps methodology is fast-paced, focusing on rapid
                    iteration and continuous deployment. It combines software
                    development and IT operations to expedite time to market and
                    enhance software quality. Key aspects include automation,
                    continuous integration and delivery, and fostering
                    collaboration between teams. <br />
                    <br />
                    The DevOps approach proves particularly beneficial for
                    projects that require frequent updates or releases. By
                    automating various tasks, it effectively minimizes the risk
                    of human error and boosts overall efficiency.
                    <br />
                    <br />
                    To illustrate a basic DevOps model for web application
                    development, the following steps are typically followed: -
                    Planning, Development, Testing, Deployment, Monitoring,
                    Feedback, Improvement
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="model-heading">
              <h1>Iterative Model</h1>

              <div className="model-container">
                <div className="models">
                  <Image src={iterativeModel} className="model-img" />
                </div>
                <div className="models">
                  <p className="text-para">
                    The Iterative model is a software development approach that
                    resembles the process of assembling a puzzle, where each
                    piece is added one at a time. This model involves a series
                    of iterative cycles, where each cycle focuses on developing
                    a functional increment of the software.
                    <br />
                    <br />
                    This cycle involves planning, designing, implementing,
                    testing, and delivering increments until the final product
                    is complete. It's useful for projects with unknown customer
                    needs, requiring frequent advice and changes. It enables
                    fast software development and accommodates project changes.
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="model-heading">
              <h1>Waterfall Model</h1>

              <div className="model-container">
                <div className="models">
                  <Image src={waterfallModel} className="model-img" />
                </div>
                <div className="models">
                  <p className="text-para">
                    The Waterfall model is a step-by-step approach to software
                    development, where each phase must be completed before
                    moving on to the next. It follows a linear sequence,
                    starting with requirements gathering, followed by design,
                    implementation, testing, deployment, and maintenance. Once a
                    phase is finished, there is no going back to the previous
                    phase.
                    <br />
                    <br />
                    The Waterfall model is suitable for projects with
                    well-defined requirements and minimal chances of requirement
                    changes. However, it can be difficult to incorporate changes
                    once a phase is completed, and accurately estimating the
                    time required for each phase can also pose challenges.
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </section>
    </>
  );
};

export default SwiperModel;
