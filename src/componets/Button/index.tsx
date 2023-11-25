import {ComponentProps, FC} from "react";
import {button} from "./styled"
import {VariantProps} from "tailwind-variants";

export type IPropsButton = ComponentProps<"button"> & VariantProps<typeof button>
const Button:FC<IPropsButton> = ({size,children, className, ...props}) => {
    return <button {...props} className={button({className, size})}>{children}</button>
}

export default Button;