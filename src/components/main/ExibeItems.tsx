'use client'
import React, { useEffect, useState } from 'react';
import { fetchProductsByCategory, MercadoLivreProduct } from '@/utils/api/mercado-livre/api';
import { ButtonSection } from "./ButtonSection";
import { ButtonViewAll } from "./ButtonViewAll";

interface ExibeProps {
  categoryId: string;
  title: string;
}

export function Exibe({ categoryId, title }: ExibeProps) {
  const [products, setProducts] = useState<MercadoLivreProduct[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProducts = await fetchProductsByCategory(categoryId);
        if (fetchedProducts.length > 0) {
          setProducts(fetchedProducts.slice(0, 4));
        } else {
          console.log('Nenhum produto encontrado.');
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <div className="flex relative w-[1275px] h-[40.11px] mt-[28.92px] ml-[84px]">
        <div>
          <ButtonSection
            title={title}
            className="flex justify-center items-center relative w-[152.86px] h-[40.11px] rounded-md bg-[#F1F0F0]"
          />
        </div>
        <div className="absolute right-0">
          <ButtonViewAll
            title="View All"
            className="flex justify-center items-center relative w-[96px] h-[40px] rounded-md bg-[#F1F0F0]"
          />
        </div>
      </div>
      <div className="flex justify-center gap-10 w-[1442px] h-[247.09px] mt-[18.71px]">
        {products.map((product) => (
          <div className="flex flex-col items-center w-[286.71px] h-[195.58px] rounded-md" key={product.id}>
            <div className="cursor-pointer w-[187.56px] h-[132.36px] mt-6">
              <img src={product.thumbnail} alt="Imagem do produto" />
            </div>
            <p className="w-[200.59px] h-auto text-left font-light text-[10.03px] ml-2 mt-8">{product.title}</p>
            <div className="flex ml-40">
              <p className="font-semibold text-right text-[16.05px]">{`R$ ${product.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
