import axios from 'axios';

const API_URL = 'http://localhost:8080/api/usuarios';

export interface Usuario {
    id: number;
    username: string;
    email: string;
    nombre: string;
    apellido: string;
    roles: string[];
}

export interface UsuarioCreate {
    username: string;
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    roles: string[];
}

export interface UsuarioUpdate {
    username?: string;
    email?: string;
    password?: string;
    nombre?: string;
    apellido?: string;
    roles?: string[];
}

class UsuarioService {
    private getAuthHeader() {
        const token = localStorage.getItem('token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    async getAll(): Promise<Usuario[]> {
        const response = await axios.get<Usuario[]>(API_URL, {
            headers: this.getAuthHeader(),
        });
        return response.data;
    }

    async getById(id: number): Promise<Usuario> {
        const response = await axios.get<Usuario>(`${API_URL}/${id}`, {
            headers: this.getAuthHeader(),
        });
        return response.data;
    }

    async create(data: UsuarioCreate): Promise<Usuario> {
        const response = await axios.post<Usuario>(API_URL, data, {
            headers: this.getAuthHeader(),
        });
        return response.data;
    }

    async update(id: number, data: UsuarioUpdate): Promise<Usuario> {
        const response = await axios.put<Usuario>(`${API_URL}/${id}`, data, {
            headers: this.getAuthHeader(),
        });
        return response.data;
    }

    async delete(id: number): Promise<void> {
        await axios.delete(`${API_URL}/${id}`, {
            headers: this.getAuthHeader(),
        });
    }
}

export default new UsuarioService(); 