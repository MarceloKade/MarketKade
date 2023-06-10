'use client'

import { ButtonSection } from "./ButtonSection";
import { ButtonViewAll } from "./ButtonViewAll";

export function Laptops() {
    return (
        <div>
            <div className="flex relative w-[1275px] h-[40.11px] mt-[28.92px] ml-[84px]">
                <div>
                    <ButtonSection title="Laptops" className="flex justify-center items-center relative w-[152.86px] h-[40.11px] rounded-md bg-[#F1F0F0]" />
                </div>
                <div className="absolute right-0">
                    <ButtonViewAll title="View All" className="flex justify-center items-center relative w-[96px] h-[40px] rounded-md bg-[#F1F0F0]" />
                </div>
            </div>
            <div className=" flex justify-center gap-10 w-[1442px] h-[247.09px] mt-[18.71px]">
                <div className="flex flex-col items-center w-[286.71px] h-[195.58px] rounded-md">
                    <div className="w-[187.56px] h-[132.36px] mt-6">
                        {/*imagem*/}
                    </div>
                    <p className="w-[200.59px] h-[30px] text-left font-light text-[10.03px] ml-2">Título do produto</p>
                    <div className="flex ml-40">
                        <p className="font-semibold text-right text-[16.05px]">R$ 259</p>
                    </div>
                </div>
                <div className="w-[286.71px] h-[195.58px] rounded-md">
                    <div className="flex flex-col items-center w-[286.71px] h-[195.58px] rounded-md">
                        <div className="w-[187.56px] h-[132.36px] mt-6">
                            {/*imagem*/}
                        </div>
                        <p className="w-[200.59px] h-[30px] text-left font-light text-[10.03px] ml-2">Título do produto</p>
                        <div className="flex ml-40">
                            <p className="font-semibold text-right text-[16.05px]">R$ 259</p>
                        </div>
                    </div>
                </div>
                <div className="w-[286.71px] h-[195.58px] rounded-md">
                    <div className="flex flex-col items-center w-[286.71px] h-[195.58px] rounded-md">
                        <div className="w-[187.56px] h-[132.36px] mt-6">
                            {/*imagem*/}
                        </div>
                        <p className="w-[200.59px] h-[30px] text-left font-light text-[10.03px] ml-2">Título do produto</p>
                        <div className="flex ml-40">
                            <p className="font-semibold text-right text-[16.05px]">R$ 259</p>
                        </div>
                    </div>
                </div>
                <div className="w-[286.71px] h-[195.58px] rounded-md">
                    <div className="flex flex-col items-center w-[286.71px] h-[195.58px] rounded-md">
                        <div className="w-[187.56px] h-[132.36px] mt-6">
                            {/*imagem*/}
                        </div>
                        <p className="w-[200.59px] h-[30px] text-left font-light text-[10.03px] ml-2">Título do produto</p>
                        <div className="flex ml-40">
                            <p className="font-semibold text-right text-[16.05px]">R$ 259</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}