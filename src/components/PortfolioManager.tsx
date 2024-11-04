import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const portfolioData = [
  { name: 'Large Cap Equity', value: 40, color: '#8884d8' },
  { name: 'Mid Cap Equity', value: 20, color: '#82ca9d' },
  { name: 'Small Cap Equity', value: 10, color: '#ffc658' },
  { name: 'International Equity', value: 15, color: '#ff8042' },
  { name: 'Bonds', value: 15, color: '#0088fe' },
];

const holdings = [
  {
    fund: 'Vanguard 500 Index Fund',
    type: 'Large Cap',
    allocation: '25%',
    value: '$125,000',
    return: '+12.5%',
  },
  {
    fund: 'Fidelity Mid Cap Index',
    type: 'Mid Cap',
    allocation: '15%',
    value: '$75,000',
    return: '+8.3%',
  },
  {
    fund: 'iShares Russell 2000',
    type: 'Small Cap',
    allocation: '10%',
    value: '$50,000',
    return: '+15.2%',
  },
  {
    fund: 'Vanguard Total Bond Market',
    type: 'Bonds',
    allocation: '15%',
    value: '$75,000',
    return: '+3.1%',
  },
];

export default function PortfolioManager() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Asset Allocation</CardTitle>
          <CardDescription>Current portfolio distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {portfolioData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
          <CardDescription>Detailed view of your investments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fund</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Allocation</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Return</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holdings.map((holding) => (
                <TableRow key={holding.fund}>
                  <TableCell className="font-medium">{holding.fund}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{holding.type}</Badge>
                  </TableCell>
                  <TableCell>{holding.allocation}</TableCell>
                  <TableCell>{holding.value}</TableCell>
                  <TableCell className="text-green-600">
                    {holding.return}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}