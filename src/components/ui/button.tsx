import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pixel text-sm font-minecraft ring-offset-background transition-all duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-block hover:shadow-block-hover active:translate-y-[2px] active:border-b-2",
  {
    variants: {
      variant: {
        default: "bg-creeper text-white border-b-4 border-b-black hover:bg-creeper-dark",
        destructive:
          "bg-redstone text-white border-b-4 border-b-black hover:bg-redstone-dark",
        outline:
          "border-4 border-stone bg-transparent hover:bg-stone/20 text-foreground",
        secondary:
          "bg-dirt text-white border-b-4 border-b-black hover:bg-dirt-dark",
        ghost: "hover:bg-stone/20 hover:text-foreground border-2 border-transparent hover:border-stone",
        link: "text-creeper underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        sm: "h-8 rounded-pixel px-3 text-xs",
        lg: "h-12 rounded-pixel px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
