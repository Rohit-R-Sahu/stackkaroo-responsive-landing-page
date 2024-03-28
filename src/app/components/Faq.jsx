"use client";
import Image from "next/image";
import arrowDown from "../assets/images/svgs/arrowdown.svg";
import { useState } from "react";

const Faq = () => {
  const [acc, setAcc] = useState(null);

  const faqArr = [
    {
      head: "What are Stackkaroo's Project Execution Models?",
      context:
        "Stackkaroo's Project Execution Models are a group of rules and methods made to simplify web development projects. These models give a clear way to plan, carry out and finish projects. This makes sure they are successful and done well.",
    },
    {
      head: "What is the best project execution model for web development?",
      context:
        "The way we do a project can change based on things like its needs, how many people are on the team, time limits and what the client wants. Agile and DevOps are often chosen for making websites because they can quickly change, give results fast, and work well with new needs. But, for projects with clear and steady needs, the Waterfall method can also work well. We must check what each project needs before picking the best model for it.",
    },
    {
      head: "How do Stackkaroo's Project Execution Models help with my web development projects?",
      context:
        "Stackkaroo's Project Execution Models help manage projects in a step-by-step way. This makes it easier to organize, talk to others well, and be more productive. Use these examples to make sure your website projects finish on time, within the money limits and make the client happy.",
    },
    {
      head: "Can Stackkaroo's Project Execution Models be used for all kinds of web development projects?",
      context:
        "Yes, Stackkaroo's Project Models are made to change and fit different types of web projects. If you're making a little website or a big web app, these models can be changed to match your special project needs.",
    },
    {
      head: "How do Stackkaroo's Project Execution Models help in reducing risks in projects?",
      context:
        "Stackkaroo's Project Execution Models have risk management tactics. These help you find problems early and create plans for what to do if they happen. By dealing with problems before they happen, you can lessen their effects on your website building projects and make them run smoother.",
    },
    {
      head: "Can Stackkaroo's Project Execution Models be combined with current project management tools?",
      context:
        "Yes, Stackkaroo's Project Execution Models can easily be connected with well-known project management tools like Jira, Trello or Asana. This mixing helps teamwork, job tracking and progress check. It makes projects do better.",
    },
  ];

  const handleAccordion = (i) => {
    if (i != acc) {
      setAcc(i);
    } else {
      setAcc(null);
    }
  };

  return (
    <>
      <section>
        <h1 className="scope-h1">FAQS</h1>
        <div className="faq-wrapper">
          <div className="acc-container">
            {faqArr.map((item, i) => (
              <div className={acc == i ? "acc-box active" : "acc-box"} key={i}>
                <div className="acc-heading">
                  <h2>{item.head}</h2>
                  <Image
                    src={arrowDown}
                    alt=""
                    onClick={() => handleAccordion(i)}
                    className="acc-arrow"
                  />
                </div>
                <div className="acc-text">
                  <p>{item.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
