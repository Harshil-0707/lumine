"use client";

import { ConfigForm } from "@/components/generate/ConfigForm";
import { useState } from "react";

export default function JenkinsPage() {
  const fields = [
    {
      name: "pipelineName",
      label: "Pipeline Name",
      type: "text" as const,
      value: "DefaultPipeline", // Fixed "Value" -> "value"
    },
    {
      name: "branchName",
      label: "Branch Name",
      type: "text" as const,
      value: "main",
    },
    {
      name: "buildCommand",
      label: "Build Command",
      type: "text" as const,
      value: "go build",
    },
    {
      name: "testCommand",
      label: "Test Command",
      type: "text" as const,
      value: "go test ./...",
    },
    {
      name: "agentLabel",
      label: "Agent Label",
      type: "text" as const,
      value: "linux",
    },
  ];

  const [responseMessage, setResponseMessage] = useState(""); // Stores success response
  const [errorMessage, setErrorMessage] = useState(""); // Stores error messages

  const handleSubmit = async (data: Record<string, string>) => {
    // Reset messages before submitting
    setResponseMessage("");
    setErrorMessage("");

    try {
      // Send data to the backend
      const response = await fetch(
        "http://localhost:8080/api/generate-jenkinsfile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      // Check if the response is successful
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      // Parse and display the Jenkinsfile
      const jenkinsfile = await response.text();
      setResponseMessage(jenkinsfile); // Set success message
    } catch (error: unknown) {
      // Handle errors (network or server-side)
      if (error instanceof Error) {
        setErrorMessage(error.message || "An unexpected error occurred");
      } else {
        setErrorMessage("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="px-4 py-6 flex justify-center items-center h-[100dvh]">
      <ConfigForm
        title="Jenkins Configuration"
        description="Configure Jenkins job settings"
        fields={fields}
        onSubmit={handleSubmit}
      />
      {responseMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          <h3 className="font-bold">Jenkinsfile Generated:</h3>
          {/* <pre>{responseMessage}</pre> */}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
          <h3 className="font-bold">Error:</h3>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
