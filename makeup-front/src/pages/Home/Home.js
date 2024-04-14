import React from "react";
import Banner from "../../componets/Banner/Banner";
import BannerBottom from "../../componets/Banner/BannerBottom";
import BestSellers from "../../componets/home/BestSellers/BestSellers";
import NewArrivals from "../../componets/home/NewArrivals/NewArrivals";
import Sale from "../../componets/home/Sale/Sale";
import SpecialOffers from "../../componets/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../componets/home/YearProduct/YearProduct";

const Home = () => {
    return (
        <div className="w-full mx-auto">
            <Banner />
            <BannerBottom />
            <div className="max-w-container mx-auto px-4">
                <Sale />
                <NewArrivals />
                <BestSellers />
                <YearProduct />
                <SpecialOffers />
            </div>
        </div>
    );
};

export default Home;
