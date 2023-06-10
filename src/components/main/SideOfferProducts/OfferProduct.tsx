'use client'

import { ButtonMultifunctional } from "../ButtonMultifunctional";

export function OfferProduct() {
    return (
        <div className="w-[141.76px] h-[157.73px] absolute bottom-0">
            <ButtonMultifunctional title="% off" className="flex flex-col justify-center items-center absolute w-[31px] h-[18.32px] top-0 right-0 rounded-sm bg-[#FF7B7B] z-10 font-semibold text-[7px] text-[#FFFFFF]" />
            <div className="flex items-end justify-center w-[135.76px] h-[150.84px] absolute bottom-0 rounded-md bg-[rgba(45,118,132,0.5)]">
                <div className="absolute w-[107.6px] h-[114.65px] top-0">
                    {/*imagem*/}
                </div>
                <div className="flex justify-center items-center w-[135.76px] h-[29.48px] rounded-md bg-gradient-to-r from-[#084450] to-[rgba(0,0,0,0.1)]">
                    <p className="text-slate-50">Modelo</p>
                </div>
            </div>
        </div>
    );
}