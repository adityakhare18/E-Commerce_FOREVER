import React from "react";
import Card from "./Card";

const LatestCollections = () => {
  const info2 = {
    box1: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917173/xgx4xzvddpido94vs6em.png",
      content: "Men Slim Fit Relaxed Denim Jackett",
      price: "$72",
    },
    box2: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917156/qd1lzhhdz3wojqxdi9ca.png",
      content: "Men Slim Fit Relaxed Denim Jacket",
      price: "$86",
    },
    box3: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917222/xhtos8xgwvlruwzpikdm.png",
      content: "Men Slim Fit Relaxed Denim Jacket",
      price: "$80",
    },
    box4: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917256/qdlgueysnexvid0miiip.png",
      content: "Kid Tapered Slim Fit Trouser",
      price: "$56",
    },
    box5: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917080/puhxgivhgeh8tiqhnpjk.png",
      content: "Women Zip-Front Relaxed Fit Jacket",
      price: "$78",
    },
  };

  return (
    <div className="my-20">
      <div className="text-center py-8 text-3xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
          BEST
            <span className="text-gray-700 font-medium">SELLERS</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, Lorem
          ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
      
      {/* First Row */}
      <div className="w-full mx-auto flex gap-4 px-32 mb-7">
        <Card
          imgUrl={info2.box1.img}
          content={info2.box1.content}
          price={info2.box1.price}
        />
        <Card
          imgUrl={info2.box2.img}
          content={info2.box2.content}
          price={info2.box2.price}
        />
        <Card
          imgUrl={info2.box3.img}
          content={info2.box3.content}
          price={info2.box3.price}
        />
        <Card
          imgUrl={info2.box4.img}
          content={info2.box4.content}
          price={info2.box4.price}
        />
        <Card
          imgUrl={info2.box5.img}
          content={info2.box5.content}
          price={info2.box5.price}
        />
      </div>
    </div>
    // h-[687px]
  );
};

export default LatestCollections;
