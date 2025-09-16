import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Paper,
} from "@mui/material";
import {
  TrendingUp,
  TrendingDown,
  CreditCard,
  Savings,
  AttachMoney,
  Add,
  Visibility,
  MoreHoriz,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const GradientCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  color: theme.palette.primary.contrastText,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[8],
  },
}));

const StatsCard = styled(Card)(({ theme }) => ({
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[4],
  },
}));

export function MaterialBankingDashboard() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Box sx={{ p: 3, backgroundColor: 'background.default', minHeight: '100vh' }}>
      {/* Welcome Section */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        mb: 4
      }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Good Morning, John!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here's what's happening with your accounts today.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained" startIcon={<Add />}>
            Quick Transfer
          </Button>
          <Button variant="outlined" startIcon={<Visibility />}>
            View All
          </Button>
        </Box>
      </Box>

      {/* Account Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <GradientCard>
            <CardContent>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                {formatCurrency(183481.90)}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Total Balance
              </Typography>
            </CardContent>
          </GradientCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CreditCard color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Spending
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {formatCurrency(2450.30)}
              </Typography>
            </CardContent>
          </StatsCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Savings color="success" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Savings
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {formatCurrency(18800)}
              </Typography>
            </CardContent>
          </StatsCard>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TrendingUp color="warning" sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Investments
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {formatCurrency(125750.25)}
              </Typography>
            </CardContent>
          </StatsCard>
        </Grid>
      </Grid>

      {/* Main Dashboard Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Your Accounts
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Manage your banking accounts
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Recent Transactions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your latest account activity
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}