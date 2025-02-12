"use client";

import { ConfigForm } from "@/components/generate/ConfigForm";

export default function DockerComposePage() {
  const fields = [
    {
      name: "serviceName",
      label: "Service Name",
      type: "text" as const,
      placeholder: "prometheus",
      required: false,
    },
    {
      name: "image",
      label: "Image Name",
      type: "text" as const,
      placeholder: "prom/prometheus",
      required: false,
    },
    {
      name: "ports",
      label: "Port Mapping",
      type: "text" as const,
      placeholder: "9090:9090",
      required: false,
    },
    {
      name: "volumes",
      label: "Volumes",
      type: "textarea" as const,
      placeholder: "./prometheus.yml:/etc/prometheus/prometheus.yml",
      required: false,
    },
    {
      name: "environmentVariables",
      label: "Environment Variables",
      type: "textarea" as const,
      placeholder: "NODE_ENV=production\nAPI_URL=https://example.com",
      required: false,
    },
  ];

  const handleSubmit = () => {};
  // const handleSubmit = async (data: Record<string, string>) => {
  //   console.log("Docker Compose config:", data);

  //   try {
  //     const response = await fetch("/api/docker-compose", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(data),
  //     });
  //     const result = await response.json();
  //     console.log("Result:", result);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <div className="px-4 py-6 flex justify-center items-center h-[100dvh]">
      <ConfigForm
        title="Docker Compose Configuration"
        description="Generate a Docker Compose file for your services"
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
