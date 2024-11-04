import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownRight, HelpCircle } from 'lucide-react';
import {
  Tooltip as UITooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const marketData = [
  { name: '9:30', value: 34000 },
  { name: '10:30', value: 34200 },
  { name: '11:30', value: 34400 },
  { name: '12:30', value: 34300 },
  { name: '13:30', value: 34600 },
  { name: '14:30', value: 34800 },
  { name: '15:30', value: 34700 },
];

const topPerformers = [
  { name: 'Vanguard 500', change: 2.4, value: '$394.21' },
  { name: 'Fidelity Blue Chip', change: 1.8, value: '$128.65' },
  { name: 'T.Rowe Price Growth', change: 1.6, value: '$245.90' },
];

export default function MarketOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Market Overview</CardTitle>
          <CardDescription>S&P 500 Index Fund Performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marketData}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  fill="url(#colorPv)"
                  fillOpacity={0.2}
                />
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-3">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Top Performers</CardTitle>
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Funds with the highest daily gains</p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPerformers.map((fund) => (
              <div
                key={fund.name}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{fund.name}</p>
                  <p className="text-sm text-muted-foreground">{fund.value}</p>
                </div>
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 px-2 font-medium"
                >
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                  {fund.change}%
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}