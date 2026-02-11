import { forwardRef } from 'react'
import { cn } from '../../utils/helpers'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'btn',
  {
    variants: {
      variant: {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
        ghost: 'btn-ghost',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

const Button = forwardRef(({ 
  className, 
  variant, 
  size, 
  as: Component = 'button',
  children, 
  ...props 
}, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
