import { Category } from "../types/category";
import { Product } from "../types/product";

export async function getCategories(): Promise<Category[]> {
  await new Promise((res) => setTimeout(res, 1000));

  return [
    {
      id: 1,
      name: "пицца",
      imageUrl: "https://shorturl.at/pFJY7",
    },
    {
      id: 2,
      name: "суши",
      imageUrl: "https://shorturl.at/pFJY7",
    },
    {
      id: 3,
      name: "WOK",
      imageUrl: "https://shorturl.at/pFJY7",
    },
    {
      id: 4,
      name: "роллы",
      imageUrl: "https://shorturl.at/pFJY7",
    },
    {
      id: 5,
      name: "Саломон сет",
      imageUrl: "https://shorturl.at/pFJY7",
    },
    {
      id: 6,
      name: "Саломон",
      imageUrl: "https://shorturl.at/pFJY7",
    },
    {
      id: 7,
      name: "Саломон сет",
      imageUrl: "https://shorturl.at/pFJY7",
    },
    {
      id: 8,
      name: "Саломон",
      imageUrl: "https://shorturl.at/pFJY7",
    },

    {
      id: 9,
      name: "Саломон",
      imageUrl: "https://shorturl.at/pFJY7",
    },
  ];
}

export async function getCategoryProducts(
  categoryId: Category["id"]
): Promise<Product[]> {
  await new Promise((res) => setTimeout(res, 1000));

  return [];
}

export async function getProductById(
  productId: Product["id"]
): Promise<Product> {
  await new Promise((res) => setTimeout(res, 1000));

  return {
    id: 1,
    name: "Пицца",
    weight: 1030,
    pieces: 36,
    imageUrl: "https://shorturl.at/pFJY7",
    price: 1500
  };
}
