import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import {
  Search,
  Notifications,
  AccountCircle,
  Person,
  Settings,
  Logout,
  NotificationsActive,
  TrendingUp,
  Security,
} from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: 400,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 0.95),
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[1],
  color: theme.palette.text.primary,
}));

const NotificationItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  margin: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'all 0.2s',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'translateY(-1px)',
  },
}));

export function MaterialTopNavigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState<null | HTMLElement>(null);

  const notifications = [
    { 
      id: 1, 
      title: "Payment Received", 
      message: "$2,500 from ABC Corp", 
      time: "5 min ago", 
      unread: true,
      icon: TrendingUp,
      color: "success.main"
    },
    { 
      id: 2, 
      title: "Security Alert", 
      message: "New device login detected", 
      time: "1 hour ago", 
      unread: true,
      icon: Security,
      color: "warning.main"
    },
    { 
      id: 3, 
      title: "Investment Update", 
      message: "Your portfolio gained 2.5%", 
      time: "2 hours ago", 
      unread: false,
      icon: TrendingUp,
      color: "primary.main"
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  return (
    <>
      <StyledAppBar position="sticky" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Left section - Search */}
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, maxWidth: 600 }}>
            <SearchContainer>
              <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search accounts, transactions, or help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                inputProps={{ 'aria-label': 'search' }}
              />
            </SearchContainer>
          </Box>

          {/* Right section - Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Notifications */}
            <IconButton
              color="inherit"
              onClick={() => setNotificationsOpen(true)}
              sx={{ 
                transition: 'all 0.2s',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <Badge badgeContent={unreadCount} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            {/* Profile */}
            <IconButton
              onClick={handleProfileMenuOpen}
              sx={{ 
                p: 0,
                transition: 'all 0.2s',
                '&:hover': { transform: 'scale(1.05)' }
              }}
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: '0.75rem' }}>
                JD
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>

      {/* Notifications Drawer */}
      <Drawer
        anchor="right"
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        PaperProps={{
          sx: { width: 350 }
        }}
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Notifications color="primary" />
            <Typography variant="h6" sx={{ flex: 1 }}>
              Notifications
            </Typography>
            {unreadCount > 0 && (
              <Chip 
                label={`${unreadCount} new`} 
                size="small" 
                color="primary" 
                variant="outlined"
              />
            )}
          </Box>
          <Typography variant="body2" color="text.secondary">
            Stay updated with your banking activities
          </Typography>
        </Box>
        
        <List sx={{ p: 0 }}>
          {notifications.map((notification, index) => {
            const IconComponent = notification.icon;
            return (
              <Box key={notification.id}>
                <NotificationItem elevation={0}>
                  <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        bgcolor: notification.unread ? `${notification.color}20` : 'action.hover',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 0.5,
                      }}
                    >
                      <IconComponent 
                        sx={{ 
                          fontSize: 16, 
                          color: notification.unread ? notification.color : 'text.secondary' 
                        }} 
                      />
                    </Box>
                    
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {notification.title}
                        </Typography>
                        {notification.unread && (
                          <Box sx={{ width: 6, height: 6, bgcolor: 'primary.main', borderRadius: '50%' }} />
                        )}
                      </Box>
                      
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                        {notification.message}
                      </Typography>
                      
                      <Chip 
                        label="Banking" 
                        size="small" 
                        variant="outlined" 
                        sx={{ mr: 1, height: 20, fontSize: '0.65rem' }}
                      />
                      
                      <Typography variant="caption" color="text.secondary">
                        {notification.time}
                      </Typography>
                    </Box>
                  </Box>
                </NotificationItem>
                {index < notifications.length - 1 && <Divider sx={{ mx: 2 }} />}
              </Box>
            );
          })}
        </List>
      </Drawer>

      {/* Profile Menu */}
      <Menu
        anchorEl={profileMenuAnchor}
        open={Boolean(profileMenuAnchor)}
        onClose={handleProfileMenuClose}
        PaperProps={{
          sx: { 
            width: 220,
            mt: 1.5,
            '& .MuiMenuItem-root': {
              transition: 'all 0.2s',
              '&:hover': { transform: 'translateX(4px)' }
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ px: 2, py: 1.5, borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            John Doe
          </Typography>
          <Typography variant="caption" color="text.secondary">
            john.doe@email.com
          </Typography>
        </Box>
        
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Profile Settings" />
        </MenuItem>
        
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <NotificationsActive fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Notification Preferences" />
        </MenuItem>
        
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </MenuItem>
        
        <Divider />
        
        <MenuItem onClick={handleProfileMenuClose} sx={{ color: 'error.main' }}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: 'error.main' }} />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </MenuItem>
      </Menu>
    </>
  );
}