'use client'
import { ButtonCategories } from "./ButtonCategories";
import { ButtonSection } from "./ButtonSection";
import { useState } from "react";

export function Categories({ onCategoryChange }: { onCategoryChange: (categoryCode: string) => void }) {
    const categories = [
        { name: "Smartphone", code: "MLB1055" },
        { name: "Jóias", code: "MLB3937" },
        { name: "Multimidia", code: "MLB1000" },
        { name: "Áudio", code: "MLB1182" },
        { name: "Serviços", code: "MLB1540" },
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0].code);

    const handleCategoryClick = (categoryCode: string) => {
        setSelectedCategory(categoryCode);
        onCategoryChange(categoryCode); // Chama a função de callback para atualizar a categoria selecionada
    };

    return (
        <>
            <ButtonSection
                title="Categoria"
                className="flex flex-col justify-center items-center w-[137.38px] h-[40.11px] rounded-md mt-[32.84px] ml-[91px]"
            />

            <ul className="flex items-center w-[1273.1px] h-[95.26px] ml-[90.25px] mt-[0.33px]">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="flex flex-col justify-center w-[147.41px] h-[65.62px] mr-[20.06px]"
                    >
                        <ButtonCategories
                            title={category.name}
                            className="flex flex-col justify-center w-[129.36px] h-[43.12px] rounded-md pl-3"
                            onClick={() => handleCategoryClick(category.code)}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
}
