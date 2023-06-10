'use client'
import { ButtonSection } from "./ButtonSection";
import { ButtonViewAll } from "./ButtonViewAll";

export function TodaysDeal() {
    return (
        <div>
            <div className="flex relative w-[1275px] h-[40.11px] mt-[28.92px] ml-[84px]">
                <div>
                    <ButtonSection title="Promoções" className="flex justify-center items-center relative w-[152.86px] h-[40.11px] rounded-md" />
                </div>
                <div className="absolute right-0">
                    <ButtonViewAll title="View All" className="flex justify-center items-center relative w-[96px] h-[40px] rounded-md" />
                </div>
            </div>
            <div className="flex justify-between w-[1276px] h-[316.27px] mt-[18.71px] ml-[80px]">
                <div className="flex justify-center w-[300.89px] h-[315.94px] rounded-md bg-[#F3F3F3]">
                    <div className="flex flex-col items-center w-[253.75px] h-[274.81px] rounded-md  mt-[29.09px] bg-gradient-to-b from-[#FFF4BB] to-[rgba(255, 242, 174, 0.2)]">
                        <div className="w-[204.61px] h-[168.5px] mt-6">
                            {/*imagem*/}
                        </div>
                        <p className="w-[200.59px] h-[30px] text-left font-light text-[10.03px]">Título do produto</p>
                        <div className="flex gap-2 ml-28">
                            <p className="font-semibold text-[16.05px]">R$ 259</p>
                            <p className="font-normal text-[14.4px] line-through">R$ 399</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-end items-center gap-2 w-[300.89px] h-[315.94px] rounded-md bg-[#F3F3F3]">
                    <div className="w-[187.56px] h-[132.36px] mt-6">
                        {/*imagem*/}
                    </div>
                    <p className="w-[200.59px] h-[30px] text-left font-light text-[10.03px]">Título do produto</p>
                    <div className="flex gap-2">
                        <p className="font-semibold text-[16.05px]">R$ 259</p>
                        <p className="font-normal text-[14.4px] line-through">R$ 399</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-end items-center gap-2 w-[300.89px] h-[315.94px] rounded-md bg-[#F3F3F3]">
                    <div className="w-[187.56px] h-[132.36px] mt-6">
                        {/*imagem*/}
                    </div>
                    <p className="w-[200.59px] h-[30px] text-left font-light text-[10.03px]">Título do produto</p>
                    <div className="flex gap-2">
                        <p className="font-semibold text-[16.05px]">R$ 259</p>
                        <p className="font-normal text-[14.4px] line-through">R$ 399</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                    </div>

                </div>
                <div className="flex flex-col justify-end items-center gap-2 w-[300.89px] h-[315.94px] rounded-md bg-[#F3F3F3]">
                    <div className="w-[187.56px] h-[132.36px] mt-6">
                        {/*imagem*/}
                    </div>
                    <p className="w-[200.59px] h-[30px] text-left font-light text-[10.03px]">Título do produto</p>
                    <div className="flex gap-2">
                        <p className="font-semibold text-[16.05px]">R$ 259</p>
                        <p className="font-normal text-[14.4px] line-through">R$ 399</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                        <div className="w-[70.57px] h-[64.17px] mb-[24.07px] rounded-md border-[1px] border-slate-950 bg-[#E8E8E8]   shadow-lg shadow-slate-300">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}