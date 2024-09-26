import React from 'react'
import Img2 from "../assets/biryani2.png" 
const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: "Biryani",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img: Img2,
      name: "Pizza",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
      id: 3,
      img: Img2,
      name: "Cold Cofee",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
  ];
const Services = () => {
  return (
    <div className='py-10  dark:bg-gray-800 dark:text-white'>
        {/* header section */}
        <div className="container dark:bg-gray-800 dark:text-white">
            <div className=" text-center mb-20 max-w-[400px] mx-auto">
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                <h1 className='text-3xl font-bold'>Services</h1>
                <p className=" text-sm text-gray-700 dark:text-white">.Experience exceptional dining and personalized service at your convenience, whether at our elegant restaurant or from the comfort of your home.
                </p>
            </div>
        {/* CARD section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center ">
            {ServicesData.map((service) => (
              <div
                className="rounded-2xl shadow-2xl bg-white dark:text-white hover:bg-primary dark:hover:bg-primary hover:text-white relative dark:bg-gray-900 duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold dark:text-white">{service.name}</h1>
                  <p className="text-gray-500 dark:text-gray-400 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Services