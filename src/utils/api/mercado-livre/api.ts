import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://api.mercadolibre.com',
});

export interface MercadoLivreProduct {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

export async function fetchProductsByCategory(category: string): Promise<MercadoLivreProduct[]> {
  try {
    const response: AxiosResponse<any> = await api.get('/sites/MLB/search', {
      params: {
        category: category,
      },
    });

    const products = await Promise.all(response.data.results.map(async (product: any) => {
      const descriptionResponse: AxiosResponse<any> = await api.get(`/items/${product.id}/description`);
      const description = descriptionResponse.data.plain_text;

      return {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        description: description,
      };
    }));

    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}
