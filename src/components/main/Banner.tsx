'use client'
import { fetchProductsByCategory, MercadoLivreProduct } from "@/utils/api/mercado-livre/api";
import { useEffect, useState } from "react";
import { ButtonMultifunctional } from "./ButtonMultifunctional";

export function Banner({ selectedCategory }: { selectedCategory: string }) {
    const [products, setProducts] = useState<MercadoLivreProduct[]>([]);
    const [productIndex, setProductIndex] = useState(0);
    const product = products[productIndex] || null;

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedProducts = await fetchProductsByCategory(selectedCategory);
                if (fetchedProducts.length > 0) {
                    setProducts(fetchedProducts);
                    setProductIndex(0);
                } else {
                    console.log('Nenhum produto encontrado.');
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [selectedCategory]);

    const handleRightClick = () => {
        setProductIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            return newIndex < products.length ? newIndex : prevIndex;
        });
    };

    const handleLeftClick = () => {
        setProductIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            return newIndex >= 0 ? newIndex : prevIndex;
        });
    };

    return (
        <div>
            {product ? (
                <div className="flex relative justify-center max-w-6xl h-[319.73px] mt-[43.28px] ml-20 mr-20">
                    <div className="flex justify-center items-center w-full h-full rounded-md border-solid border-2 border-slate-950">
                        <span
                            className={`cursor-pointer absolute left-0 text-4xl z-10 ml-2 text-[rgba(2,6,13,1)] transition-colors duration-400 hover:text-red-500 ${productIndex === 0 ? 'hidden' : 'block'
                                }`}
                            onClick={handleLeftClick}
                        >
                            &lt;
                        </span>

                        <div className="w-full h-[300px] flex justify-center gap-6 items-center">
                            <div className="w-[389.08px] h-[194.54px] mt-[48.32px] ml-[122.34px] z-10">
                                <p className="font-semibold text-[45.12px]">
                                    {product.title.replace(/(Smartphone|Xiaomi|Pocophone|De|Motorola|Samsung|\b(Edge)\b(?![\s\S]*\b\1\b))/g, '').trim().split(" ").slice(0, 2).join(" ")}
                                </p>
                                <p className="font-normal text-[20.06px]">
                                    {product.title.match(/(\b\d+\sGb\b).*?(\b\d+\sGb\sRam\b)/)?.slice(1).join(' ')}
                                </p>
                                <p className="font-medium text-[25.07px]">
                                    {`R$ ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
                                </p>
                                <ButtonMultifunctional
                                    title="SHOP NOW"
                                    className="absolute mt-8 flex flex-col justify-center items-center w-[78.22px] h-[28.08px] rounded-md bg-[rgba(3,198,139,1)] transition-colors duration-1000 delay-100 hover:bg-[rgba(3,198,139,0.5)] z-20 font-semibold text-[8.45px] text-[#FFFFFF]"
                                />
                            </div>
                            <img src={product.thumbnail} className="w-72 h-auto object-cover mt-4 ml-8" />
                        </div>
                        <span
                            className={`cursor-pointer absolute right-0 text-4xl mr-2 text-[rgba(2,6,13,1)] transition-colors duration-400 hover:text-red-500 ${productIndex === products.length - 1 ? 'hidden' : 'block'
                                }`}
                            onClick={handleRightClick}
                        >
                            &gt;
                        </span>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    );
}
