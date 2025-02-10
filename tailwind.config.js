/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js}',
    './_layouts/**/*.{html,js}',
    './_posts/**/*.{html,md}',
    './_pages/**/*.{html,md}',
    './docs/**/*.{html,js,md}',
    './[^_]**/*.{html,js,md}',  // Match all non-underscore dirs
    './*.{html,js}',
  ],
  safelist: [
    'min-h-[75vh]',
    'left-[initial]'
    // '!hidden',
    // '-mb-4',
    // '-my-0.5',
    // '-mr-1',
    // 'animate-pulse',
    // 'block',
    // 'bg-blue-100',
    // 'bg-gray-300',
    // 'bg-none',
    // 'bg-slate-900',
    // 'bg-white',
    // 'border-0',
    // 'border-blue-600',
    // 'capitalize',
    // 'col-span-2',
    // 'col-span-3',
    // 'col-span-5',
    // 'cursor-pointer',
    // 'flex-[0_0_auto]',
    // 'float-right',
    // 'font-medium',
    // 'font-semibold',
    // 'gap-0.5',
    // 'gap-2',
    // 'gap-4',
    // 'gap-x-2',
    // 'gap-y-1.5',
    // 'gap-y-1',
    // 'grid-cols-3',
    // 'grid-cols-5',
    // 'group',
    // 'group-hover',
    // 'group-hover:opacity-100',
    // 'h-5',
    // 'h-full',
    // 'hidden',
    // 'hover:opacity-100',
    // 'inline-flex',
    // 'items-end',
    // 'justify-between',
    // 'justify-center',
    // 'justify-end',
    // 'justify-start',
    // 'leading-9',
    // 'lg:flex',
    // '!list-decimal',
    // 'max-w-2xl',
    // 'mb-0',
    // 'mb-12',
    // 'md:block',
    // 'md:col-span-2',
    // 'md:col-span-3',
    // 'md:col-span-5',
    // 'md:flex-col',
    // 'md:float-right',
    // 'md:gap-y-1.5',
    // 'md:gap-2',
    // 'md:gap-4',
    // 'md:grid-cols-3',
    // 'md:items-center',
    // 'md:items-start',
    // 'md:justify-between',
    // 'md:mb-0',
    // 'md:ml-4',
    // 'md:mr-2',
    // 'md:mx-0',
    // 'md:mx-auto',
    // 'md:px-0',
    // 'md:rounded',
    // 'md:self-end',
    // 'md:text-base',
    // 'md:text-left',
    // 'md:w-auto',
    // 'min-h-[44px]',
    // 'md:min-h-[50vh]',
    // 'min-w-[65px]',
    // 'min-h-screen',
    // 'ml-2',
    // 'mt-0',
    // 'mt-1',
    // 'mt-4',
    // 'my-2',
    // 'opacity-50',
    // 'opacity-75',
    // 'pb-1',
    // 'pb-2',
    // 'pb-4',
    // 'pt-2',
    // 'pt-3',
    // 'pt-8',
    // 'py-8',
    // 'px-3',
    // 'rounded',
    // 'rounded-full',
    // 'self-end',
    // 'size-2',
    // 'size-3',
    // 'size-4',
    // 'size-5',
    // 'size-6',
    // 'size-24',
    // 'text-[15px]',
    // 'text-base',
    // 'text-center',
    // 'text-green-600',
    // 'text-orange-500',
    // 'text-white',
    // 'w-16',
    // 'w-screen',
    // You can also use patterns
    // 'bg-[0-9]+',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        navy: '#252739',
        blue: '#349CE2',
        'blue-500': '#349CE2',
        'blue-600': '#349CE2',
        yellow: '#E2D134',
        red: '#EF3E28',
        'green-light': '#34E297',
        green: '#19B270',
      },
      outlineColor: theme => ({
        ...theme('colors')
      })
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
} 