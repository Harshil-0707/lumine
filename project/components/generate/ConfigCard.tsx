"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ConfigItem {
  name: string;
  path: string;
  icon?: LucideIcon;
}

interface ConfigCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  items: ConfigItem[];
}

export function ConfigCard({
  title,
  description,
  icon: Icon,
  items,
}: ConfigCardProps) {
  return (
    <Card className="p-6 w-[25rem] h-[17rem] flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <Icon className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
      </div>
      <div className="">
        {items.map((item) => (
          <Link key={item.path} href={item.path}>
            <Button variant="outline" className="w-full my-1 ">
              {item.icon && <item.icon className="h-4 w-4 mr-2" />}
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </Card>
  );
}
