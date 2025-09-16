import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  CreditCard,
  PiggyBank,
  TrendingUp,
  DollarSign,
  Send,
  Plus,
  Eye,
  MoreHorizontal,
} from "lucide-react";

const accounts = [
  {
    id: 1,
    type: "Checking",
    name: "Primary Checking",
    balance: 12450.75,
    accountNumber: "****1234",
    change: 2.5,
    changeAmount: 125.30,
  },
  {
    id: 2,
    type: "Savings",
    name: "High Yield Savings",
    balance: 45280.90,
    accountNumber: "****5678",
    change: 1.2,
    changeAmount: 450.00,
  },
  {
    id: 3,
    type: "Investment",
    name: "Investment Portfolio",
    balance: 125750.25,
    accountNumber: "****9012",
    change: -0.8,
    changeAmount: -980.50,
  },
];

const recentTransactions = [
  {
    id: 1,
    type: "income",
    description: "Salary Deposit",
    amount: 5200.00,
    date: "Today, 9:00 AM",
    category: "Income",
  },
  {
    id: 2,
    type: "expense",
    description: "Grocery Store",
    amount: -85.50,
    date: "Yesterday, 3:45 PM",
    category: "Food",
  },
  {
    id: 3,
    type: "expense",
    description: "Netflix Subscription",
    amount: -15.99,
    date: "2 days ago",
    category: "Entertainment",
  },
  {
    id: 4,
    type: "income",
    description: "Freelance Payment",
    amount: 1250.00,
    date: "3 days ago",
    category: "Income",
  },
];

const savingsGoals = [
  {
    id: 1,
    name: "Emergency Fund",
    target: 10000,
    current: 7500,
    color: "bg-success",
  },
  {
    id: 2,
    name: "Vacation Fund",
    target: 5000,
    current: 2800,
    color: "bg-primary",
  },
  {
    id: 3,
    name: "New Car",
    target: 25000,
    current: 8500,
    color: "bg-warning",
  },
];

export function BankingDashboard() {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Good Morning, John!</h1>
          <p className="text-muted-foreground">Here's what's happening with your accounts today.</p>
        </div>
        <div className="flex gap-2">
          <Button className="banking-button bg-primary hover:bg-primary-hover">
            <Plus className="w-4 h-4 mr-2" />
            Quick Transfer
          </Button>
          <Button variant="outline" className="banking-button">
            <Eye className="w-4 h-4 mr-2" />
            View All
          </Button>
        </div>
      </div>

      {/* Account Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="banking-card banking-gradient text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Total Balance</CardTitle>
            <CardDescription className="text-white/70">All accounts combined</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalBalance)}</div>
            <div className="flex items-center mt-2 text-sm text-white/90">
              <ArrowUpIcon className="w-4 h-4 mr-1" />
              +2.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="banking-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center">
              <CreditCard className="w-4 h-4 mr-2 text-primary" />
              Spending
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(2450.30)}</div>
            <div className="flex items-center mt-2 text-sm text-muted-foreground">
              <ArrowDownIcon className="w-4 h-4 mr-1 text-destructive" />
              -5.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="banking-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center">
              <PiggyBank className="w-4 h-4 mr-2 text-success" />
              Savings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(18800)}</div>
            <div className="flex items-center mt-2 text-sm text-success">
              <ArrowUpIcon className="w-4 h-4 mr-1" />
              +12.3% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="banking-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-warning" />
              Investments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(125750.25)}</div>
            <div className="flex items-center mt-2 text-sm text-warning">
              <ArrowDownIcon className="w-4 h-4 mr-1" />
              -0.8% this week
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Accounts */}
        <Card className="banking-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Your Accounts
              <Button variant="ghost" size="sm" className="banking-button">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </CardTitle>
            <CardDescription>Manage your banking accounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors banking-button cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{account.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {account.type} • {account.accountNumber}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{formatCurrency(account.balance)}</p>
                  <div className={`text-sm flex items-center ${
                    account.change > 0 ? 'text-success' : 'text-destructive'
                  }`}>
                    {account.change > 0 ? (
                      <ArrowUpIcon className="w-3 h-3 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3 mr-1" />
                    )}
                    {formatCurrency(Math.abs(account.changeAmount))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="banking-card">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest account activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors banking-button cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-success-light' : 'bg-muted'
                  }`}>
                    {transaction.type === 'income' ? (
                      <ArrowDownIcon className="w-4 h-4 text-success rotate-180" />
                    ) : (
                      <ArrowUpIcon className="w-4 h-4 text-muted-foreground rotate-180" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{transaction.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {transaction.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{transaction.date}</span>
                    </div>
                  </div>
                </div>
                <div className={`font-semibold ${
                  transaction.type === 'income' ? 'text-success' : 'text-foreground'
                }`}>
                  {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Savings Goals */}
      <Card className="banking-card">
        <CardHeader>
          <CardTitle>Savings Goals</CardTitle>
          <CardDescription>Track your progress towards financial goals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savingsGoals.map((goal) => (
              <div key={goal.id} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{goal.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    {formatCurrency(goal.current)} / {formatCurrency(goal.target)}
                  </span>
                </div>
                <Progress 
                  value={getProgressPercentage(goal.current, goal.target)} 
                  className="h-2"
                />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {getProgressPercentage(goal.current, goal.target).toFixed(1)}% complete
                  </span>
                  <span className="text-muted-foreground">
                    {formatCurrency(goal.target - goal.current)} remaining
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}