import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../theme/muiTheme';
import { MaterialBankingSidebar } from './MaterialBankingSidebar';
import { MaterialTopNavigation } from './MaterialTopNavigation';

interface MaterialBankingLayoutProps {
  children: React.ReactNode;
}

export function MaterialBankingLayout({ children }: MaterialBankingLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'background.default' }}>
        <MaterialBankingSidebar 
          isCollapsed={sidebarCollapsed} 
          onToggle={handleSidebarToggle}
        />
        
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '100vh',
            ml: sidebarCollapsed ? '64px' : '256px',
            transition: 'margin-left 0.3s ease',
          }}
        >
          <MaterialTopNavigation />
          <Box sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}