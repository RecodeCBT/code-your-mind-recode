import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        circuit: "btn-circuit bg-gradient-to-r from-orange-500/10 to-purple-600/10 text-foreground border-2 border-orange-500/30 backdrop-blur-sm hover:from-orange-500/20 hover:to-purple-600/20 hover:border-orange-500/50 hover:scale-105 transition-all duration-300",
        neural: "btn-neural bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-foreground border-2 border-purple-600/30 backdrop-blur-sm hover:from-purple-600/20 hover:to-blue-600/20 hover:border-purple-600/50 hover:scale-105 transition-all duration-300",
        code: "btn-code bg-gradient-to-r from-blue-600/10 to-orange-500/10 text-foreground border-2 border-blue-600/30 backdrop-blur-sm hover:from-blue-600/20 hover:to-orange-500/20 hover:border-blue-600/50 hover:scale-105 transition-all duration-300",
        "nav-active": "bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg border-0 hover:from-orange-600 hover:to-purple-700 hover:scale-105 transition-all duration-300",
        "nav-ghost": "bg-transparent text-foreground hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-purple-600/10 border border-transparent hover:border-orange-500/20 hover:scale-105 transition-all duration-300",
        hero: "bg-gradient-to-r from-orange-500 to-purple-600 text-white hover:from-orange-600 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-0 font-semibold",
        "hero-secondary": "bg-transparent text-primary hover:text-white border-2 border-purple-600/30 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
