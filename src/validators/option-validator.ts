// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-gray-100 border-gray-100

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
    { label: "Black", value: "black", tw: "zinc-900" },
    {
        label: "Blue",
        value: "blue",
        tw: "blue-950",
    },
    { label: "Rose", value: "rose", tw: "rose-950" },
    { label: "White", value: "white", tw: "gray-100" },
] as const;

export const MODELS = {
    name: "models",
    options: [
        {
            label: "iPhone X",
            value: "iphonex",
        },
        {
            label: "iPhone 11",
            value: "iphone11",
        },
        {
            label: "iPhone 12",
            value: "iphone12",
        },
        {
            label: "iPhone 13",
            value: "iphone13",
        },
        {
            label: "iPhone 14",
            value: "iphone14",
        },
        {
            label: "iPhone 15",
            value: "iphone15",
        },
    ],
} as const;

export const MATERIALS = {
    name: "material",
    label: "Chất liệu",
    options: [
        {
            label: "Silicone",
            value: "silicone",
            description: undefined,
            price: PRODUCT_PRICES.material.silicone,
        },
        {
            label: "Slimcase Mềm",
            value: "polycarbonate",
            description: "Lớp phủ chống trầy xước",
            price: PRODUCT_PRICES.material.polycarbonate,
        },
    ],
} as const;

export const FINISHES = {
    name: "finish",
    label: "Phân loại",
    options: [
        {
            label: "Mặc định",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth,
        },
        {
            label: "Pro",
            value: "textured",
            description: "Chât liệu mềm mại bám dính",
            price: PRODUCT_PRICES.finish.textured,
        },
    ],
} as const;
