'use client'
import { Banner } from "./SideOfferProducts/Banner";
import { NewProduct } from "./SideOfferProducts/NewProduct";
import { OfferProduct } from "./SideOfferProducts/OfferProduct";

export function SideOfferProducts() {
    return (
        <div className="relative w-[146px] h-[319.73px] mt-[43.28px] ml-[87px]">
            <NewProduct />
            <OfferProduct />
            <Banner />
        </div>
    );
}