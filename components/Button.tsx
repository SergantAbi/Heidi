import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:shadow-primary/40 focus:ring-primary",
    secondary: "bg-accent/10 text-accent-light hover:bg-accent/20 focus:ring-accent",
    outline: "border border-primary text-primary hover:bg-primary/5 focus:ring-primary",
    ghost: "text-text-muted hover:text-primary hover:bg-primary/5",
  };

  const sizes = {
    sm: "h-10 px-5 text-xs uppercase tracking-wider",
    md: "h-12 px-8 text-sm uppercase tracking-wider",
    lg: "h-14 px-10 text-base uppercase tracking-widest",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;