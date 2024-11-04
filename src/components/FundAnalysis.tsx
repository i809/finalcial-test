import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const performanceData = [
  {
    month: 'Jan',
    'Fund A': 4000,
    'Fund B': 2400,
    'Fund C': 2400,
  },
  {
    month: 'Feb',
    'Fund A': 3000,
    'Fund B': 1398,
    'Fund C': 2210,
  },
  {
    month: 'Mar',
    'Fund A': 2000,
    'Fund B': 9800,
    'Fund C': 2290,
  },
  {
    month: 'Apr',
    'Fund A': 2780,
    'Fund B': 3908,
    'Fund C': 2000,
  },
  {
    month: 'May',
    'Fund A': 1890,
    'Fund B': 4800,
    'Fund C': 2181,
  },
  {
    month: 'Jun',
    'Fund A': 2390,
    'Fund B': 3800,
    'Fund C': 2500,
  },
];

export default function FundAnalysis() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Fund Comparison</CardTitle>
              <CardDescription>
                Compare performance across multiple funds
              </CardDescription>
            </div>
            <Select defaultValue="6m">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m">1 Month</SelectItem>
                <SelectItem value="3m">3 Months</SelectItem>
                <SelectItem value="6m">6 Months</SelectItem>
                <SelectItem value="1y">1 Year</SelectItem>
                <SelectItem value="5y">5 Years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Fund A"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="Fund B" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Fund C" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}