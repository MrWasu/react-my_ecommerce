export type Product = {
    name: string;
    description: string;
    price: number;
    image: string;
};
export type ProductPageProps = {
    product: Product;
};

export const productData = {
    name: 'Producto Ejemplo',
    description: 'Esta es la descripción del producto.',
    price: 9.99,
    image: 'https://ejemplo.com/imagen.jpg',
  };