import React from "react";

const LandingPage = () => {
  return (
    <div className="w-[1259px] h-[505px] mx-32 flex justify-center items-center text-center border-[1px] border-zinc-500 text-[#414141]">
      <div className="content w-1/2 sm:w-1/2 flex items-center justify-center py-10 sm:py-0 flex-col">
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="text-base font-medium">Our BestSellers</p>
        </div>
        <h1 className="py-3 text-5xl font-normal">Latest Arrivals</h1>
        <div class="flex items-center gap-2">
          <p class="font-semibold text-sm md:text-base">SHOP NOW</p>
          <p class="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
        </div>
      </div>
      <div className="img w-1/2 bg-cover">
        <img src="https://foreverbuy.in/assets/hero_img-DOCOb6wn.png" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
