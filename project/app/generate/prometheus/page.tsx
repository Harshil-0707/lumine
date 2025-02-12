"use client";

import { ConfigForm } from "@/components/generate/ConfigForm";

export default function PrometheusPage() {
  const fields = [
    {
      name: "scrapeInterval",
      label: "Scrape Interval",
      type: "text" as const,
      placeholder: "15s",
      required: false,
    },
    {
      name: "evaluationInterval",
      label: "Evaluation Interval",
      type: "text" as const,
      placeholder: "15s",
      required: false,
    },
    {
      name: "targets",
      label: "Monitoring Targets",
      type: "textarea" as const,
      placeholder: "localhost:9100\nlocalhost:8080",
      required: false,
    },
    {
      name: "retention",
      label: "Data Retention",
      type: "select" as const,
      options: [
        { value: "15d", label: "15 days" },
        { value: "30d", label: "30 days" },
        { value: "60d", label: "60 days" },
      ],
      required: false,
    },
  ];

  const handleSubmit = () => {};
  // const handleSubmit = async (data: Record<string, string>) => {
  //   console.log("Prometheus config:", data);

  //   try {
  //     const response = await fetch("/api/prometheus", {
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
        title="Prometheus Configuration"
        description="Generate a Prometheus configuration file for monitoring"
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
