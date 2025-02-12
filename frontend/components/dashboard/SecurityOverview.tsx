"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

const securityItems = [
  {
    name: "Infrastructure Security",
    score: 98,
    status: "success",
  },
  {
    name: "Access Control",
    score: 85,
    status: "warning",
  },
  {
    name: "Data Encryption",
    score: 100,
    status: "success",
  },
];

export default function SecurityOverview() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Security Status</h3>
      <div className="space-y-6">
        {securityItems.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {item.status === "success" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                )}
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="text-sm font-medium">{item.score}%</span>
            </div>
            <Progress value={item.score} />
          </div>
        ))}
      </div>
    </Card>
  );
}