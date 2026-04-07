export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: Category
}

export interface AuthToken {
  access: string;
  refresh: string;
}
