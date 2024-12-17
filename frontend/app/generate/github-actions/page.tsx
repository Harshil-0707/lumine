"use client";

import { useState } from "react";
import { ConfigForm } from "@/components/generate/ConfigForm";

export default function GitHubActionsPage() {
  const fields = [
    {
      name: "workflowName",
      label: "Workflow Name",
      type: "text" as const,
      Value: "CI/CD Workflow",
    },
    {
      name: "triggerEvents",
      label: "Trigger Events",
      type: "text" as const,
      Value: "push, pull_request",
    },
    {
      name: "goVersion",
      label: "Go Version",
      type: "text" as const,
      Value: "1.18",
    },
    {
      name: "buildCommand",
      label: "Build Command",
      type: "text" as const,
      Value: "go build -v",
    },
    {
      name: "testCommand",
      label: "Test Command",
      type: "text" as const,
      Value: "go test -v",
    },
  ];

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (data: Record<string, string>) => {
    setResponseMessage(""); // Clear any previous success message
    setErrorMessage(""); // Clear any previous error message
  
    try {
      const response = await fetch("http://localhost:8080/api/generate-github-actions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Create a Blob from the response
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
  
        // Create an anchor element and trigger the download
        const a = document.createElement("a");
        a.href = url;
        a.download = "ci.yml"; // Force the .yml extension
        document.body.appendChild(a);
        a.click();
        a.remove();
  
        setResponseMessage("GitHub Actions YAML generated and downloaded successfully!");
      } else {
        const errorResult = await response.json();
        setErrorMessage(
          errorResult.message || "Failed to generate GitHub Actions workflow"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "An unexpected error occurred while generating the GitHub Actions workflow."
      );
    }
  };
  

  return (
    <div className="container px-4 py-6">
      <ConfigForm
        title="GitHub Actions Configuration"
        description="Configure GitHub Actions workflow settings"
        fields={fields}
        onSubmit={handleSubmit}
      />
      {responseMessage && (
        <div className="mt-4 text-green-600">{responseMessage}</div>
      )}
      {errorMessage && (
        <div className="mt-4 text-red-600">{errorMessage}</div>
      )}
    </div>
  );
}
