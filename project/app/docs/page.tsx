"use client";

import { useState } from "react";
import Link from "next/link"; // Import Link for navigation
import { Zap, X, Menu } from "lucide-react"; // Assuming you have this imported for the icon
import { Button } from "@/components/ui/button"; // Adjust if needed for your button component

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Key Features" },
  { id: "getting-started", label: "Getting Started" },
  { id: "configuration", label: "Configuration Management" },
  { id: "faqs", label: "FAQs" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "support", label: "Contact Support" },
];

const DocumentationPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            <h2 className="text-4xl font-semibold mb-4">Overview</h2>
            <p className="text-lg leading-relaxed">
              Welcome to the <strong>DevOps-as-a-Service Platform</strong>! This
              web-based platform simplifies infrastructure provisioning, CI/CD
              pipeline setup, and cloud cost estimation for startups and small
              teams.
            </p>
          </div>
        );
      case "features":
        return (
          <div>
            <h2 className="text-4xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc ml-6 text-lg leading-relaxed">
              <li>
                <strong>Infrastructure Automation:</strong> Automatically
                provision cloud resources using Terraform.
              </li>
              <li>
                <strong>CI/CD Pipeline Setup:</strong> Create CI/CD workflows
                using GitHub Actions.
              </li>
              <li>
                <strong>Cost Estimation Dashboard:</strong> Get real-time cost
                estimates for your infrastructure.
              </li>
              <li>
                <strong>Monitoring:</strong> Configure Prometheus and Grafana
                for metrics monitoring.
              </li>
            </ul>
          </div>
        );
      // Add other cases...
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="border-b bg-white py-4">
        <div className="mx-auto flex h-16 items-center md:justify-between justify-center px-6">
          {logo("text-2xl")}
          <div className="max-md:flex">
            <div
              className={`hidden md:flex items-center space-x-6 max-md:${
                isOpen
                  ? "block right-0 z-20 flex-col fixed top-0 pt-20 w-[17rem] pl-6 !items-baseline bg-white h-full transition-all duration-700"
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
      {/* Documentation Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Menu
          className="md:hidden absolute left-7 z-30 top-9"
          onClick={() => setShow(!show)}
        />
        <X
          onClick={() => {
            setShow(!show);
          }}
          className={`${
            show ? "block" : "hidden"
          } z-50 absolute top-7 left-[16rem] max-[305px]:left-[86%]`}
        />
        <aside
          className={`w-[19rem] bg-white p-6 hidden md:block shadow-md border-r border-gray-200 ${
            show
              ? "max-md:block max-md:absolute max-md:z-30 max-md:top-0 max-md:h-full max-md:pt-[5.3rem] max-[305px]:w-full"
              : "hidden"
          }`}
        >
          <div className="absolute z-20 top-[1.7rem]">
            {show && logo("text-lg")}
          </div>
          <hr className="md:hidden absolute top-[4.5rem] left-0 h-2 w-full" />
          <h2 className="text-2xl max-md:text-[1.7rem] font-bold text-wrap mb-6 text-gray-800">
            Documentation
          </h2>
          <ul className="space-y-4">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`block w-full text-left text-lg max-md:text-sm px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-600 font-semibold shadow-sm"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        {show && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[10px]"
            onClick={() => setShow(false)}
          ></div>
        )}
        {/* Content Area */}
        <main className="w-[100%] p-8 bg-gray-50 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

function logo(font: string) {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <Zap className="h-6 w-6 text-primary" />
      <span className={`${font} font-bold`}>Lumine</span>
    </Link>
  );
}

export default DocumentationPage;
