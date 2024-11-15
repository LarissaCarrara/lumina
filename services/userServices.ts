import api from "./api";

interface Login {
  email: string;
  password: string;
  token: string;
}

interface Register {
  email: string;
  password: string;
  name: string,
}

export const Login = async (
  email: string,
  password: string
): Promise<Login> => {
  try {
    const response = await api.post<Login>("/auth/login", { email, password });
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao fazer login!",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const Register = async (
  email: string,
  password: string,
  name: string,

): Promise<Register> => {
  try {
    const response = await api.post<Register>("/auth/register", { email, password, name });
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao cadastrar novo cliente!",
      error.response?.data || error.message
    );
    throw error;
  }
};
