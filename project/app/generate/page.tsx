"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import { ArrowLeft, Github, Cloud, Monitor, Settings } from "lucide-react";
import { ConfigCard } from "@/components/generate/ConfigCard";

export default function GenerateConfigsPage() {
  const router = useRouter(); // Initialize useRouter

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Section: Config Cards */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Title with Back Button */}
          <div className="flex items-center mb-6">
            <ArrowLeft
              onClick={() => router.back()}
              className="h-6 w-6 cursor-pointer text-primary hover:text-primary-dark mr-4"
            />
            <h1 className="text-4xl font-bold tracking-tight">
              Generate Configs at One Click
            </h1>
          </div>

          <p className="text-lg text-muted-foreground mb-8">
            Choose a service to generate configuration files
          </p>

          <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-2">
            {/* CI/CD Config Card */}
            <ConfigCardWrapper>
              <ConfigCard
                title="CI/CD"
                description="Configure your continuous integration and deployment pipelines"
                icon={Settings}
                items={[
                  {
                    name: "GitHub Actions",
                    path: "/generate/github-actions",
                    icon: Github,
                  },
                  { name: "Jenkins", path: "/generate/Jenkins", icon: Github },
                ]}
              />
            </ConfigCardWrapper>

            {/* Cloud Provider Config Card */}
            <ConfigCardWrapper>
              <ConfigCard
                title="Cloud Provider"
                description="Set up your cloud infrastructure and services"
                icon={Cloud}
                items={[
                  { name: "AWS", path: "/generate/aws" },
                  { name: "Azure", path: "/generate/azure" },
                  { name: "GCP", path: "/generate/gcp" },
                ]}
              />
            </ConfigCardWrapper>

            {/* Monitoring Config Card */}
            <ConfigCardWrapper>
              <ConfigCard
                title="Monitoring"
                description="Configure monitoring and observability tools"
                icon={Monitor}
                items={[
                  { name: "Prometheus", path: "/generate/prometheus" },
                  { name: "Grafana", path: "/generate/grafana" },
                ]}
              />
            </ConfigCardWrapper>

            {/* Docker Config Card */}
            <ConfigCardWrapper>
              <ConfigCard
                title="Docker"
                description="Generate Docker and container orchestration configs"
                icon={Github}
                items={[
                  { name: "Dockerfile", path: "/generate/dockerfile" },
                  { name: "Docker Compose", path: "/generate/docker-compose" },
                ]}
              />
            </ConfigCardWrapper>
          </div>
        </div>
      </div>

      {/* Right Section: Upload Button */}
      <div className="flex-1 flex items-center justify-center bg-secondary p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Upload Files</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Upload your files for further processing and deployment
          </p>
          <button
            onClick={() => router.push("/upload")}
            className="px-6 py-3 bg-primary text-white rounded-md shadow-lg hover:bg-primary-dark"
          >
            Go to Upload Page
          </button>
        </div>
      </div>
    </div>
  );
}

// Wrapper for consistent size of Config Cards
function ConfigCardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[30rem] h-80 flex items-center justify-center mx-auto">
      {children}
    </div>
  );
}
