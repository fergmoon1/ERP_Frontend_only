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

const drawerWidth = 325;
const marginSize = 8;

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
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'white', p: `${marginSize}px` }}>
      {/* Sidebar */}
      <Box sx={{
        height: `calc(100vh - ${marginSize * 2}px)`,
        mr: `${marginSize}px`,
        display: { xs: 'none', md: 'block' },
      }}>
        <Drawer
          variant="permanent"
          open
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: 'rgb(19,19,19)',
              color: 'rgb(216,216,216)',
              borderRight: 0,
              borderRadius: '26px',
              height: `calc(100vh - ${marginSize * 2}px)`,
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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 30, color: 'white', fontSize: 14 }}><ArrowLeftIcon fontSize="small" /></Box>
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
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, pr: `${marginSize}px`, pt: 0, pb: 0, pl: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Topbar */}
        <AppBar position="static" elevation={0} sx={{
          bgcolor: '#dddcdc',
          color: 'rgba(46,46,46,0.911)',
          boxShadow: 1,
          borderRadius: '26px',
          height: '100px',
          mt: 0,
          mb: `${marginSize}px`,
          width: '100%',
          overflow: 'visible',
          ml: 0
        }}>
          <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', minHeight: 80, height: '100px', px: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 0, textAlign: 'left' }}>Dashboard</Typography>
              <Typography variant="body2" color="#888" sx={{ ml: 0, textAlign: 'left' }}>Resumen General</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: '#fff', borderRadius: '50%', px: 2, py: 0.5, boxShadow: 1, height: 48 }}>
                <Avatar src="/imagenes/foto01 mujer.png" sx={{ width: 48, height: 48, mr: 1 }} />
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ lineHeight: 1 }}>Juana Pérez</Typography>
                  <Typography variant="caption" color="#888">Administrador</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'transparent', borderRadius: 18, px: 0, py: 0, boxShadow: 0 }}>
                <Paper component="form" sx={{ display: 'flex', alignItems: 'center', px: 1, bgcolor: '#fff', borderRadius: 18, boxShadow: 1, minWidth: 250, height: 36, border: '1px solid #949494' }}>
                  <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Buscar..." />
                </Paper>
                <IconButton sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'white', border: '.5px solid #5e5e5e', color: '#5e5e5e', fontSize: 16, ml: 1, '&:hover': { bgcolor: '#eee' } }}><NightlightIcon fontSize="small" /></IconButton>
                <IconButton sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'white', border: '.5px solid #5e5e5e', color: '#5e5e5e', fontSize: 16, ml: 1, '&:hover': { bgcolor: '#eee' } }}><ZoomInIcon fontSize="small" /></IconButton>
                <IconButton sx={{ width: 36, height: 36, borderRadius: '50%', bgcolor: 'white', border: '.5px solid #5e5e5e', color: '#5e5e5e', fontSize: 16, ml: 1, '&:hover': { bgcolor: '#eee' } }}><ZoomOutIcon fontSize="small" /></IconButton>
              </Box>
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