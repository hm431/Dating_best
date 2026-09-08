// app/fonts.ts
import { Palanquin_Dark } from 'next/font/google';

export const palanquinDark = Palanquin_Dark({
  subsets: ['latin'], // проверь, есть ли нужный тебе subset (кириллицы у этого шрифта нет)
  weight: ['400', '500', '600', '700'],
  variable: '--font-palanquin-dark', // подключаем как CSS-переменную
  display: 'swap',
});