import React from "react";
import Card from "./Card";

const LatestCollections = () => {
  const info = {
    box1: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917196/ljykks14jmujhwsvbfxm.png",
      content: "Kid Tapered Slim Fit Trouser",
      price: "$38",
    },
    box2: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719916685/xcfkzzrr7ndf3znt29q0.png",
      content: "Men Round Neck Pure Cotton T-shirt",
      price: "$64",
    },
    box3: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719915962/vtac5yjyba8sp0uhqgcf.png",
      content: "Boy Round Neck Pure Cotton T-shirt",
      price: "$60",
    },
    box4: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719916758/zax0kd3nvxzya3tgidck.png",
      content: "Women Zip-Front Relaxed Fit Jacket",
      price: "$74",
    },
    box5: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719916004/bmhdmzxqpjizud4jj2ce.png",
      content: "Men Tapered Fit Flat-Front Trousers",
      price: "$58",
    },
  };
  const info2 = {
    box1: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917329/cnnkimbqq2zo2ie52fka.png",
      content: "Men Slim Fit Relaxed Denim Jacket",
      price: "$84",
    },
    box2: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917306/vhsow6peromagvmj3ehj.png",
      content: "Women Zip-Front Relaxed Fit Jacket",
      price: "$68",
    },
    box3: {
      img: "https://res.cloudinary.com/dswoezb1i/image/upload/v1719917283/ggluaowvfgaolqa59whw.png",
      content: "Kid Tapered Slim Fit Trouser",
      price: "$40",
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
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            LATEST
            <span className="text-gray-700 font-medium">COLLECTIONS</span>
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
          imgUrl={info.box1.img}
          content={info.box1.content}
          price={info.box1.price}
        />
        <Card
          imgUrl={info.box2.img}
          content={info.box2.content}
          price={info.box2.price}
        />
        <Card
          imgUrl={info.box3.img}
          content={info.box3.content}
          price={info.box3.price}
        />
        <Card
          imgUrl={info.box4.img}
          content={info.box4.content}
          price={info.box4.price}
        />
        <Card
          imgUrl={info.box5.img}
          content={info.box5.content}
          price={info.box5.price}
        />
      </div>
      {/* {secound row} */}
      <div className="w-full mx-auto flex gap-4 px-32">
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
