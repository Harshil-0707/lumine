"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "AWS", cost: 2400 },
  { name: "GCP", cost: 1398 },
  { name: "Azure", cost: 9800 },
  { name: "Others", cost: 3908 },
];

export default function CostOverview() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Cost Distribution</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="cost" fill="hsl(var(--primary))" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}