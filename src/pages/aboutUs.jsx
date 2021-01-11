import React from "react";

const aboutUs = () => {
  const renderCards = () => {
    return (
      <div className="bg-white shadow-lg p-4 shadow-lg">
        <img src="" alt="logo" />
        <h1 className="font-medium text-lg">Development</h1>
        <p>
          We create value by orchestrating the process of property development
          from start to finish with our understanding in real-estate, the risk
          and cost involved in property development is reduced.
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col  items-center h-screen">
      <div className=" max-w-6xl w-full">
        <div className="bg-white mt-16">
          <span className="font-bold text-4xl text-black">
            Our Mission Is To Find House
          </span>
          <div className="grid-2 w-full p-10">
            <div className=" tracking-wider leading-loose font-mono">
              Aimart Realtors is a real estate management and development firm
              with years of experience in providing excellent housing/shelter
              solution to a wide spectrum of clientele or prospective property
              owners. At Aimart Realtors, we build homes, offices and shopping
              malls that meet the best standard obtained across the globe for
              individuals and corporate concerns who have also continued to
              build greater confidence in our products and services. Since the
              inception of our company, we have successfully provide end-to-end,
              client oriented mortgage finance solutions and real estate
              portfolio that offer optimized shelters for both individuals and
              businesses. Overtime, our company has remained consistent to it's
              vision as a " a one stop solution provider in the global real
              estate business" and thus continues to design, conceptualize,
              build and manage decent and affordable residental/
              office/commercial accomdations that are execllent for habitation
              and investment.
            </div>

            <div className="">
              <img
                alt=""
                src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
              />
            </div>
          </div>
        </div>

       <div className="my-4">
       <h1 className="text-3xl font-medium">Why Choose Us</h1>
        <div className="grid-3">
          {renderCards()}
          {renderCards()}
          {renderCards()}
        </div>
       </div>
      </div>
    </div>
  );
};

export default aboutUs;
