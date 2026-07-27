import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts English digits (0-9) to Farsi digits (۰-۹)
 */
export function toFarsiDigits(num: string | number | undefined | null): string {
  if (num === undefined || num === null) return ''
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  return String(num).replace(/\d/g, (x) => farsiDigits[parseInt(x, 10)])
}
