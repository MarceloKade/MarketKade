'use client'
import { Servicos } from "./main/Servicos";
import { Categories } from "./main/Categories";
import { Headphones } from "./main/Audio";
import { Joias } from "./main/Joias";
import { Banner } from "./main/Banner";
import { Multimidia } from "./main/Multimidia";
import { useState } from "react";

export function Main() {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (categoryCode: string) => {
        setSelectedCategory(categoryCode);
    };
    return (
        <main>
            <section>
                <Categories onCategoryChange={handleCategoryChange} />
                <Banner selectedCategory={selectedCategory} />
            </section>
            <section>
                <Joias />
            </section>
            <section>
                <Multimidia />
            </section>
            <section>
                <Headphones />
            </section>
            <section>
                <Servicos />
            </section>
        </main>
    );
}