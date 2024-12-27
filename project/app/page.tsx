"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pricing } from "@/components/marketing/Pricing";
import { Features } from "@/components/marketing/Features";
import { Testimonials } from "@/components/marketing/Testimonials";

export default function LandingPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white py-4">
        <div className="mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold">Lumine</span>
          </div>
          <div className="max-md:flex">
            <div
              className={`hidden md:flex items-center space-x-6 max-md:${
                isOpen
                  ? "block right-0 z-20 flex-col fixed top-0 pt-20 w-[17rem] pl-6 !items-baseline bg-white h-full"
                  : "hidden"
              } `}
            >
              <Link href="/docs">
                <Button variant="ghost" className="text-sm">
                  Documentation
                </Button>
              </Link>
              <Link href="/generate">
                <Button variant="ghost" className="text-sm max-md:block">
                  Generate
                </Button>
              </Link>
              <Link href="/login" className="max-md:!ml-0">
                <Button variant="ghost" className="text-sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="text-sm max-md:block max-md:ml-3 max-md:w-[78%]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <Menu
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`${
              isOpen ? "hidden" : "block"
            } md:hidden z-30 absolute right-[25px]`}
          />
          <X
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={`${
              isOpen ? "block" : "hidden"
            } z-30 absolute right-[25px]`}
          />
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-[10px]"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </nav>
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            DevOps Automation Made Simple
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Configure your entire infrastructure with just a few clicks. No
            DevOps expertise required.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup">
              <Button size="lg" className="px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      <Features />
      <Testimonials />
      <Pricing />

      <footer className="border-t py-12">
        <div className="container px-4 mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>Features</li>
                <li>Pricing</li>
                <li>Documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Community</li>
                <li>Support</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
