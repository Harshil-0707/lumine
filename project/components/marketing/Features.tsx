"use client";

import { Card } from "@/components/ui/card";
import { Cloud, Shield, BarChart, Zap, Clock, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Manage your cloud resources across multiple providers with ease",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Pre-configured security settings and compliance monitoring",
    },
    {
      icon: BarChart,
      title: "Cost Management",
      description: "Track and optimize your infrastructure costs in real-time",
    },
    {
      icon: Zap,
      title: "Automated Scaling",
      description:
        "Dynamic resource allocation based on your application needs",
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous monitoring and instant alerts for your services",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for team coordination and access management",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Everything You Need for DevOps Success
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Streamline your development workflow with our comprehensive suite of
            tools
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
