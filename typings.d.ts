import { StaticImageData } from "next/image";

type Blog ={
    title: string;
    description: string;
    image: String;
    date: string;
    slug: string;
}

type Food ={
    name: string;
    category: number;
    image: String;
    _id: string;
    price: number;
    originalPrice: number;
    tags: string;
    description: string;
    available: boolean;
    quantity: number;
}

type Chef ={
    _id: string;
    name: string;
    profession: string;
    image: string;
    experience: number;
    specialty: string;
    description: string;
    available: boolean;
    position: string;
}

 export type CartItem ={
    name: string;
    price: number;
}
export interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (index: number) => void;
    getTotalPrice: () => string;
  }
  