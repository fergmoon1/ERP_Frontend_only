import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

export interface LoginData {
    username: string;
    password: string;
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    nombre: string;
    apellido: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    nombre: string;
    apellido: string;
    roles: string[];
}

export interface AuthResponse {
    token: string;
    user: User;
}

class AuthService {
    async login(data: LoginData): Promise<AuthResponse> {
        const response = await axios.post<AuthResponse>(`${API_URL}/login`, data);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    }

    async register(data: RegisterData): Promise<void> {
        await axios.post(`${API_URL}/register`, data);
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    async getCurrentUser(): Promise<User> {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No hay token de autenticación');
        }

        const response = await axios.get<User>(`${API_URL}/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }
}

const authService = new AuthService();
export default authService; 