'use client'

import { ButtonMultifunctional } from "../ButtonMultifunctional";

export function NewProduct() {
    return (
        <div className="flex justify-center w-[146px] h-[153.84px] absolute">
            <ButtonMultifunctional title="New" className="flex flex-col justify-center items-center absolute w-[31px] h-[18.32px] top-0 right-0 rounded-sm bg-[#03C68B] z-20 font-semibold text-[8.45px] text-[#FFFFFF]" />
            <div className="flex flex-col justify-end items-center w-[135.76px] h-[150.84px] absolute bottom-0 left-0 rounded-md bg-[#393B3A]">
                <div className="absolute w-[107.6px] h-[114.65px] top-0">
                    {/*imagem*/}
                </div>
                <div className="flex justify-center items-center w-[135.76px] h-[29.48px] rounded-md bg-gradient-to-r from-slate-950 to-[rgba(255,255,255,0.3)]">
                    <p className="text-slate-50">Modelo</p>
                </div>
            </div>
        </div>
    );
}