import React from 'react'
import food3 from "../assets/food3.jpg"
import Vector from "../assets/vector3.png"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
    const bgImage={
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    }
  return (
    <>
        <div className="min-h-[550px] dark:bg-gray-800">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={food3}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold dark:text-white text-center">
                  Despcrition
                </h1>
                <p className="text-sm text-gray-500 ">
                "Savor the Flavor! Discover our delectable menu, book your table effortlessly, and enjoy exclusive offers. Taste the difference with every bite!"
                  <br />
                  <br />
                  Dive into our carefully curated menu featuring a diverse range of gourmet dishes crafted from the freshest ingredients. Whether you're craving a succulent steak, a flavorful vegetarian delight, or a decadent dessert, our menu is designed to satisfy every palate.
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner