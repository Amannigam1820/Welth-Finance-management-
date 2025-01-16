"use client";

import React, { useMemo, useState } from "react";
import { 
  Chart3DComponent, 
  Chart3DSeriesCollectionDirective, 
  Chart3DSeriesDirective, 
  Category3D, 
  Inject, 
  Legend3D, 
  DataLabel3D, 
  Tooltip3D, 
  ColumnSeries3D, // Changed to ColumnSeries3D
  Highlight3D 
} from '@syncfusion/ej2-react-charts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { endOfDay, format, startOfDay, subDays } from "date-fns";

const DATE_RANGES = {
  "7D": { label: "Last 7 Days", days: 7 },
  "1M": { label: "Last Month", days: 30 },
  "3M": { label: "Last 3 Months", days: 90 },
  "6M": { label: "Last 6 Months", days: 180 },
  ALL: { label: "All Time", days: null },
};

const AccountChart = ({ transactions }) => {
  const [dateRange, setDateRange] = useState("1M");

  // Filter and group data
  const filteredData = useMemo(() => {
    const range = DATE_RANGES[dateRange];
    const now = new Date();
    const startDate = range.days
      ? startOfDay(subDays(now, range.days))
      : startOfDay(new Date(0));

    const filtered = transactions.filter(
      (t) => new Date(t.date) >= startDate && new Date(t.date) <= endOfDay(now)
    );

    const grouped = filtered.reduce((acc, transaction) => {
      const date = format(new Date(transaction.date), "MMM dd");

      if (!acc[date]) {
        acc[date] = { date, income: 0, expense: 0 };
      }
      if (transaction.type === "INCOME") {
        acc[date].income += transaction.amount;
      } else {
        acc[date].expense += transaction.amount;
      }
      return acc;
    }, {});

    return Object.values(grouped).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }, [transactions, dateRange]);

  const totals = useMemo(() => {
    return filteredData.reduce(
      (acc, day) => ({
        income: acc.income + day.income,
        expense: acc.expense + day.expense,
      }),
      { income: 0, expense: 0 }
    );
  }, [filteredData]);

  const tooltip = { enable: true,
    
    format: '<b>${series.name} : ${point.y}</b>' };

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
          <CardTitle className="text-base font-normal">
            Transaction Overview (3D Bar Chart)
          </CardTitle>
          <Select defaultValue={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(DATE_RANGES).map(([key, { label }]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="flex justify-around mb-6 text-sm">
            <div className="text-center">
              <p className="text-muted-foreground">Total Income</p>
              <p className="text-lg font-bold text-green-500">
                ${totals.income.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">Total Expenses</p>
              <p className="text-lg font-bold text-red-500">
                ${totals.expense.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">Net</p>
              <p
                className={`text-lg font-bold ${
                  totals.income - totals.expense >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                ${(totals.income - totals.expense).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="h-[300px]">
            <Chart3DComponent
              id="charts"
              primaryXAxis={{ valueType: 'Category' }}
              wallColor="transparent"
              enableRotation={true}
              rotation={7}
              tilt={10}
              depth={200}
              tooltip={tooltip}
            >
              <Inject
                services={[
                  ColumnSeries3D, // Using ColumnSeries3D here
                  Category3D,
                  Legend3D,
                  Tooltip3D,
                  DataLabel3D,
                  Highlight3D,
                ]}
              />
              <Chart3DSeriesCollectionDirective>
                <Chart3DSeriesDirective
                  dataSource={filteredData}
                  xName="date"
                  yName="income"
                  type="Column" // Column type for bars from bottom
                  columnSpacing={0.1}
                  name="Income"
                />
                <Chart3DSeriesDirective
                  dataSource={filteredData}
                  xName="date"
                  yName="expense"
                  type="Column" // Column type for bars from bottom
                  columnSpacing={0.1}
                  name="Expense"
                />
              </Chart3DSeriesCollectionDirective>
            </Chart3DComponent>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountChart;
