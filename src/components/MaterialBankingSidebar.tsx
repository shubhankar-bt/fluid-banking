import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  Avatar,
  Divider,
  Collapse,
} from "@mui/material";
import {
  Home,
  CreditCard,
  TrendingUp,
  Savings,
  Send,
  Receipt,
  Settings,
  HelpOutline,
  ChevronLeft,
  AccountBalance,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Accounts", url: "/accounts", icon: CreditCard },
  { title: "Investments", url: "/investments", icon: TrendingUp },
  { title: "Savings", url: "/savings", icon: Savings },
  { title: "Transfer", url: "/transfer", icon: Send },
  { title: "Transactions", url: "/transactions", icon: Receipt },
];

const supportItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Help Center", url: "/help", icon: HelpOutline },
];

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'isCollapsed',
})<{ isCollapsed: boolean }>(({ theme, isCollapsed }) => ({
  width: isCollapsed ? 64 : 256,
  flexShrink: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  '& .MuiDrawer-paper': {
    width: isCollapsed ? 64 : 256,
    boxSizing: 'border-box',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
}));

const SidebarHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
  position: 'relative',
  minHeight: 80,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

const CollapseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: -12,
  top: 24,
  width: 24,
  height: 24,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[2],
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const UserSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

interface MaterialBankingSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function MaterialBankingSidebar({ isCollapsed, onToggle }: MaterialBankingSidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mainGroupOpen, setMainGroupOpen] = useState(true);
  const [supportGroupOpen, setSupportGroupOpen] = useState(true);

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <StyledDrawer
      variant="permanent"
      isCollapsed={isCollapsed}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <SidebarHeader>
          <Avatar
            sx={{ 
              bgcolor: 'primary.main', 
              width: 40, 
              height: 40,
            }}
          >
            <AccountBalance />
          </Avatar>
          {!isCollapsed && (
            <Box sx={{ opacity: isCollapsed ? 0 : 1, transition: 'opacity 0.3s' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                SecureBank
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Personal Banking
              </Typography>
            </Box>
          )}
          
          <CollapseButton onClick={onToggle} size="small">
            <ChevronLeft
              sx={{
                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            />
          </CollapseButton>
        </SidebarHeader>

        <Box sx={{ flexGrow: 1, py: 1 }}>
          {/* Main Navigation Group */}
          <List dense>
            {!isCollapsed && (
              <ListItem disablePadding>
                <ListItemButton 
                  onClick={() => setMainGroupOpen(!mainGroupOpen)}
                  sx={{ px: 2, py: 0.5 }}
                >
                  <ListItemText 
                    primary="Banking Services" 
                    primaryTypographyProps={{ 
                      variant: 'caption',
                      sx: { fontWeight: 600, color: 'text.secondary' }
                    }}
                  />
                  {mainGroupOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
            )}
            
            <Collapse in={mainGroupOpen || isCollapsed} timeout="auto" unmountOnExit>
              {mainNavItems.map((item) => (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.url}
                    selected={isActive(item.url)}
                    sx={{ px: 1, py: 0.75 }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <item.icon />
                    </ListItemIcon>
                    {!isCollapsed && (
                      <ListItemText 
                        primary={item.title}
                        primaryTypographyProps={{ variant: 'body2' }}
                        sx={{ opacity: isCollapsed ? 0 : 1, transition: 'opacity 0.3s' }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </Collapse>
          </List>

          <Divider sx={{ mx: 2, my: 2 }} />

          {/* Support Group */}
          <List dense>
            {!isCollapsed && (
              <ListItem disablePadding>
                <ListItemButton 
                  onClick={() => setSupportGroupOpen(!supportGroupOpen)}
                  sx={{ px: 2, py: 0.5 }}
                >
                  <ListItemText 
                    primary="Support" 
                    primaryTypographyProps={{ 
                      variant: 'caption',
                      sx: { fontWeight: 600, color: 'text.secondary' }
                    }}
                  />
                  {supportGroupOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
            )}
            
            <Collapse in={supportGroupOpen || isCollapsed} timeout="auto" unmountOnExit>
              {supportItems.map((item) => (
                <ListItem key={item.title} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.url}
                    selected={isActive(item.url)}
                    sx={{ px: 1, py: 0.75 }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <item.icon />
                    </ListItemIcon>
                    {!isCollapsed && (
                      <ListItemText 
                        primary={item.title}
                        primaryTypographyProps={{ variant: 'body2' }}
                        sx={{ opacity: isCollapsed ? 0 : 1, transition: 'opacity 0.3s' }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </Collapse>
          </List>
        </Box>

        <UserSection>
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main', fontSize: '0.75rem' }}>
            JD
          </Avatar>
          {!isCollapsed && (
            <Box sx={{ opacity: isCollapsed ? 0 : 1, transition: 'opacity 0.3s' }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                John Doe
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Premium Member
              </Typography>
            </Box>
          )}
        </UserSection>
      </Box>
    </StyledDrawer>
  );
}