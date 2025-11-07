
export const products = [
  {
    id: 1,
    name: "Martillo de Uña",
    slug: "martillo-de-una",
    price: 15000,
    image: "/images/mar.jpg",
    description: "Martillo de alta resistencia con mango de fibra de vidrio.",
  },
  {
    id: 2,
    name: "Set de Llaves Combinadas",
    slug: "set-llaves",
    price: 45000,
    image: "/images/llave.jpg",
    description: "Juego de llaves milimétricas de 6 a 22 mm.",
  },
  {
    id: 3,
    name: "Taladro Percutor 800W",
    slug: "taladro-percutor",
    price: 89000,
    image: "/images/taladro.jpg",
    description:
      "Taladro con doble función (taladro y percutor), ideal para concreto.",
  },
  {
    id: 4,
    name: "Cinta Métrica 5m",
    slug: "cinta-metrica",
    price: 5500,
    image: "/images/cinta.jpg",
    description: "Cinta métrica autoretractil de 5 metros, clase II.",
  },
];

export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};
