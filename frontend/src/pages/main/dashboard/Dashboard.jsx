import {
  Box,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from '@mui/material';
import { MainLayout } from '@components/layouts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line
} from 'recharts';

const dummyGraphData = [
  { name: 'Cashiering', value: 120 },
  { name: 'Payroll', value: 90 },
  { name: 'Inventory', value: 150 },
  { name: 'E-Commerce', value: 100 },
];

const upcomingTasks = [
  { title: 'Payroll Cutoff - May 15', date: 'May 14, 2025' },
  { title: 'Stock Audit', date: 'May 16, 2025' },
  { title: 'Launch E-Commerce Offers', date: 'May 20, 2025' },
  { title: 'Monthly Report Submission', date: 'May 25, 2025' },
];

const eventData = [
  { name: 'Mon', upcoming: 5, missed: 2 },
  { name: 'Tue', upcoming: 3, missed: 1 },
  { name: 'Wed', upcoming: 6, missed: 0 },
  { name: 'Thu', upcoming: 2, missed: 4 },
  { name: 'Fri', upcoming: 4, missed: 1 },
];

const DashboardCard = ({ title, today, overall, color }) => (
  <Paper elevation={3} sx={{ p: 3, borderLeft: `6px solid ${color}`, height: '100%' }}>
    <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body2" fontWeight="medium">
      {title === 'Payroll Processed' ? 'Available' : title === 'Inventory Items' ? 'Remaining' : 'Today'} : {today}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      Overall: {overall}
    </Typography>
  </Paper>
);

export const Dashboard = () => {
  return (
    <MainLayout>
      <Box sx={{ p: 2, px: 3.5 }}>
        <Grid container spacing={2}>
          {/* System Status Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard title="Cashiering Transactions" value="124" color="#1976d2" today={143} overall={2132}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard title="Payroll Processed" value="78" color="#388e3c" today={77} overall={418}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard title="E-Commerce Orders" value="56" color="#f57c00" today={362} overall={5423}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <DashboardCard title="Inventory Items" value="243" color="#7b1fa2" today={517} overall={1220}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, borderLeft: '6px solid #05d6cd', height: '100%' }}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                Delivery Truck Status
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ color: '#555' }}>Loading: <strong>3</strong></Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>On going: <strong>2</strong></Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>Ready to Run: <strong>5</strong></Typography>
              </Box>
            </Paper>
          </Grid>
          <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
          {/* System Overview Graph */}
            <Grid item xs={12} md={6} sx={{ width: '50%' }}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  System Overview
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={dummyGraphData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#1976d2" />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Upcoming Events / Planning */}
            <Grid item xs={12} md={6} sx={{ width: '50%' }}>
              <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Upcoming Events / Planning
                </Typography>
                <List>
                  {upcomingTasks.map((task, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText
                        primary={task.title}
                        secondary={task.date}
                        primaryTypographyProps={{ fontWeight: 'bold' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Box>
          {/* Line Chart - Full Width */}
          <Grid item xs={12} sx={{ width: '100%' }}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Events Summary
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={eventData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="upcoming" stroke="#1976d2" />
                    <Line type="monotone" dataKey="missed" stroke="#d32f2f" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
};
