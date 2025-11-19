import { Mask } from "react-native-mask-input";

/**
 * Máscara de data: DD/MM/AAAA
 */
export const DATE_MASK: Mask = [
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

/**
 * Máscara de CPF: 000.000.000-00
 */
export const CPF_MASK: Mask = [
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  ".",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];

/**
 * Máscara de telefone: (00) 00000-0000
 */
export const PHONE_MASK: Mask = [
  "(",
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

/**
 * Máscara de CEP: 00000-000
 */
export const CEP_MASK: Mask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
];

/**
 * Máscara de ano: AAAA
 */
export const YEAR_MASK: Mask = [/\d/, /\d/, /\d/, /\d/];

/**
 * Máscara de mês/ano: MM/AAAA
 */
export const MONTH_YEAR_MASK: Mask = [/\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/];
