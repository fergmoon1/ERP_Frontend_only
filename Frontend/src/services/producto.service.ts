import axios from 'axios';

const API_URL = 'http://localhost:8080/api/productos';

export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
}

export interface ProductoCreate {
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
}

class ProductoService {
    private getAuthHeader() {
        const token = localStorage.getItem('token');
        return token ? { Authorization: `Bearer ${token}` } : {};
    }

    async getAll(): Promise<Producto[]> {
        const response = await axios.get<Producto[]>(API_URL, {
            headers: this.getAuthHeader(),
        });
        return response.data;
    }

    async getById(id: number): Promise<Producto> {
        const response = await axios.get<Producto>(`${API_URL}/${id}`, {
            headers: this.getAuthHeader(),
        });
        return response.data;
    }

    async create(data: ProductoCreate): Promise<Producto> {
        const response = await axios.post<Producto>(API_URL, data, {
            headers: this.getAuthHeader(),
        });
        return response.data;
    }

    async update(id: number, data: Partial<ProductoCreate>): Promise<Producto> {
        const response = await axios.put<Producto>(`${API_URL}/${id}`, data, {
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

const productoService = new ProductoService();
export default productoService; 