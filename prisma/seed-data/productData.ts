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
          url: "public/images/nvidia-1.jpg",
        },
      ],
    },
  },
  {
    name: "AMD Ryzen 9 5900X",
    description:
      "12-core, 24-thread unlocked desktop processor with PCIe 4.0 support for ultra-fast performance.",
    price: 550.0,
    stock: 80,
    category: {
      create: {
        name: "processors",
        description: "processors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/amd-1.jpg",
        },
      ],
    },
  },
  {
    name: "Corsair Vengeance LPX 16GB (2 x 8GB) DDR4 3200MHz",
    description:
      "High-performance overclocked memory with a sleek, low-profile design.",
    price: 90.0,
    stock: 150,
    category: {
      create: {
        name: "memory",
        description: "memory-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/corsair-1.jpg",
        },
      ],
    },
  },
  {
    name: "Samsung 970 EVO Plus 1TB NVMe M.2 SSD",
    description:
      "Blazing fast read and write speeds with V-NAND technology for improved performance.",
    price: 150.0,
    stock: 200,
    category: {
      create: {
        name: "storage",
        description: "storage-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/samsung-1.jpg",
        },
      ],
    },
  },
  {
    name: "ASUS ROG Crosshair VIII Hero (Wi-Fi) ATX Motherboard",
    description:
      "Top-tier motherboard for AMD Ryzen processors with Wi-Fi 6 support and extensive connectivity options.",
    price: 400.0,
    stock: 60,
    category: {
      create: {
        name: "motherboards",
        description: "motherboards-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/asus-1.jpg",
        },
      ],
    },
  },
  {
    name: "EVGA SuperNOVA 750 G5, 80 Plus Gold 750W PSU",
    description:
      "Reliable power supply unit with 80 Plus Gold efficiency, fully modular cables, and quiet operation.",
    price: 130.0,
    stock: 100,
    category: {
      create: {
        name: "power-supplies",
        description: "power-supplies-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/evga-1.jpg",
        },
      ],
    },
  },
  {
    name: "NZXT H510 Mid Tower Case",
    description:
      "Minimalistic design with tempered glass side panel and excellent cable management options.",
    price: 80.0,
    stock: 120,
    category: {
      create: {
        name: "cases",
        description: "cases-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/nzxt-1.jpg",
        },
      ],
    },
  },
  {
    name: "Cooler Master Hyper 212 EVO CPU Cooler",
    description:
      "Versatile CPU cooler with a 120mm PWM fan for optimal airflow and cooling efficiency.",
    price: 40.0,
    stock: 180,
    category: {
      create: {
        name: "cooling-solutions",
        description: "cooling-solutions-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/cooler-master-1.jpg",
        },
      ],
    },
  },
  {
    name: "Logitech G502 HERO High Performance Gaming Mouse",
    description:
      "Customizable gaming mouse with HERO 25K sensor and 11 programmable buttons.",
    price: 50.0,
    stock: 140,
    category: {
      create: {
        name: "peripherals",
        description: "peripherals-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/logitech-1.jpg",
        },
      ],
    },
  },
  {
    name: "SteelSeries Apex Pro Mechanical Gaming Keyboard",
    description:
      "Adjustable mechanical switches for customizable actuation and an OLED smart display.",
    price: 200.0,
    stock: 90,
    category: {
      create: {
        name: "peripherals",
        description: "peripherals-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/steelseries-1.jpg",
        },
      ],
    },
  },
  {
    name: "BenQ PD2700U 27 inch 4K Monitor",
    description:
      "Professional-grade 4K monitor with IPS technology for accurate color and wide viewing angles.",
    price: 500.0,
    stock: 50,
    category: {
      create: {
        name: "monitors",
        description: "monitors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/benq-1.jpg",
        },
      ],
    },
  },
  {
    name: "Seagate BarraCuda 4TB Internal Hard Drive",
    description:
      "High-capacity storage solution with 7200 RPM speed and versatile applications.",
    price: 100.0,
    stock: 200,
    category: {
      create: {
        name: "storage",
        description: "storage-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/seagate-1.jpg",
        },
      ],
    },
  },
  {
    name: "ASUS ROG Swift PG259QN 24.5” 360Hz Gaming Monitor",
    description:
      "World's fastest gaming monitor with 360Hz refresh rate and G-Sync support for smooth gameplay.",
    price: 700.0,
    stock: 30,
    category: {
      create: {
        name: "monitors",
        description: "monitors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/asus-monitor-1.jpg",
        },
      ],
    },
  },
  {
    name: "G.Skill Ripjaws V Series 32GB (2 x 16GB) DDR4 3200MHz",
    description:
      "High-performance memory with advanced heat spreader for optimal cooling.",
    price: 160.0,
    stock: 120,
    category: {
      create: {
        name: "memory",
        description: "memory-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/gskill-1.jpg",
        },
      ],
    },
  },
  {
    name: "MSI MPG Z490 Gaming Edge WiFi ATX Motherboard",
    description:
      "LGA 1200 motherboard for Intel processors with Wi-Fi 6 and extended heatsink design.",
    price: 200.0,
    stock: 70,
    category: {
      create: {
        name: "motherboards",
        description: "motherboards-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/msi-1.jpg",
        },
      ],
    },
  },
  {
    name: "Intel Core i7-10700K Desktop Processor",
    description:
      "8-core, 16-thread processor with Turbo Boost Max 3.0 technology for high-end gaming.",
    price: 400.0,
    stock: 100,
    category: {
      create: {
        name: "processors",
        description: "processors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/intel-1.jpg",
        },
      ],
    },
  },
  {
    name: "Noctua NH-D15 Premium CPU Cooler",
    description:
      "Dual-tower CPU cooler with two NF-A15 140mm fans for superior cooling performance.",
    price: 90.0,
    stock: 150,
    category: {
      create: {
        name: "cooling-solutions",
        description: "cooling-solutions-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/noctua-1.jpg",
        },
      ],
    },
  },
  {
    name: "Western Digital Blue 1TB SATA SSD",
    description:
      "High-speed SATA SSD for reliable everyday computing with quick boot and load times.",
    price: 110.0,
    stock: 180,
    category: {
      create: {
        name: "storage",
        description: "storage-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/wd-1.jpg",
        },
      ],
    },
  },
  {
    name: "HyperX Cloud II Gaming Headset",
    description:
      "Comfortable gaming headset with 7.1 virtual surround sound and noise-cancelling microphone.",
    price: 100.0,
    stock: 130,
    category: {
      create: {
        name: "peripherals",
        description: "peripherals-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/hyperx-1.jpg",
        },
      ],
    },
  },
  {
    name: "Corsair K95 RGB Platinum Mechanical Gaming Keyboard",
    description:
      "High-end gaming keyboard with Cherry MX Speed switches and dynamic RGB lighting.",
    price: 190.0,
    stock: 110,
    category: {
      create: {
        name: "peripherals",
        description: "peripherals-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/corsair-kb-1.jpg",
        },
      ],
    },
  },
  {
    name: "Gigabyte GeForce RTX 3080 Gaming OC 10G",
    description:
      "High-performance graphics card with 10GB GDDR6X memory and advanced cooling.",
    price: 800.0,
    stock: 50,
    category: {
      create: {
        name: "graphics-cards",
        description: "graphics-cards-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/gigabyte-1.jpg",
        },
      ],
    },
  },
  {
    name: "Crucial Ballistix 32GB (2 x 16GB) DDR4 3200MHz",
    description:
      "High-speed desktop memory designed for overclocking with stylish heat spreaders.",
    price: 150.0,
    stock: 140,
    category: {
      create: {
        name: "memory",
        description: "memory-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/crucial-1.jpg",
        },
      ],
    },
  },
  {
    name: "Thermaltake Smart 600W 80+ White Certified PSU",
    description:
      "Reliable and efficient power supply unit with 80 Plus White certification.",
    price: 50.0,
    stock: 100,
    category: {
      create: {
        name: "power-supplies",
        description: "power-supplies-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/thermaltake-1.jpg",
        },
      ],
    },
  },
  {
    name: "AMD Ryzen 5 5600X",
    description:
      "6-core, 12-thread unlocked desktop processor with exceptional gaming performance.",
    price: 300.0,
    stock: 100,
    category: {
      create: {
        name: "processors",
        description: "processors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/amd-2.jpg",
        },
      ],
    },
  },
  {
    name: "Cooler Master MasterBox Q300L Case",
    description:
      "Compact mATX case with a stylish design and excellent cooling potential.",
    price: 60.0,
    stock: 80,
    category: {
      create: {
        name: "cases",
        description: "cases-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/cooler-master-case-1.jpg",
        },
      ],
    },
  },
  {
    name: "Corsair Hydro Series H100i RGB PLATINUM Liquid CPU Cooler",
    description:
      "High-performance liquid CPU cooler with vibrant RGB lighting and superior cooling efficiency.",
    price: 160.0,
    stock: 120,
    category: {
      create: {
        name: "cooling-solutions",
        description: "cooling-solutions-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/corsair-cooler-1.jpg",
        },
      ],
    },
  },
  {
    name: "Gigabyte AORUS NVMe Gen4 SSD 1TB",
    description:
      "Ultra-fast NVMe SSD with PCIe 4.0 interface for lightning-fast data transfer speeds.",
    price: 230.0,
    stock: 100,
    category: {
      create: {
        name: "storage",
        description: "storage-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/gigabyte-ssd-1.jpg",
        },
      ],
    },
  },
  {
    name: 'MSI Optix MAG272CQR 27" Curved Gaming Monitor',
    description:
      "27-inch curved gaming monitor with 165Hz refresh rate and 1ms response time.",
    price: 350.0,
    stock: 60,
    category: {
      create: {
        name: "monitors",
        description: "monitors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/msi-monitor-1.jpg",
        },
      ],
    },
  },
  {
    name: "Razer BlackWidow Elite Mechanical Gaming Keyboard",
    description:
      "Mechanical gaming keyboard with Razer Green switches and customizable RGB lighting.",
    price: 180.0,
    stock: 100,
    category: {
      create: {
        name: "peripherals",
        description: "peripherals-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/razer-kb-1.jpg",
        },
      ],
    },
  },
  {
    name: "ASUS TUF Gaming X570-PRO (Wi-Fi 6) ATX Motherboard",
    description:
      "Durable motherboard for AMD Ryzen processors with Wi-Fi 6 support and military-grade components.",
    price: 250.0,
    stock: 80,
    category: {
      create: {
        name: "motherboards",
        description: "motherboards-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/asus-mb-2.jpg",
        },
      ],
    },
  },
  {
    name: "Crucial P5 1TB 3D NAND NVMe PCIe M.2 SSD",
    description:
      "High-performance NVMe SSD with advanced features for intense workloads.",
    price: 150.0,
    stock: 150,
    category: {
      create: {
        name: "storage",
        description: "storage-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/crucial-ssd-1.jpg",
        },
      ],
    },
  },
  {
    name: "NZXT Kraken Z73 360mm Liquid Cooler",
    description:
      "High-performance liquid cooler with customizable LCD display and superior cooling performance.",
    price: 250.0,
    stock: 70,
    category: {
      create: {
        name: "cooling-solutions",
        description: "cooling-solutions-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/nzxt-cooler-1.jpg",
        },
      ],
    },
  },
  {
    name: "ADATA XPG GAMMIX S11 Pro 1TB NVMe SSD",
    description:
      "High-speed NVMe SSD with heat sink for superior performance and durability.",
    price: 140.0,
    stock: 110,
    category: {
      create: {
        name: "storage",
        description: "storage-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/adata-ssd-1.jpg",
        },
      ],
    },
  },
  {
    name: "Phanteks Eclipse P400A Digital ATX Mid Tower Case",
    description:
      "Stylish ATX case with mesh front panel for optimal airflow and digital RGB lighting.",
    price: 90.0,
    stock: 90,
    category: {
      create: {
        name: "cases",
        description: "cases-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/phanteks-case-1.jpg",
        },
      ],
    },
  },
  {
    name: "Corsair RM850x 850W 80 Plus Gold PSU",
    description:
      "Fully modular power supply with 80 Plus Gold efficiency and low-noise operation.",
    price: 130.0,
    stock: 100,
    category: {
      create: {
        name: "power-supplies",
        description: "power-supplies-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/corsair-psu-1.jpg",
        },
      ],
    },
  },
  {
    name: "Logitech G Pro X Wireless Gaming Headset",
    description:
      "High-performance wireless gaming headset with Blue VO!CE technology for clear communication.",
    price: 200.0,
    stock: 80,
    category: {
      create: {
        name: "peripherals",
        description: "peripherals-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/logitech-headset-1.jpg",
        },
      ],
    },
  },
  {
    name: 'Acer Predator XB273K 27" UHD 144Hz Gaming Monitor',
    description:
      "High-end 4K gaming monitor with 144Hz refresh rate and NVIDIA G-Sync support.",
    price: 900.0,
    stock: 30,
    category: {
      create: {
        name: "monitors",
        description: "monitors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/acer-monitor-1.jpg",
        },
      ],
    },
  },
  {
    name: "ASUS TUF Gaming VG27AQ 27” WQHD 165Hz Monitor",
    description:
      "27-inch WQHD gaming monitor with 165Hz refresh rate and adaptive sync technology.",
    price: 400.0,
    stock: 70,
    category: {
      create: {
        name: "monitors",
        description: "monitors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/asus-monitor-2.jpg",
        },
      ],
    },
  },
  {
    name: "Thermaltake Core P3 ATX Mid Tower Case",
    description:
      "Open frame mid-tower case with versatile build options and excellent cooling support.",
    price: 130.0,
    stock: 60,
    category: {
      create: {
        name: "cases",
        description: "cases-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/thermaltake-case-1.jpg",
        },
      ],
    },
  },
  {
    name: "MSI MPG A750GF 750W 80 Plus Gold Modular PSU",
    description:
      "High-efficiency power supply with 80 Plus Gold certification and fully modular design.",
    price: 120.0,
    stock: 90,
    category: {
      create: {
        name: "power-supplies",
        description: "power-supplies-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/msi-psu-1.jpg",
        },
      ],
    },
  },
  {
    name: "Kingston FURY Beast 16GB (2 x 8GB) DDR4 3200MHz",
    description:
      "High-performance desktop memory with sleek heat spreader design.",
    price: 90.0,
    stock: 140,
    category: {
      create: {
        name: "memory",
        description: "memory-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/kingston-1.jpg",
        },
      ],
    },
  },
  {
    name: "AMD Radeon RX 6800 XT",
    description:
      "Powerful graphics card with 16GB GDDR6 memory for immersive gaming experiences.",
    price: 650.0,
    stock: 50,
    category: {
      create: {
        name: "graphics-cards",
        description: "graphics-cards-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/amd-gpu-1.jpg",
        },
      ],
    },
  },
  {
    name: "EVGA Z490 FTW ATX Motherboard",
    description:
      "High-performance motherboard with robust power delivery and comprehensive connectivity.",
    price: 300.0,
    stock: 80,
    category: {
      create: {
        name: "motherboards",
        description: "motherboards-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/evga-mb-1.jpg",
        },
      ],
    },
  },
  {
    name: "ADATA XPG Spectrix D50 16GB (2 x 8GB) DDR4 3600MHz",
    description:
      "RGB-enabled high-speed memory with advanced heat spreader design.",
    price: 120.0,
    stock: 100,
    category: {
      create: {
        name: "memory",
        description: "memory-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/adata-ram-1.jpg",
        },
      ],
    },
  },
  {
    name: 'Samsung Odyssey G7 32" 240Hz Curved Gaming Monitor',
    description:
      "High-performance curved gaming monitor with 240Hz refresh rate and QLED technology.",
    price: 800.0,
    stock: 50,
    category: {
      create: {
        name: "monitors",
        description: "monitors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/samsung-monitor-1.jpg",
        },
      ],
    },
  },
  {
    name: "Fractal Design Meshify C ATX Mid Tower Case",
    description:
      "Stylish ATX case with a unique mesh front panel for optimal airflow.",
    price: 100.0,
    stock: 90,
    category: {
      create: {
        name: "cases",
        description: "cases-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/fractal-case-1.jpg",
        },
      ],
    },
  },
  {
    name: "Seasonic Focus GX-850 850W 80 Plus Gold PSU",
    description:
      "Fully modular power supply with high efficiency and reliable performance.",
    price: 140.0,
    stock: 70,
    category: {
      create: {
        name: "power-supplies",
        description: "power-supplies-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/seasonic-psu-1.jpg",
        },
      ],
    },
  },
  {
    name: "Intel Core i5-11600K Desktop Processor",
    description:
      "6-core, 12-thread processor with unlocked multipliers for excellent performance and gaming.",
    price: 270.0,
    stock: 100,
    category: {
      create: {
        name: "processors",
        description: "processors-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/intel-2.jpg",
        },
      ],
    },
  },
  {
    name: "Patriot Viper Steel 16GB (2 x 8GB) DDR4 3200MHz",
    description:
      "High-performance memory with a durable heat shield and fast speeds.",
    price: 80.0,
    stock: 120,
    category: {
      create: {
        name: "memory",
        description: "memory-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/patriot-ram-1.jpg",
        },
      ],
    },
  },
  {
    name: "Sabrent Rocket Q 1TB NVMe PCIe M.2 2280 SSD",
    description:
      "High-capacity NVMe SSD with QLC NAND for fast performance and reliability.",
    price: 130.0,
    stock: 150,
    category: {
      create: {
        name: "storage",
        description: "storage-category-description",
      },
    },
    images: {
      create: [
        {
          url: "public/images/sabrent-ssd-1.jpg",
        },
      ],
    },
  },
];
