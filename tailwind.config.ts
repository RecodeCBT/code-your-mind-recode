import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			spacing: {
				'108': '27rem', // 432px for 50% larger logo
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'electricity-flow-left': {
					'0%': {
						transform: 'translateX(0%) scaleX(0)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(-100%) scaleX(1)',
						opacity: '0'
					}
				},
				'electricity-flow-right': {
					'0%': {
						transform: 'translateX(0%) scaleX(0)',
						opacity: '0'
					},
					'50%': {
						opacity: '1'
					},
					'100%': {
						transform: 'translateX(100%) scaleX(1)',
						opacity: '0'
					}
				},
				'electric-pulse': {
					'0%': { 
						boxShadow: '0 0 0 0 hsla(var(--primary), 0.7)'
					},
					'50%': { 
						boxShadow: '0 0 0 10px hsla(var(--primary), 0)'
					},
					'100%': { 
						boxShadow: '0 0 0 0 hsla(var(--primary), 0)'
					}
				},
				'electric-border': {
					'0%': { 
						borderColor: 'transparent',
						transform: 'rotate(0deg)'
					},
					'25%': { 
						borderColor: 'hsl(var(--primary))',
						transform: 'rotate(90deg)'
					},
					'50%': { 
						borderColor: 'transparent', 
						transform: 'rotate(180deg)'
					},
					'75%': { 
						borderColor: 'hsl(var(--primary))',
						transform: 'rotate(270deg)'
					},
					'100%': { 
						borderColor: 'transparent',
						transform: 'rotate(360deg)'
					}
				},
				'menu-slide-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.1) translateX(40px) translateY(-40px) rotate(-5deg)'
					},
					'70%': {
						opacity: '0.9',
						transform: 'scale(1.05) translateX(-5px) translateY(5px) rotate(1deg)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateX(0) translateY(0) rotate(0deg)'
					}
				},
				'menu-slide-out': {
					'0%': {
						opacity: '1',
						transform: 'scale(1) translateX(0) translateY(0) rotate(0deg)'
					},
					'30%': {
						opacity: '0.9',
						transform: 'scale(1.05) translateX(-5px) translateY(5px) rotate(1deg)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0.1) translateX(40px) translateY(-40px) rotate(-5deg)'
					}
				},
				'menu-item-cascade': {
					'0%': {
						opacity: '0',
						transform: 'translateX(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'backdrop-radial': {
					'0%': {
						background: 'radial-gradient(circle at 90% 10%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)'
					},
					'100%': {
						background: 'radial-gradient(circle at 90% 10%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'electricity-flow-left': 'electricity-flow-left 3s ease-in-out infinite',
				'electricity-flow-right': 'electricity-flow-right 3s ease-in-out infinite',
				'electric-pulse': 'electric-pulse 3s ease-in-out infinite',
				'electric-border': 'electric-border 4s linear infinite',
				'menu-slide-in': 'menu-slide-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'menu-slide-out': 'menu-slide-out 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
				'menu-item-cascade': 'menu-item-cascade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'backdrop-radial': 'backdrop-radial 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;