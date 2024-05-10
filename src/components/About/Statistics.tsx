import { useState } from "react";
import CountUp from "react-countup";
// const VisibilitySensor = require("react-visibility-sensor");
import ScrollTrigger from "react-scroll-trigger";
const Statistics = () => {
  const Statistics = [
    {
      number: 762,
      text: "Completed Project",
    },

    {
      number: 54,
      text: "Branches",
    },
    {
      number: 4,
      text: "Countries",
    },
    {
      number: 1217,
      text: "Fund Raised",
    },
  ];

  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="container mx-auto">
      <div className="text-center lg:text-5xl text-3xl font-bold text-secondary">
        <h2>Statistics</h2>
      </div>

      <div
        className="grid lg:grid-cols-4 bg-gray-100 mt-10 mb-20 justify-center items-center border"
        data-aos="fade-up"
      >
        {Statistics.map((stData, idx) => {
          return (
            <div key={idx}>
              <div className="flex justify-center items-center flex-col mb-12 pt-12">
                <h2 className="text-5xl font-bold text-secondary">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                  >
                    {counterOn && <CountUp end={stData.number} duration={4} />}
                  </ScrollTrigger>
                </h2>
                <h2 className="font-bold mt-5 text-2xl">{stData.text}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statistics;
