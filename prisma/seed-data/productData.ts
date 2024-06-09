import { Prisma } from "@prisma/client";

/**
 * Mockdata for Products
 */
export const productData: Prisma.ProductCreateInput[] = [
  {
    name: "ASUS ROG Strix GeForce RTX 3070 Ti",
    description:
      "NVIDIA's latest graphics card with 8GB GDDR6X memory, delivering high frame rates in the latest games.",
    price: 700.0,
    stock: 100,
    category: {
      create: {
        name: "graphics-cards",
        description: "graphics-cards-category-description",
      },
    },
    images: {
      create: [
        {
          url: "https://cdn.mos.cms.futurecdn.net/3wMw4Xh8VZ3cT5mV5vZbMK-1200-80.jpg",
        },
        {
          url: "https://www.asus.com/us/graphics-cards/ROG-STRIX-RTX3070TI-O10G-GAMING/assets/images/product/1/overview/1_1/ROG-STRIX-RTX3070TI-O10G-GAMING_1_1_overview_01.jpg",
        },
        {
          url: "https://www.asus.com/us/graphics-cards/ROG-STRIX-RTX3070TI-O10G-GAMING/assets/images/product/1/overview/1_2/ROG-STRIX-RTX3070TI-O10G-GAMING_1_2_overview_01.jpg",
        },
      ],
    },
  },
];
