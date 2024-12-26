"use client";

import { Card } from "@/components/ui/card";

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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with
            Lumine
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              className={`p-4 sm:p-6 flex flex-col justify-between h-full ${
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <blockquote className="text-base sm:text-lg mb-4 sm:mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                  <img
                    alt={testimonial.author}
                    src={testimonial.avatar}
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">
                    {testimonial.author}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
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
