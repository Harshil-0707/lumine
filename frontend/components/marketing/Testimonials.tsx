"use client";

import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Lumine has transformed how we handle our infrastructure. It's like having a DevOps team in your pocket.",
      author: "Sarah Chen",
      role: "CTO at TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      quote:
        "The automated scaling features have saved us countless hours of manual work. Highly recommended!",
      author: "Michael Rodriguez",
      role: "Lead Developer at CloudScale",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      quote:
        "Security compliance used to be a nightmare. Lumine makes it seamless and worry-free.",
      author: "Emily Thompson",
      role: "Security Engineer at SecureFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with Lumine
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6">
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <img
                    alt={testimonial.author}
                    src={testimonial.avatar}
                    className="rounded-full"
                  />
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}