import React from "react";
import { Link } from "react-router-dom";

const title = "More Then 60,000 Customers are Happy With Us";

const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  {
    imgUrl: "/images/clients/01.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join from Canada",
  },
  {
    imgUrl: "/images/clients/02.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join from USA",
  },
  {
    imgUrl: "/images/clients/03.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join from West Bengal",
  },
  {
    imgUrl: "/images/clients/02.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join from Australia",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];

const LocationSprad = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>

        <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((val, i) => (
              <div key={i} className="client-list">
                <Link to="/sign-up" className="client-content">
                  <span>{val.text}</span>
                </Link>
                <div className="client-thumb">
                  <img src={val.imgUrl} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprad;
