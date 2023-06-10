'use client'

import { ButtonCategories } from "./ButtonCategories";
import { ButtonSection } from "./ButtonSection";

export function Categories() {
    return (
        <>
            <ButtonSection title="Categoria" className="flex flex-col justify-center items-center w-[137.38px] h-[40.11px] rounded-md mt-[32.84px] ml-[91px]" />

            <ul className="flex -flex-col items-center w-[1273.1px] h-[95.26px] ml-[90.25px] mt-[0.33px]">
                <li className="flex flex-col justify-center w-[147.41px] h-[65.62px] mr-[20.06px]">
                    <ButtonCategories title="Laptops" className="flex flex-col justify-center w-[129.36px] h-[43.12px] rounded-md pl-3 border-2 border-solid border-slate-950" />
                </li>
                <li className="flex flex-col justify-center w-[147.41px] h-[65.62px] mr-[20.06px]">
                    <ButtonCategories title="Smartphone" className="flex flex-col justify-center w-[129.36px] h-[43.12px] rounded-md pl-3 border-2 border-solid border-slate-950" />
                </li>
                <li className="flex flex-col justify-center w-[147.41px] h-[65.62px] mr-[20.06px]">
                    <ButtonCategories title="Acessórios" className="flex flex-col justify-center w-[129.36px] h-[43.12px] rounded-md pl-3 border-2 border-solid border-slate-950" />
                </li>
                <li className="flex flex-col justify-center w-[147.41px] h-[65.62px] mr-[20.06px]">
                    <ButtonCategories title="TV" className="flex flex-col justify-center w-[129.36px] h-[43.12px] rounded-md pl-3 border-2 border-solid border-slate-950" />
                </li>
                <li className="flex flex-col justify-center w-[147.41px] h-[65.62px] mr-[20.06px]">
                    <ButtonCategories title="Headphones" className="flex flex-col justify-center w-[129.36px] h-[43.12px] rounded-md pl-3 border-2 border-solid border-slate-950" />
                </li>
                <li className="flex flex-col justify-center w-[147.41px] h-[65.62px] mr-[20.06px]">
                    <ButtonCategories title="Storage" className="flex flex-col justify-center w-[129.36px] h-[43.12px] rounded-md pl-3 border-2 border-solid border-slate-950" />
                </li>
                <li className="flex flex-col justify-center w-[147.41px] h-[65.62px] mr-[20.06px]">
                    <ButtonCategories title="Home Theater" className="flex flex-col justify-center w-[129.36px] h-[43.12px] rounded-md pl-3 border-2 border-solid border-slate-950" />
                </li>
            </ul>
        </>
    );
}