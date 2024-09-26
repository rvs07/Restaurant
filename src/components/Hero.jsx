import React from 'react'
import food2 from "../assets/food2.jpg"
import food3 from "../assets/food3.jpg"
import Vector from "../assets/vector3.png"
import biryani2 from "../assets/biryani2.png"
const ImageList=[
    {
        id:1,
        img: biryani2,
    },
    {
        id:2,
        img: food2,
    },
    {
        id:3,
        img: food3,
    },
]

const Hero = () => {
    const [imageId, setImageId] = React.useState(biryani2);
  
    const bgImage = {
      backgroundImage: `url(${Vector})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
    };
  
    return (
      <>
        <div
          className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
          style={bgImage}
        >
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div
                className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Welcome{" "}
                  <span class="bg-clip-text text-transparent bg-red-600">
                    Foodie
                  </span>{" "}
                  Zone
                </h1>
                <p className="text-sm ">
                Discover our unique blend of flavors and enjoy an unforgettable dining experience. Whether you're here for a casual meal or a special occasion, we're delighted to have you with us. Dive into our menu and let your taste buds embark on a delightful journey!
                </p>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
              {/* Image section */}
              <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                  <img
                    src={imageId}
                    alt="img"
                    className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
                  />
                </div>
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                  {ImageList.map((item) => (
                    <img
                      src={item.img}
                      onClick={() => {
                        setImageId(
                          item.id === 1
                            ? biryani2
                            : item.id === 2
                            ? food2
                            : food3
                        );
                      }}
                      alt="food img"
                      className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default Hero;