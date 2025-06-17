import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import productoService from '../services/producto.service';

interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
}

const Productos: React.FC = () => {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [open, setOpen] = useState(false);
    const [editingProducto, setEditingProducto] = useState<Producto | null>(null);
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
    });

    const loadProductos = async () => {
        try {
            const data = await productoService.getAll();
            setProductos(data);
        } catch (error) {
            console.error('Error al cargar productos:', error);
        }
    };

    useEffect(() => {
        loadProductos();
    }, []);

    const handleOpen = (producto?: Producto) => {
        if (producto) {
            setEditingProducto(producto);
            setFormData({
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                precio: producto.precio.toString(),
                stock: producto.stock.toString(),
            });
        } else {
            setEditingProducto(null);
            setFormData({
                nombre: '',
                descripcion: '',
                precio: '',
                stock: '',
            });
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setEditingProducto(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const productoData = {
                ...formData,
                precio: parseFloat(formData.precio),
                stock: parseInt(formData.stock),
            };

            if (editingProducto) {
                await productoService.update(editingProducto.id, productoData);
            } else {
                await productoService.create(productoData);
            }

            handleClose();
            loadProductos();
        } catch (error) {
            console.error('Error al guardar producto:', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('¿Está seguro de eliminar este producto?')) {
            try {
                await productoService.delete(id);
                loadProductos();
            } catch (error) {
                console.error('Error al eliminar producto:', error);
            }
        }
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4" component="h1">
                    Productos
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => handleOpen()}
                >
                    Nuevo Producto
                </Button>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Stock</TableCell>
                            <TableCell align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productos.map((producto) => (
                            <TableRow key={producto.id}>
                                <TableCell>{producto.nombre}</TableCell>
                                <TableCell>{producto.descripcion}</TableCell>
                                <TableCell align="right">
                                    ${producto.precio.toFixed(2)}
                                </TableCell>
                                <TableCell align="right">{producto.stock}</TableCell>
                                <TableCell align="center">
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleOpen(producto)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDelete(producto.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {editingProducto ? 'Editar Producto' : 'Nuevo Producto'}
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Nombre"
                            fullWidth
                            value={formData.nombre}
                            onChange={(e) =>
                                setFormData({ ...formData, nombre: e.target.value })
                            }
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Descripción"
                            fullWidth
                            multiline
                            rows={3}
                            value={formData.descripcion}
                            onChange={(e) =>
                                setFormData({ ...formData, descripcion: e.target.value })
                            }
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Precio"
                            type="number"
                            fullWidth
                            value={formData.precio}
                            onChange={(e) =>
                                setFormData({ ...formData, precio: e.target.value })
                            }
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Stock"
                            type="number"
                            fullWidth
                            value={formData.stock}
                            onChange={(e) =>
                                setFormData({ ...formData, stock: e.target.value })
                            }
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button type="submit" variant="contained">
                            {editingProducto ? 'Actualizar' : 'Crear'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
};

export default Productos; 