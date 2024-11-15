import React from "react";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaRegStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { singleNews } = props || {};
  return (
    <div className="card bg-base-100 shadow-md p-4 rounded-lg w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <img
            src={singleNews.author.img}
            alt={singleNews.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{singleNews.author.name}</p>
            <p className="text-xs text-gray-500">
              {singleNews.author.published_date}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      <h2 className="text-lg font-semibold mb-2">{singleNews.title}</h2>

      <img
        src={singleNews.image_url}
        alt="Thumbnail"
        className="w-full h-48 rounded-lg object-cover mb-2"
      />

      <p className="text-sm text-gray-700 mb-3">
        {singleNews.details}
        <Link
          to={`/news/${singleNews._id}`}
          className="text-blue-500 cursor-pointer"
        >
          Read More
        </Link>
      </p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-1">
          {/* <FaRegStar className="text-yellow-500" /> */}
          <span className="font-semibold text-sm">
            {singleNews.rating.number}
            <Rating
              className="text-yellow-500"
              initialRating={singleNews.rating.number}
              emptySymbol={<CiStar />}
              fullSymbol={<FaStar />}
              readonly
            ></Rating>
          </span>
        </div>

        <div className="flex items-center space-x-1 text-gray-500">
          <FaRegEye />
          <span className="text-sm">499</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
