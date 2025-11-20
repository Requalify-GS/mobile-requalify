import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Usuário deve ter no mínimo 3 caracteres")
    .email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export const signUpSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  username: z
    .string()
    .min(3, "Usuário deve ter no mínimo 3 caracteres")
    .email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
