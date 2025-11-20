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

export const updateUserSchema = z
  .object({
    name: z
      .string()
      .min(1, "O nome deve ter pelo menos 1 caractere")
      .max(255, "O nome deve ter no máximo 255 caracteres")
      .optional(),
    username: z.string().email("Email inválido").optional(),
    password: z
      .string()
      .min(5, "A senha deve ter pelo menos 5 caracteres")
      .optional(),
  })
  .refine((data) => data.name || data.username || data.password, {
    message: "Pelo menos um campo deve ser preenchido",
  });

export type UpdateUserFormData = z.infer<typeof updateUserSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
