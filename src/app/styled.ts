import {tv} from "tailwind-variants";

export const Price = tv({
    base: "",
    variants: {
        line: {
            default: "hidden",
            through: "line-through"
        }
    },
    defaultVariants: {
        line: "default"
    }
})