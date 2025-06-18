import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  IconButton,
  InputBase,
  Paper,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/SpaceDashboard';
import InventoryIcon from '@mui/icons-material/Inventory2';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import ArrowLeftIcon from '@mui/icons-material/ArrowBack';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuIcon from '@mui/icons-material/Menu';
import NightlightIcon from '@mui/icons-material/Nightlight';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WarningIcon from '@mui/icons-material/Warning';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const drawerWidth = 325;
const marginSize = 5;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', active: true },
  { text: 'Inventario', icon: <InventoryIcon />, path: '/inventario' },
  { text: 'Productos', icon: <LocalOfferIcon />, path: '/productos' },
  { text: 'Pedidos', icon: <LocalShippingIcon />, path: '/pedidos' },
  { text: 'Clientes', icon: <PeopleIcon />, path: '/clientes' },
  { text: 'Usuarios', icon: <GroupIcon />, path: '/usuarios' },
  { text: 'Configuración', icon: <SettingsIcon />, path: '/configuracion' },
];

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'white' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'rgb(19,19,19)',
            color: 'rgb(216,216,216)',
            borderRadius: '26px',
            margin: '4px',
            height: 'calc(100vh - 8px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '5px 0 10px rgba(53,53,53,0.596)',
            p: '6px',
          },
        }}
      >
        <Box>
          {/* Iconos superiores */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', pt: '15px', pb: '15px', borderBottom: '1px solid gray' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, color: 'white', fontSize: 14 }}><DashboardIcon fontSize="small" /></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, color: 'white', fontSize: 14 }}><StarIcon fontSize="small" /></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, color: 'white', fontSize: 14 }}><ChevronLeftIcon fontSize="small" /></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, color: 'white', fontSize: 14 }}><ChevronRightIcon fontSize="small" /></Box>
          </Box>
          {/* Círculos de usuario */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', py: '15px' }}>
            <Box sx={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #f1f1f1', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none' }}>
              <Avatar src="/imagenes/foto01 mujer.png" sx={{ width: 40, height: 40 }} />
            </Box>
            <IconButton sx={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #f1f1f1', bgcolor: 'white', color: 'black', fontSize: 15, '&:hover': { bgcolor: '#eee' } }}><NotificationsIcon fontSize="small" /></IconButton>
            <IconButton sx={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #f1f1f1', bgcolor: 'white', color: 'black', fontSize: 15, '&:hover': { bgcolor: '#eee' } }}><StarIcon fontSize="small" /></IconButton>
            <IconButton sx={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #f1f1f1', bgcolor: 'white', color: 'black', fontSize: 15, '&:hover': { bgcolor: '#eee' } }}><SearchIcon fontSize="small" /></IconButton>
            <IconButton sx={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #f1f1f1', bgcolor: 'white', color: 'black', fontSize: 15, '&:hover': { bgcolor: '#eee' } }}><TuneIcon fontSize="small" /></IconButton>
          </Box>
          {/* Menú */}
          <List sx={{ mt: 2, px: '35px' }}>
            {menuItems.map((item, idx) => (
              <ListItem
                button
                key={item.text}
                selected={item.active}
                sx={{
                  bgcolor: item.active ? '#ffcc00' : 'transparent',
                  color: item.active ? 'black' : 'rgb(216,216,216)',
                  fontWeight: item.active ? 'bold' : 'normal',
                  borderRadius: '25px',
                  border: item.active ? '2px solid #ffcc00' : 'none',
                  boxShadow: item.active ? '0px 0px 10px #ffcc00' : 'none',
                  mb: '15px',
                  pl: 2.5,
                  pr: 2,
                  fontSize: 18,
                  alignItems: 'center',
                  gap: '10px',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'rgba(255,204,0,0.6)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: item.active ? 'black' : 'rgb(216,216,216)', minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: item.active ? 'bold' : 'normal', fontSize: 18 }} />
                <ChevronRightIcon fontSize="small" sx={{ position: 'absolute', right: 10, color: item.active ? 'black' : 'rgb(236,236,236)' }} />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Iconos inferiores */}
        <Box sx={{ textAlign: 'center', py: '20px' }}>
          <IconButton sx={{ width: 50, height: 50, borderRadius: '50%', border: '0.5px solid white', color: 'white', fontSize: '2dvh', mx: 1, bgcolor: 'transparent', '&:hover': { bgcolor: '#222' } }}><ArrowLeftIcon /></IconButton>
          <IconButton sx={{ width: 50, height: 50, borderRadius: '50%', border: '0.5px solid white', color: 'white', fontSize: '2dvh', mx: 1, bgcolor: 'transparent', '&:hover': { bgcolor: '#222' } }}><HeadphonesIcon /></IconButton>
          <IconButton sx={{ width: 50, height: 50, borderRadius: '50%', border: '0.5px solid white', color: 'white', fontSize: '2dvh', mx: 1, bgcolor: 'transparent', '&:hover': { bgcolor: '#222' } }}><SettingsIcon /></IconButton>
          <IconButton sx={{ width: 50, height: 50, borderRadius: '50%', border: '0.5px solid white', color: 'white', fontSize: '2dvh', mx: 1, bgcolor: 'transparent', '&:hover': { bgcolor: '#222' } }}><ArrowUpwardIcon /></IconButton>
        </Box>
      </Drawer>

      {/* Contenedor de áreas grises */}
      <Box sx={{ flexGrow: 1, ml: `${drawerWidth + 4}px`, height: '100vh', position: 'relative', overflow: 'visible' }}>
        {/* Navbar fijo */}
        <Box sx={{
          bgcolor: '#dddcdc',
          color: 'rgba(46,46,46,0.911)',
          borderRadius: '26px',
          height: '100px',
          position: 'fixed',
          top: '4px',
          left: `${drawerWidth + 8}px`,
          right: '4px',
          zIndex: 1200,
          display: 'flex',
          alignItems: 'center',
          px: '15px',
          boxSizing: 'border-box',
          width: `calc(100vw - ${drawerWidth + 12}px)`
        }}>
          {/* Hamburger para móvil */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, fontSize: 24, cursor: 'pointer', p: 1 }}>
            <MenuIcon />
          </Box>
          
          {/* Contenido del topbar */}
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Bloque de título a la izquierda */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 220 }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 0, color: 'rgba(46,46,46,0.911)' }}>Dashboard</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(46,46,46,0.911)' }}>Resumen General</Typography>
            </Box>
            {/* Grupo usuario + búsqueda desplazados a la derecha */}
            <Box sx={{ display: 'flex', alignItems: 'center', ml: '15vw' }}>
              {/* Usuario centrado */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto', minWidth: 220 }}>
                <Avatar src="/imagenes/foto01 mujer.png" sx={{ width: 48, height: 48, mb: 0 }} />
                <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1, color: 'rgba(46,46,46,0.911)' }}>Juana Pérez</Typography>
                <Typography variant="caption" sx={{ color: 'rgba(46,46,46,0.911)' }}>Administrador</Typography>
              </Box>
              {/* Barra de búsqueda e iconos */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', ml: 4, mr: 2 }}>
                <InputBase 
                  placeholder="Buscar..." 
                  sx={{ 
                    p: '5px 10px',
                    borderRadius: '18px',
                    border: '1px solid #949494',
                    width: '250px',
                    height: '36px',
                    bgcolor: 'white'
                  }} 
                />
                <IconButton sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'white', border: '.5px solid #5e5e5e', color: '#5e5e5e', fontSize: 16, '&:hover': { bgcolor: '#eee' } }}><NightlightIcon fontSize="small" /></IconButton>
                <IconButton sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'white', border: '.5px solid #5e5e5e', color: '#5e5e5e', fontSize: 16, '&:hover': { bgcolor: '#eee' } }}><ZoomInIcon fontSize="small" /></IconButton>
                <IconButton sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'white', border: '.5px solid #5e5e5e', color: '#5e5e5e', fontSize: 16, '&:hover': { bgcolor: '#eee' } }}><ZoomOutIcon fontSize="small" /></IconButton>
              </Box>
            </Box>
            {/* Hora a la derecha */}
            <Box sx={{ textAlign: 'right', fontSize: 15, display: 'flex', flexDirection: 'column', lineHeight: 1.8, color: 'rgba(46,46,46,0.911)', minWidth: 90, ml: 'auto' }}>
              <Typography variant="body2">7:01 AM</Typography>
              <Typography variant="caption">15/03/2025</Typography>
            </Box>
          </Box>
        </Box>
        {/* Área de trabajo */}
        <Box sx={{
          bgcolor: 'rgb(236,236,236)',
          color: 'black',
          borderRadius: '26px',
          position: 'fixed',
          top: '112px',
          left: `${drawerWidth + 8}px`,
          right: '4px',
          bottom: '4px',
          overflowY: 'auto',
          boxSizing: 'border-box',
          border: '1px solid rgb(226,226,226)',
          zIndex: 1100
        }}>
          <Box>
            <Box>
              <Typography variant="h4" sx={{ fontSize: 24, fontWeight: 'bold', color: '#333', mb: 2, pl: '24px' }}>Dashboard</Typography>
            </Box>
            
            {/* Filtros */}
            <Box sx={{ 
              bgcolor: '#fff', 
              p: '15px', 
              borderRadius: '8px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
              mb: '20px' 
            }}>
              <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Filtrar por Fechas</Typography>
              <Box sx={{ display: 'flex', gap: '15px' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ display: 'block', fontSize: 14, color: '#666', mb: '5px' }}>Fecha Inicio:</Typography>
                  <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: 14 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ display: 'block', fontSize: 14, color: '#666', mb: '5px' }}>Fecha Fin:</Typography>
                  <input type="date" style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px', fontSize: 14 }} />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'end' }}>
                  <Button 
                    variant="contained" 
                    sx={{ 
                      bgcolor: '#007bff', 
                      color: '#fff', 
                      p: '8px', 
                      border: 'none', 
                      borderRadius: '4px', 
                      fontSize: 14, 
                      cursor: 'pointer',
                      '&:hover': { bgcolor: '#0056b3' }
                    }}
                  >
                    Filtrar
                  </Button>
                </Box>
              </Box>
            </Box>
            
            {/* Tarjetas de KPIs */}
            <Box sx={{ display: 'flex', gap: '20px', mb: '20px' }}>
              <Box sx={{ 
                flex: 1, 
                bgcolor: '#17a2b8', 
                p: '15px', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px' 
              }}>
                <ShoppingCartIcon sx={{ fontSize: 36, color: '#fff' }} />
                <Box>
                  <Typography sx={{ fontSize: 24, fontWeight: 'bold', color: '#fff', m: 0 }}>0.0</Typography>
                  <Typography sx={{ fontSize: 14, color: '#fff', m: 0 }}>Ventas del Mes</Typography>
                </Box>
              </Box>
              
              <Box sx={{ 
                flex: 1, 
                bgcolor: '#28a745', 
                p: '15px', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px' 
              }}>
                <TrendingUpIcon sx={{ fontSize: 36, color: '#fff' }} />
                <Box>
                  <Typography sx={{ fontSize: 24, fontWeight: 'bold', color: '#fff', m: 0 }}>1</Typography>
                  <Typography sx={{ fontSize: 14, color: '#fff', m: 0 }}>Pedidos Pendientes</Typography>
                </Box>
              </Box>
              
              <Box sx={{ 
                flex: 1, 
                bgcolor: '#ffc107', 
                p: '15px', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px' 
              }}>
                <WarningIcon sx={{ fontSize: 36, color: '#fff' }} />
                <Box>
                  <Typography sx={{ fontSize: 24, fontWeight: 'bold', color: '#fff', m: 0 }}>1</Typography>
                  <Typography sx={{ fontSize: 14, color: '#fff', m: 0 }}>Alertas de Stock</Typography>
                </Box>
              </Box>
              
              <Box sx={{ 
                flex: 1, 
                bgcolor: '#dc3545', 
                p: '15px', 
                borderRadius: '8px', 
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px' 
              }}>
                <PersonAddIcon sx={{ fontSize: 36, color: '#fff' }} />
                <Box>
                  <Typography sx={{ fontSize: 24, fontWeight: 'bold', color: '#fff', m: 0 }}>2</Typography>
                  <Typography sx={{ fontSize: 14, color: '#fff', m: 0 }}>Clientes Nuevos</Typography>
                </Box>
              </Box>
            </Box>
            
            {/* Tablas */}
            <Box sx={{ display: 'flex', gap: '20px', mb: '20px' }}>
              <Box sx={{ flex: 1, bgcolor: '#fff', p: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Productos Más Vendidos</Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 'bold', color: '#333' }}>Producto</TableCell>
                        <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 'bold', color: '#333' }}>Precio</TableCell>
                        <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 'bold', color: '#333' }}>Cantidad Vendida</TableCell>
                        <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 'bold', color: '#333' }}>Ingreso Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, color: '#666' }}>Producto A</TableCell>
                        <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, color: '#666' }}>$10.00</TableCell>
                        <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, color: '#666' }}>1</TableCell>
                        <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, color: '#666' }}>$10.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              
              <Box sx={{ flex: 1, bgcolor: '#fff', p: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Pedidos por Estado</Typography>
                <List sx={{ p: 0, m: 0 }}>
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between', p: '10px 0', borderBottom: '1px solid #ddd', fontSize: 14, color: '#666' }}>
                    <Typography>Pendiente</Typography>
                    <Typography sx={{ p: '5px 10px', borderRadius: '12px', color: '#fff', fontSize: 12, bgcolor: '#ffc107' }}>1</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between', p: '10px 0', borderBottom: '1px solid #ddd', fontSize: 14, color: '#666' }}>
                    <Typography>Completado</Typography>
                    <Typography sx={{ p: '5px 10px', borderRadius: '12px', color: '#fff', fontSize: 12, bgcolor: '#28a745' }}>0</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'flex', justifyContent: 'space-between', p: '10px 0', fontSize: 14, color: '#666' }}>
                    <Typography>Cancelado</Typography>
                    <Typography sx={{ p: '5px 10px', borderRadius: '12px', color: '#fff', fontSize: 12, bgcolor: '#dc3545' }}>0</Typography>
                  </ListItem>
                </List>
              </Box>
            </Box>
            
            {/* Ingresos por Mes */}
            <Box sx={{ bgcolor: '#fff', p: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', mb: '20px' }}>
              <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Ingresos por Mes</Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 'bold', color: '#333' }}>Mes</TableCell>
                      <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, fontWeight: 'bold', color: '#333' }}>Ingreso Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, color: '#666' }}>April 2025</TableCell>
                      <TableCell sx={{ p: '10px', textAlign: 'left', borderBottom: '1px solid #ddd', fontSize: 14, color: '#666' }}>$0.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            
            {/* Gráficos */}
            <Box sx={{ display: 'flex', gap: '20px', mb: '20px' }}>
              <Box sx={{ flex: 1, bgcolor: '#fff', p: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Gráfico de Ingresos por Mes</Typography>
                <Box sx={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '256px', 
                  bgcolor: '#f9f9f9', 
                  border: '1px solid #ddd', 
                  borderRadius: '8px', 
                  p: '10px', 
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '10px'
                }}>
                  <Box sx={{ 
                    flex: 1, 
                    width: '30px', 
                    height: '20%', 
                    bgcolor: '#17a2b8', 
                    borderRadius: '4px', 
                    position: 'relative' 
                  }}>
                    <Typography sx={{ 
                      position: 'absolute', 
                      bottom: '-20px', 
                      left: '50%', 
                      transform: 'translateX(-50%)', 
                      fontSize: 12, 
                      color: '#666' 
                    }}>
                      April 2025
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', mt: '10px', fontSize: 12, color: '#666' }}>
                  <Box sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#17a2b8', borderRadius: '2px', mr: '5px' }}></Box>
                  Ingresos (USD)
                </Box>
              </Box>
              
              <Box sx={{ flex: 1, bgcolor: '#fff', p: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Gráfico de Pedidos por Estado</Typography>
                <Box sx={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '256px', 
                  bgcolor: '#f9f9f9', 
                  border: '1px solid #ddd', 
                  borderRadius: '8px', 
                  p: '10px', 
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    width: '100%', 
                    height: '30px', 
                    borderRadius: '4px', 
                    overflow: 'hidden' 
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: 12, 
                      color: '#fff', 
                      width: '50%', 
                      bgcolor: '#ffc107' 
                    }}>
                      Pendiente
                    </Box>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: 12, 
                      color: '#fff', 
                      width: '30%', 
                      bgcolor: '#28a745' 
                    }}>
                      Completado
                    </Box>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: 12, 
                      color: '#fff', 
                      width: '20%', 
                      bgcolor: '#dc3545' 
                    }}>
                      Cancelado
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', mt: '10px', fontSize: 12, color: '#666' }}>
                  <Box sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#ffc107', borderRadius: '2px', mr: '5px' }}></Box>
                  Pendiente
                  <Box sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#28a745', borderRadius: '2px', mx: '5px' }}></Box>
                  Completado
                  <Box sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#dc3545', borderRadius: '2px', mx: '5px' }}></Box>
                  Cancelado
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: '20px', mb: '20px' }}>
              <Box sx={{ flex: 1, bgcolor: '#fff', p: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Gráfico de Productos Más Vendidos</Typography>
                <Box sx={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '256px', 
                  bgcolor: '#f9f9f9', 
                  border: '1px solid #ddd', 
                  borderRadius: '8px', 
                  p: '10px', 
                  boxSizing: 'border-box'
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: '10px' 
                  }}>
                    <Typography sx={{ width: '100px', fontSize: 12, color: '#666' }}>Producto A</Typography>
                    <Box sx={{ 
                      height: '20px', 
                      width: '10%', 
                      bgcolor: '#6f42c1', 
                      borderRadius: '4px' 
                    }}></Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', mt: '10px', fontSize: 12, color: '#666' }}>
                  <Box sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#6f42c1', borderRadius: '2px', mr: '5px' }}></Box>
                  Cantidad Vendida
                </Box>
              </Box>
              
              <Box sx={{ flex: 1, bgcolor: '#fff', p: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Gráfico de Clientes Nuevos por Mes</Typography>
                <Box sx={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '256px', 
                  bgcolor: '#f9f9f9', 
                  border: '1px solid #ddd', 
                  borderRadius: '8px', 
                  p: '10px', 
                  boxSizing: 'border-box'
                }}>
                  <Box sx={{ 
                    position: 'absolute', 
                    width: '8px', 
                    height: '8px', 
                    bgcolor: '#17a2b8', 
                    borderRadius: '50%', 
                    left: '0%', 
                    top: '80%' 
                  }}></Box>
                  <Box sx={{ 
                    position: 'absolute', 
                    width: '8px', 
                    height: '8px', 
                    bgcolor: '#17a2b8', 
                    borderRadius: '50%', 
                    left: '100%', 
                    top: '20%' 
                  }}></Box>
                  <Box sx={{ 
                    position: 'absolute', 
                    height: '2px', 
                    width: '100%', 
                    top: '80%', 
                    left: 0, 
                    transform: 'rotate(-30deg)', 
                    transformOrigin: 'left', 
                    bgcolor: '#17a2b8' 
                  }}></Box>
                  <Typography sx={{ 
                    position: 'absolute', 
                    bottom: '-20px', 
                    left: 0, 
                    fontSize: 12, 
                    color: '#666' 
                  }}>
                    April 2025
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', mt: '10px', fontSize: 12, color: '#666' }}>
                  <Box sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#17a2b8', borderRadius: '2px', mr: '5px' }}></Box>
                  Clientes Nuevos
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ bgcolor: '#fff', p: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <Typography variant="h6" sx={{ fontSize: 18, fontWeight: 'bold', color: '#333', mb: '15px' }}>Gráfico de Alertas de Stock por Producto</Typography>
              <Box sx={{ 
                position: 'relative', 
                width: '100%', 
                height: '256px', 
                bgcolor: '#f9f9f9', 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                p: '10px', 
                boxSizing: 'border-box'
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: '10px',
                  position: 'relative'
                }}>
                  <Typography sx={{ width: '100px', fontSize: 12, color: '#666' }}>Producto B</Typography>
                  <Box sx={{ 
                    height: '20px', 
                    width: '50%', 
                    bgcolor: '#dc3545', 
                    borderRadius: '4px' 
                  }}></Box>
                  <Box sx={{ 
                    height: '20px', 
                    width: '80%', 
                    bgcolor: '#17a2b8', 
                    borderRadius: '4px',
                    position: 'absolute',
                    opacity: 0.5
                  }}></Box>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: '10px', mt: '10px', fontSize: 12, color: '#666' }}>
                <Box sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#dc3545', borderRadius: '2px', mr: '5px' }}></Box>
                Stock Actual
                <Box sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#17a2b8', borderRadius: '2px', mx: '5px' }}></Box>
                Umbral de Stock
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 