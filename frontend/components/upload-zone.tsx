"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/router";
import Link from "next/link";
// import axios from "axios";

export default function UploadZone() {
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();


  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsUploading(true);
      setProgress(0);

      const formData = new FormData();
      acceptedFiles.forEach((file) => formData.append("file", file)); // Correct key is 'file'

      console.log("Accepted Files: ", acceptedFiles);

      try {
        const response = await fetch("http://localhost:8080/upload", { // Replace with your backend URL
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          toast({
            title: "Upload Complete",
            description: "Your project is being analyzed and configured.",
          });

          console.log("Requeest has been sent bhai");

          window.location.href = "/files"
        } else {
          throw new Error("Upload failed. Please try again.");
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Could not upload file.",
          variant: "destructive",
        });
      } finally {
        setIsUploading(false);
        setProgress(100); // Simulate completion
      }
    },
    [toast]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: isUploading,
    noKeyboard: isUploading,
    disabled: isUploading,
    accept: {},  // Allow directories to be dropped
    multiple: true,        // Allow multiple files/folders
  });

  return (
    <Container className="py-12">
      <div
        {...getRootProps()}
        className={`relative flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 p-12 text-center transition-colors ${isDragActive ? "border-primary" : "border-muted-foreground/25"
          }`}
      // whileTap={{ scale: 0.99 }}
      >
        <input {...getInputProps()} />
        {isUploading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <div className="w-64">
              <Progress value={progress} className="h-2" />
            </div>
            <p className="text-sm text-muted-foreground">
              Uploading your project...
            </p>
          </div>
        ) : (
          <>
            <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-medium">
              Drop your project folder here
            </h3>
            <p className="text-sm text-muted-foreground">
              or click to select the folder you want to deploy
            </p>
          </>
        )}
      </div>
    </Container>
  );
}
