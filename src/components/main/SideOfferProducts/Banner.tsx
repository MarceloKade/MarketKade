'use client'

import { ButtonMultifunctional } from "../ButtonMultifunctional";

export function Banner() {
    return (
        <div className="absolute w-[1083px] h-[334.08px] ml-[194px] mt-[-14px] ">
            <div className="flex absolute w-[1083px] h-[319.89px] left-0 bottom-0 rounded-md border-solid border-2 border-slate-950 bg-gradient-to-tr from-[#BDFF00] to-[#79E7FF]">
                <div className="flex items-center">
                    <span className="cursor-pointer text-4xl z-10 ml-2">&lt;</span>
                </div>
                <div className="w-[389.08px] h-[194.54px] mt-[48.32px] ml-[122.34px] z-10">
                    <p className="font-semibold text-[45.12px]">Modelo</p>
                    <p className="font-normal text-[20.06px]">Configuração</p>
                    <p className="font-medium text-[25.07px]">Valor</p>
                    <ButtonMultifunctional title="SHOP NOW" className="absolute mt-8 flex flex-col justify-center items-center w-[78.22px] h-[28.08px] rounded-md bg-[#03C68B] z-20 font-semibold text-[8.45px] text-[#FFFFFF]" />
                </div>
                <div className="w-[374.04px] h-[300px] z-10">{/*Imagem */}</div>
                <div className="absolute inset-0 flex items-center justify-end mr-2">
                    <span className="cursor-pointer text-4xl">&gt;</span>
                </div>
            </div>
        </div>
    );
}