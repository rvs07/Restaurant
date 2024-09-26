import React from "react";
import AppStoreImg from "../assets/app_store.png";
import PlayStoreImg from "../assets/play_store.png";
import Gif from "../assets/mobile_bike.gif";
const  AppSection = () => {
  return (
    <>
        <div className="bg-gray-100 dark:bg-gray-700 py-14">
            <div className="container">
                <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
                    <div
                        className="max-w-xl mx-auto"
                        >
                         <h1 className="text-2xl  text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-200" >Foodly is available for Android and IOS</h1>
                         <br />
                         <div className="flex flex-wrap justify-center sm:justify-start items-center">
                            <a href="#">
                                <img src={PlayStoreImg} alt="playstore" className="max-w-[150px] sm:max-w-[120] md:max-w-[200px]" />
                            </a>
                            <a href="#">
                                <img src={AppStoreImg} alt="playstore" className="max-w-[150px] sm:max-w-[120] md:max-w-[200px]" />
                            </a>
                        </div>   
                    </div>
                        <div>
                        <img
                            src={Gif}
                            alt="mobile bike"
                            className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default  AppSection