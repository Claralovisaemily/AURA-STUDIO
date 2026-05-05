export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  colorName: string;
  colors?: string[];
  isLimited?: boolean;
  isBestSeller?: boolean;
  description?: string;
  features?: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'sculpt-set',
    name: 'Alunéa Sculpt Set',
    price: 128,
    category: 'Sets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuYN3e8_kKEpcLS-FpjyMo6DvjUxzt1uYw9o_5s8vWq-THWA2XOTzxJG4MQWBQrtFEZdJP_SUHhJ5usgiLZoVuFHTb3y7-dgHPbWc7czXAQQF0lrNi3bqPp6ayRhbW0SYRexMY-TIdODyaBhQvdLrx65kNrwDKfqStDB9RMYiZDTdbWYeaFH-vVTKjBXJP0hRY__BEBmjhGMy7hs54BINd3Pkgc7YpM5MfPtTyCQBPfRlVJauHtVU27LiTK6S3Y8u6A5YvxDSldWM',
    colorName: 'Petal & Lavender',
    isLimited: true,
  },
  {
    id: 'grip-socks',
    name: 'Ethereal Grip Socks',
    price: 22,
    category: 'Accessories',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvI58dScE53sirMyu3-sB2GWLSwkwqYxB5zM9XfIMfO9ck-ZyA3ortVu42R5dpXpMejnAh7OPICQPrVqc0bZaDrp6hvs7a4IyY3yQCAZTICwgeq5Obgfpq58H5dWDX_3PaVfgKeO-CZYP87SHTMUcVtT4HWy0tH10Rm-GJa6x0IDP_GD0CakSUcTwlASPIJOgkT7LVKyEMppO_Q_nskV0iFIha9QAO68ESCrTBPhPa3Nx9YMslzzciz1WxIOZX8DBLBlTlTxOzF20',
    colorName: 'Lavender',
  },
  {
    id: 'hydration-flask',
    name: 'Wellness Hydration Flask',
    price: 45,
    category: 'Accessories',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxe47ihvWhvvrBgCybTWNku6h6Q8aZSI0m_160nJnQLx6ZQV7GT7lZDAIZ8f31NLZ-k1Z83MVVHL5Dizb6dV7EuyLr55mas3Q9LQjYGqCqnJtgcmchg_4fsd5AhG1bk-eNaqrIyvjqZI4nNK8cBCwrQagWA5quLbs79JFg1gPXZfyCvtDtXfYB9oCw1rjgzN20FRvtP7xFrz4beVCwjWb8AucYvwhs1Q2D03M85a1ARyf82gNf2WX1mLNDKnr2HPy8DNUNkmL4Jr4',
    colorName: 'Soft Mist',
  },
  {
    id: 'wrap-jacket',
    name: 'Studio Wrap Jacket',
    price: 98,
    category: 'Apparel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4uq4eKgoT8xM0G12K4jEKb6ELWEdWFi9-5NJ4DKecs6gV0fFHap-5xRLLHmoyDqiIfjNCL0y38dqJeLbiKyz9RbijqIULu8_9AviJWZvByuuEZt3Fv8iw4kI-WsiZQk4uq-A2bkymm7M7jSoQ_GQVD0Vmnmnc1PN2i3HQErVTbbxP1P29JKeV8KnUTKZSdopq6FR9Hm7zWqDSIpRIArHJVCvQdm4bvuz1Vs62ZY_kmkiVsvTgs31znClkpyGWvQVUh_7mQpY0kws',
    colorName: 'Misty Grey',
  },
  {
    id: 'tech-leggings',
    name: 'Technical Leggings',
    price: 85,
    category: 'Pilates',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Idn9m2ipBGt6HRhQ81IaIr6mbDYRKF9CpJribdpI0C6oLvgkmd3Zi6O9lpxdb2YPpOw1w_FTABTZkiTJDuZt6URtrm_KzCOfaRFeCmRMsRCD6fL01EB7HQ3JdkCuLzi26Bm2XSVcWx5oOoa7j-tu5C9egNurAVL8lkMntCCp0dMMI_SCnHO1PSUcW6E0-j_dTfjHMfhgJ13fxjr-aqCcKVYnJnxYvwbCFPA2kt-XN51IYdFoW_2zXO40a69QQ3VRch0uWhoTCsE',
    colorName: 'Dusty Rose',
  },
  {
    id: 'ribbed-bra',
    name: 'Alunéa Ribbed Bra',
    price: 78,
    category: 'Pilates',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3hdRstA-J7s1925MR4Q32MElkkbqn1EgGHjsE08q-OWvAMHfnMHw255pzIiwBFwNGNzMPK0_hMFAnmGWiGKDyb6VPOviC_79PAXt1j6Vhhx92i5UIZ43oMMb0D0FFdYMrIewjSQ0UQOaIRuaaa9pNDgnJftwzuTZc9vGyjkWvrihKHYQ5SsC2wqy2fKmSWCjQmijkdp9YvqLitLdX5IproCNuXTk2AGfTp4ku2vtJsflsm4wvDOlf_a7M4R6J8Xvsuj5vOv_7Gyk',
    colorName: 'Dusty Rose',
  },
  {
    id: 'compression-legging',
    name: 'Core Compression Legging',
    price: 118,
    category: 'Yoga',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJmXTrIKGBoToOtSkQz1qh62KdrHSTkd-RiWvvEGnjeDv41s5uD3GGJO2f9IZsvkutB-ioDPEGJ-huEhjIIWPHzLCerqfKQacTIFLI9rZTIWNhrN7ByBQ2yn2KnRU8BALlwVu2Gz3fpJQNXXHFs8DX6QowVMjUC8-4FpADngGLhtSD9lWpH5LXf1C0SECw7yRUZp6XlgwPjIdKERwJA8x7L2LUIgyVInDhE6auGFXytvRmzKlBBJvrf2x-b3EjU-Ub6k2YaHFbpjk',
    colorName: 'Soft Mist',
    isBestSeller: true,
  },
  {
    id: 'wrap-top',
    name: 'Drift Wrap Top',
    price: 84,
    category: 'Reformer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt8nGDMDubk95QJDgnYWFcnGgmfO5_l4ZxFMorIdeMl-qhaAYDNaHWD2Vb3sA6RzZRaxnLc8VAV7XVDXQ5M1EJPQ7OCXZ_ECQ6geRiEuT38AMeIieo1xpIS73N8n5YTtOjZQJOsfNYve43OXc72dVla7bp_jHuQ-uEDcKqDthbSCtXl58o9tUaN88jpEV4ZTIsm66_mg4LsGtFDr88MrKKRc9qezKv9_Y1pkC76YaW3iyWSM7By7721npeWZ3ENxbUUjmqV3KcQzw',
    colorName: 'Charcoal Noir',
  },
  {
    id: 'ribbed-bodysuit',
    name: 'Alunéa Ribbed Bodysuit',
    price: 185,
    category: 'Sets',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSbqPNuA-C0vwSLrm_Fr3mgwpknzElD8I6UFA5W-OpLBcEG5atmOITU1xXRIHqYPeeXkbH-ArGkpr7g04daQrBjtN-JkMbnQR59YyLcvrcpyqPzw0O8O08_I-_jZ5qwTjyfvOSj_8mV_b4snM8P9Pb8cSzC67fcLchiKdpKONAvvPtU_KgXrT5UO-8157IoLPX2Yp1-xGrbN_KOS_ZxV5AciascRJzFBZxx7NLyekPYEAGzhpMopL9q49nZfpzJqWb-epb-PtCQWk',
    colorName: 'Lavender Mist',
    colors: ['#E6E6FA', '#FADADD', '#FFFFFF'],
    description: 'Our signature Alunéa fabric is tested through thousand-hour Pilates cycles to ensure zero pilling, maximum opacity, and a fit that adapts to your body\'s unique kinetics.',
    features: [
      'Anatomical Compression: Engineered to support the core during deep inversions and extensions.',
      'Cloud-Feel™ Microfiber: Ultra-breathable fabric that mimics the lightness of a second skin.',
      'Zero-Slip Waistband: Stays perfectly in place during long box or jumpboard sequences.'
    ]
  }
];
