"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle } from "lucide-react";

const deployments = [
  {
    id: 1,
    service: "Frontend App",
    status: "success",
    time: "2 minutes ago",
    commit: "feat: add new dashboard",
  },
  {
    id: 2,
    service: "API Service",
    status: "failed",
    time: "15 minutes ago",
    commit: "fix: auth middleware",
  },
  {
    id: 3,
    service: "Database Migration",
    status: "success",
    time: "1 hour ago",
    commit: "chore: update schema",
  },
];

export default function DeploymentStatus() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Recent Deployments</h3>
      <div className="space-y-4">
        {deployments.map((deployment) => (
          <div
            key={deployment.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              {deployment.status === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
              <div>
                <div className="font-medium">{deployment.service}</div>
                <div className="text-sm text-muted-foreground">
                  {deployment.commit}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={deployment.status === "success" ? "default" : "destructive"}>
                {deployment.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {deployment.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}