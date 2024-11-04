import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { ModeToggle } from './mode-toggle';
import MarketOverview from './MarketOverview';
import FundAnalysis from './FundAnalysis';
import InvestmentCalculator from './InvestmentCalculator';
import PortfolioManager from './PortfolioManager';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/hooks/use-toast';
import {
  BarChart3,
  Calculator,
  GanttChartSquare,
  LayoutDashboard,
  PieChart,
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <GanttChartSquare className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-lg font-semibold">WealthWise</h2>
          <div className="ml-auto flex items-center space-x-4">
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-4 p-4 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analysis
            </TabsTrigger>
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              Portfolio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <MarketOverview />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <FundAnalysis />
          </TabsContent>

          <TabsContent value="calculator" className="space-y-4">
            <InvestmentCalculator />
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-4">
            <PortfolioManager />
          </TabsContent>
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
}