import {tv} from "tailwind-variants"

export const button = tv({
    base: "flex justify-center items-center",
    variants: {
        size: {
            default: "h-10 px-4",
            sm: "h-8 px-3",
            xs: "h-6 px-2",
        }
    },
    defaultVariants: {
        size: "default"
    }
})