import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallary from "react-grid-gallery";
import { getPropertiesDetails } from "../../action/properties/index";
import { connect } from "react-redux";
import Loading from "../../components/loading";

const Propertices__details = ({ getPropertiesDetails, details }) => {
  const { id } = useParams();

  const [IMAGES, setIMAGES] = useState([]);
  
  useEffect(() => {
    getPropertiesDetails(id);
  }, [getPropertiesDetails, id]);

  useEffect(() => {
    const imgarr = [];
    if (details) {
      details.more_photos.map((phn) =>
        imgarr.push({ src: phn.path, thumbnail: phn.path })
      );
      setIMAGES(imgarr);
    }
  }, [details]);

  if (!details) {
    return <Loading />;
  }

  const {
    // more_photos,
    name,
    // lga,
    // state,
    // purpose,
    type,
    address,
    featured_photo,
    description,
    status,
    price,
    plot_size,
    // features,
    payment_plans,
    _id,
  } = details;

  const {
    three_months_payment,
    six_months_payment,
    twelve_months_payment,
    eighteen_months_payment,
  } = payment_plans.full;

  console.log("featured_photo", featured_photo);
  /*   {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    { */

  return (
    <div className="m">
      <h1 className="font-bold text-xl sm:text-5xl text-black sm:ml-8 sm:p-8 p">
        {" "}
        Details
      </h1>
      <div className=" flex flex-col justify-center items-center">
        <div className=" max-w-6xl w-full">
          {/* propetice address */}
          <div className="flex justify-between items-center bg-white p-4 sm:p-12 shadow-lg">
            <div className="">
              <div className="flex justify-center items-center">
                {" "}
                <h1 className=" font-bold text-black sm:text-xl">
                  {name}
                </h1>{" "}
                <p className="bg-green-100 border border-green-800 text-green-800 ml-2 sm:ml-4  sm:font-bold rounded-full px-2">
                  {status}
                </p>
              </div>
              <div className="flex item-center py-4">
                <img
                  src="https://img.icons8.com/fluent/48/000000/maps.png"
                  className="w-6 h-6"
                  alt=""
                />
                <p className="sm:font-bold  text-black ">{address}</p>
              </div>
            </div>
            <div className="">
              <p className="sm:text-xl text-blue-900 sm:font-bold">
                Full: ₦{price.full}
              </p>
              <p className="font-bold ">{plot_size.full} / sq ft</p>
              <div className="mt-4">
                <p className="sm:text-xl text-blue-900 sm:font-bold">
                  Half: ₦{price.half}
                </p>
                <p className="font-bold ">{plot_size.half} / sq ft</p>
              </div>
            </div>
          </div>

          {/* image propertices*/}
          <div className="my-4 bg-white p-4 sm:p-8 shadow-lg ">
            <div>
              <img
                style={{ objectFit: "cover", height: "50%", width: "100%" }}
                className="rounded-lg w-auto"
                src={featured_photo}
                alt="aimart reactors images"
              />
            </div>

            <div className="sm:py-8">
              <Gallary
                images={IMAGES}
                rowHeight="50"
                enableImageSelection={false}
                thumbnailStyle={() => ({
                  height: "50px",
                  width: "70px",
                  objectFit: "cover",
                  backgroundColor: "red",
                })}
              />
            </div>
          </div>

          {/* Descriptions */}

          <div className="bg-white p sm:p-8 shadow-lg my-4">
            <h1 className="font-bold text-black text-xl mt-4">Descriptions</h1>
            <p className="text-gray-600 leading-loose tracking-wider font-light mt-4 sm:p-8">
              {description}
            </p>
          </div>

          {/* full descriptions details */}

          <div className="">
            <div className="grid-2">
              <div className="bg-white p-8 shadow-lg my-4 rounded-lg">
                <h1 className="font-medium text-black text-xl ">
                  Propertices Details
                </h1>

                <div className="grid-2 my-4">
                  <div className="">
                    <h1 className="text-gray-700 font-bold text-lg">
                      Full Plot Price
                    </h1>
                    <p className="text-blue-900 font-bold text-xl">
                      {price.full}
                    </p>

                    <h1 className="text-gray-700 font-bold text-lg pt-4">
                      Full Plot Size
                    </h1>
                    <p className=" text-black font-mono text-sm pt-2">
                      {plot_size.full} Sqm
                    </p>

                    <h1 className="text-gray-700 font-bold text-lg pt-4">
                      Propertice Type
                    </h1>
                    <p className=" text-black font-mono text-sm pt-2">{type}</p>

                    <h1 className="text-gray-700 font-bold text-lg pt-4">
                      Purchase status
                    </h1>
                    <p className=" text-black font-mono text-sm pt-2">
                      {status}
                    </p>

                    <h1 className="text-gray-700 font-bold text-lg pt-4">
                      Address
                    </h1>
                    <p className=" text-black font-mono text-sm pt-2">
                      {address}
                    </p>
                  </div>

                  <div className="">
                    <h1 className="text-gray-700 font-bold text-lg">
                      Half Plot Price
                    </h1>
                    <p className="text-blue-900 font-bold text-xl">
                      {price.half}
                    </p>
                    <h1 className="text-gray-700 font-bold text-lg pt-4">
                      Half Plot Size
                    </h1>
                    <p className=" text-black font-mono text-sm pt-2">
                      {plot_size.half} Sqm
                    </p>
                  </div>
                </div>

                <div className="bg-blue-100 border border-blue-900 p-4 mt-8 shadow-lg my-4 rounded-lg">
                  <h1 className="text-black text-blue-900 font-bold text-lg">
                    Features
                  </h1>
                  <p className="text-xs ">There are no features to display</p>
                </div>
              </div>

              {/* payment plan Full Plot */}
              <div className="bg-white p-8 shadow-lg my-4 rounded-lg">
                <div className="flex justify-center items-center">
                  <h1 className="font-medium text-black text-xl ">
                    Payment Plan
                  </h1>
                  <p className="font-bold text-pink-900 bg-purple-100 border border-purple-900 px-2 ml-4 rounded-full">
                    Full Plot
                  </p>
                </div>

                <div className="">
                  <h1 className="text-gray-700 font-bold text-lg mt-4">
                    3-months payment plan
                  </h1>
                  <p className="text-black font-mono text-sm pt-2">
                    Amount: ₦{three_months_payment.amount}
                  </p>
                  <p className="text-black font-mono text-sm pt-2">
                    Initial Deposit: ₦{three_months_payment.initial_deposit}
                  </p>
                </div>
                <div className="">
                  <h1 className="text-gray-700 font-bold text-lg mt-4">
                    6-months payment plan
                  </h1>
                  <p className="text-black font-mono text-sm pt-2">
                    Amount: ₦{six_months_payment.amount}
                  </p>
                  <p className="text-black font-mono text-sm pt-2">
                    Initial Deposit: ₦{six_months_payment.initial_deposit}
                  </p>
                </div>

                <div className="">
                  <h1 className="text-gray-700 font-bold text-lg mt-4">
                    12-months payment plan
                  </h1>
                  <p className="text-black font-mono text-sm pt-2">
                    Amount: ₦{twelve_months_payment.amount}
                  </p>
                  <p className="text-black font-mono text-sm pt-2">
                    Initial Deposit: ₦{twelve_months_payment.initial_deposit}
                  </p>
                </div>

                <div className="">
                  <h1 className="text-gray-700 font-bold text-lg mt-4">
                    18-months payment plan
                  </h1>
                  <p className="text-black font-mono text-sm pt-2">
                    Amount: ₦{eighteen_months_payment.amount}
                  </p>
                  <p className="text-black font-mono text-sm pt-2">
                    Initial Deposit: ₦{eighteen_months_payment.initial_deposit}
                  </p>
                </div>
              </div>
            </div>

            {/* Half plot payment plan */}
            <div className="bg-white p-8 shadow-lg my-4 rounded-lg">
              <div className="flex justify-center items-center">
                <h1 className="font-medium text-black text-xl ">
                  Payment Plan
                </h1>
                <p className="font-bold text-pink-900 bg-purple-100 border border-purple-900 px-2 ml-4 rounded-full">
                  Half Plot
                </p>
              </div>

              {/*  <div className="">
                <h1 className="text-gray-700 font-bold text-lg mt-4">
                  Outright Payment
                </h1>
                <p className="text-blue-900 font-bold text-xl">₦800,000.00</p>
              </div>
 */}
              <div className="">
                <h1 className="text-gray-700 font-bold text-lg mt-4">
                  3-months payment plan
                </h1>
                <p className="text-black font-mono text-sm pt-2">
                  Amount: ₦{payment_plans.half.three_months_payment.amount}
                </p>
                <p className="text-black font-mono text-sm pt-2">
                  Initial Deposit: ₦
                  {payment_plans.half.three_months_payment.initial_deposit}
                </p>
              </div>
              <div className="">
                <h1 className="text-gray-700 font-bold text-lg mt-4">
                  6-months payment plan
                </h1>
                <p className="text-black font-mono text-sm pt-2">
                  Amount: ₦{payment_plans.half.six_months_payment.amount}
                </p>
                <p className="text-black font-mono text-sm pt-2">
                  Initial Deposit: ₦
                  {payment_plans.half.six_months_payment.initial_deposit}
                </p>
              </div>

              <div className="">
                <h1 className="text-gray-700 font-bold text-lg mt-4">
                  12-months payment plan
                </h1>
                <p className="text-black font-mono text-sm pt-2">
                  Amount: ₦{payment_plans.half.twelve_months_payment.amount}
                </p>
                <p className="text-black font-mono text-sm pt-2">
                  Initial Deposit: ₦
                  {payment_plans.half.twelve_months_payment.initial_deposit}
                </p>
              </div>

              <div className="">
                <h1 className="text-gray-700 font-bold text-lg mt-4">
                  18-months payment plan
                </h1>
                <p className="text-black font-mono text-sm pt-2">
                  Amount: ₦{payment_plans.half.eighteen_months_payment.amount}
                </p>
                <p className="text-black font-mono text-sm pt-2">
                  Initial Deposit: ₦
                  {payment_plans.half.eighteen_months_payment.initial_deposit}
                </p>
              </div>
            </div>

            {/* call to action */}
            <div className="grid-2 my-12 p-4 sm:p-0">
              <a
                href={`https://app.aimartrealtors.com/app/properties/view/${_id}`}
                className=" bg-blue-800 text-white border border-blue-900 p text-center font-bold rounded-lg"
              >
                Buy Now
              </a>
              <a
                href={`https://app.aimartrealtors.com/app/properties/view/${_id}`}
                className=" bg-orange-800 text-white border border-orange-900 p text-center font-bold rounded-lg"
              >
                Make A Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    details: state.properties.details,
  };
};

export default connect(mapStateToProps, { getPropertiesDetails })(
  Propertices__details
);
