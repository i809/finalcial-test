import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function InvestmentCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [riskLevel, setRiskLevel] = useState('moderate');
  const [years, setYears] = useState(10);

  const calculateReturns = () => {
    const riskReturns = {
      conservative: 0.06,
      moderate: 0.08,
      aggressive: 0.1,
    };

    const annualReturn = riskReturns[riskLevel as keyof typeof riskReturns];
    const monthlyReturn = annualReturn / 12;

    let balance = initialInvestment;
    const yearlyData = [];

    for (let year = 1; year <= years; year++) {
      for (let month = 1; month <= 12; month++) {
        balance = balance * (1 + monthlyReturn) + monthlyContribution;
      }
      yearlyData.push({
        year: `Year ${year}`,
        balance: Math.round(balance),
      });
    }

    return yearlyData;
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Investment Calculator</CardTitle>
          <CardDescription>
            Plan your investment strategy and see potential returns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Initial Investment</Label>
            <Input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label>Monthly Contribution</Label>
            <Input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            />
          </div>

          <div className="space-y-2">
            <Label>Investment Timeline (Years): {years}</Label>
            <Slider
              value={[years]}
              min={1}
              max={30}
              step={1}
              onValueChange={([value]) => setYears(value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Risk Level</Label>
            <Select value={riskLevel} onValueChange={setRiskLevel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="conservative">Conservative</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="aggressive">Aggressive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Projected Growth</CardTitle>
          <CardDescription>
            Estimated investment growth over {years} years
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={calculateReturns()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis
                  tickFormatter={(value) =>
                    new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                    }).format(value)
                  }
                />
                <Tooltip
                  formatter={(value) =>
                    new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                    }).format(value)
                  }
                />
                <Bar dataKey="balance" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}