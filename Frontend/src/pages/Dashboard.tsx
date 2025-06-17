import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
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

const drawerWidth = 270;

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
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f4f6f8' }}>
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={!isMobile || undefined}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#111',
            color: 'white',
            borderRight: 0,
            borderRadius: isMobile ? 0 : '20px',
            m: isMobile ? 0 : 2,
            minHeight: isMobile ? '100vh' : '96vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box>
          {/* Iconos superiores */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 2 }}>
            <Avatar src="/imagenes/foto01 mujer.png" sx={{ width: 48, height: 48, border: '2px solid #fff' }} />
            <IconButton sx={{ bgcolor: '#222', color: 'white', m: 0.5, '&:hover': { bgcolor: '#333' } }}><NotificationsIcon /></IconButton>
            <IconButton sx={{ bgcolor: '#222', color: 'white', m: 0.5, '&:hover': { bgcolor: '#333' } }}><StarIcon /></IconButton>
            <IconButton sx={{ bgcolor: '#222', color: 'white', m: 0.5, '&:hover': { bgcolor: '#333' } }}><SearchIcon /></IconButton>
            <IconButton sx={{ bgcolor: '#222', color: 'white', m: 0.5, '&:hover': { bgcolor: '#333' } }}><TuneIcon /></IconButton>
          </Box>
          {/* Menú */}
          <List sx={{ mt: 4 }}>
            {menuItems.map((item, idx) => (
              <ListItem
                button
                key={item.text}
                selected={item.active}
                sx={{
                  bgcolor: item.active ? '#ffe600' : 'transparent',
                  color: item.active ? '#111' : 'white',
                  borderRadius: 2,
                  mb: 1,
                  fontWeight: item.active ? 'bold' : 'normal',
                  boxShadow: item.active ? '0 0 10px 2px #ffe60099' : 'none',
                  '&:hover': {
                    bgcolor: item.active ? '#ffe600' : '#222',
                    color: item.active ? '#111' : '#ffe600',
                  },
                  pl: 3,
                  pr: 2,
                }}
              >
                <ListItemIcon sx={{ color: item.active ? '#111' : 'white', minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: item.active ? 'bold' : 'normal' }} />
                <ChevronRightIcon fontSize="small" sx={{ color: item.active ? '#111' : '#fff' }} />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Iconos inferiores */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', mb: 2 }}>
          <IconButton sx={{ bgcolor: '#222', color: 'white', '&:hover': { bgcolor: '#333' } }}><ArrowLeftIcon /></IconButton>
          <IconButton sx={{ bgcolor: '#222', color: 'white', '&:hover': { bgcolor: '#333' } }}><HeadphonesIcon /></IconButton>
          <IconButton sx={{ bgcolor: '#222', color: 'white', '&:hover': { bgcolor: '#333' } }}><SettingsIcon /></IconButton>
          <IconButton sx={{ bgcolor: '#222', color: 'white', '&:hover': { bgcolor: '#333' } }}><ArrowUpwardIcon /></IconButton>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, ml: { xs: 0, md: `${drawerWidth}px` }, display: 'flex', flexDirection: 'column' }}>
        {/* Topbar */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: '#e5e5e5', color: '#111', boxShadow: 1, borderRadius: '0 0 20px 20px', px: 2, pt: 1 }}>
          <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', minHeight: 80 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 0 }}>Dashboard</Typography>
              <Typography variant="body2" color="#888" sx={{ ml: 1 }}>Resumen General</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#fff', borderRadius: 10, px: 2, py: 0.5, boxShadow: 1 }}>
                <Avatar src="/imagenes/foto01 mujer.png" sx={{ width: 40, height: 40, mr: 1 }} />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1 }}>Juana Pérez</Typography>
                  <Typography variant="caption" color="#888">Administrador</Typography>
                </Box>
              </Box>
              <Paper component="form" sx={{ display: 'flex', alignItems: 'center', px: 1, bgcolor: '#fff', borderRadius: 10, boxShadow: 1, minWidth: 180 }}>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Buscar..." />
                <IconButton><NightlightIcon /></IconButton>
                <IconButton><ZoomInIcon /></IconButton>
                <IconButton><ZoomOutIcon /></IconButton>
              </Paper>
              <Box sx={{ textAlign: 'right', minWidth: 80 }}>
                <Typography variant="body2">7:01 AM</Typography>
                <Typography variant="caption">15/03/2025</Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Work Area */}
        <Box sx={{ p: { xs: 1, md: 4 }, flex: 1, overflowY: 'auto' }}>
          {/* Filtros */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">Filtrar por Fechas</Typography>
            <Stack direction="row" spacing={2} alignItems="center" mt={1}>
              <Box>
                <Typography variant="body2">Fecha Inicio:</Typography>
                <input type="date" />
              </Box>
              <Box>
                <Typography variant="body2">Fecha Fin:</Typography>
                <input type="date" />
              </Box>
              <Button variant="contained">Filtrar</Button>
            </Stack>
          </Box>

          {/* Tarjetas de resumen */}
          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <ShoppingCartIcon color="primary" fontSize="large" />
                <Box>
                  <Typography variant="h6">0.0</Typography>
                  <Typography variant="body2">Ventas del Mes</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <TrendingUpIcon color="secondary" fontSize="large" />
                <Box>
                  <Typography variant="h6">1</Typography>
                  <Typography variant="body2">Pedidos Pendientes</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <WarningIcon color="error" fontSize="large" />
                <Box>
                  <Typography variant="h6">1</Typography>
                  <Typography variant="body2">Alertas de Stock</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <PersonAddIcon color="success" fontSize="large" />
                <Box>
                  <Typography variant="h6">2</Typography>
                  <Typography variant="body2">Clientes Nuevos</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Productos Más Vendidos */}
          <Grid container spacing={2} mb={3}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>Productos Más Vendidos</Typography>
                <TableContainer>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell>Precio</TableCell>
                        <TableCell>Cantidad Vendida</TableCell>
                        <TableCell>Ingreso Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Producto A</TableCell>
                        <TableCell>$10.00</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>$10.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>Pedidos por Estado</Typography>
                <List>
                  <ListItem secondaryAction={<Typography>1</Typography>}><ListItemText primary="Pendiente" /></ListItem>
                  <ListItem secondaryAction={<Typography>0</Typography>}><ListItemText primary="Completado" /></ListItem>
                  <ListItem secondaryAction={<Typography>0</Typography>}><ListItemText primary="Cancelado" /></ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>

          {/* Ingresos por Mes */}
          <Box mb={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight="bold" mb={2}>Ingresos por Mes</Typography>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Mes</TableCell>
                      <TableCell>Ingreso Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>April 2025</TableCell>
                      <TableCell>$0.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>

          {/* Gráficos (por ahora solo placeholders) */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, minHeight: 200 }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>Gráfico de Ingresos por Mes</Typography>
                <Box sx={{ height: 120, bgcolor: '#e3f2fd', borderRadius: 2, display: 'flex', alignItems: 'flex-end', p: 2 }}>
                  <Box sx={{ width: '20%', height: '20%', bgcolor: '#17a2b8', borderRadius: 1, mr: 1 }} />
                  <Typography variant="caption" sx={{ ml: 1 }}>April 2025</Typography>
                </Box>
                <Typography variant="caption" color="text.secondary" mt={1}>
                  <Box component="span" sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#17a2b8', borderRadius: '50%', mr: 1 }} /> Ingresos (USD)
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, minHeight: 200 }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>Gráfico de Pedidos por Estado</Typography>
                <Box sx={{ height: 40, display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '50%', height: 20, bgcolor: '#ffc107', borderRadius: 1, mr: 1 }} />
                  <Box sx={{ width: '30%', height: 20, bgcolor: '#28a745', borderRadius: 1, mr: 1 }} />
                  <Box sx={{ width: '20%', height: 20, bgcolor: '#dc3545', borderRadius: 1 }} />
                </Box>
                <Typography variant="caption" color="text.secondary" mt={1}>
                  <Box component="span" sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#ffc107', borderRadius: '50%', mr: 1 }} /> Pendiente
                  <Box component="span" sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#28a745', borderRadius: '50%', mx: 1 }} /> Completado
                  <Box component="span" sx={{ display: 'inline-block', width: 12, height: 12, bgcolor: '#dc3545', borderRadius: '50%', mx: 1 }} /> Cancelado
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard; 