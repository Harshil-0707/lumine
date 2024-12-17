'use client';

import { useEffect, useState } from 'react';
import { FileData } from '@/app/types/files';
import { FileList } from '@/components/files/FileList';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function UploadFilesPage() {
  const [files, setFiles] = useState<FileData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('http://localhost:8080/files');
        if (!response.ok) throw new Error('Failed to fetch files');
        const data = await response.json();
        setFiles(data);
      } catch (error) {
        console.error('Error fetching files:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const handleDeployOnDockerHub = () => {
    console.log('Deploying on AWS...');
  };


  const downloadZip = async () => {
    try {
      console.log("Generating zip file...");
  
      // Fetch the zip file from the backend
      const response = await fetch("/files/project.zip", {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch the zip file.");
      }
  
      // Convert the response into a Blob
      const blob = await response.blob();
  
      // Create a URL for the Blob
      const url = window.URL.createObjectURL(blob);
  
      // Create a temporary anchor tag
      const link = document.createElement("a");
      link.href = url;
      link.download = "project.zip"; // Specify the file name
  
      // Append the link to the body and click it
      document.body.appendChild(link);
      link.click();
  
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
  
      console.log("Zip file downloaded.");
    } catch (error) {
      console.error("Error downloading zip file:", error);
    }
  };
  

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto flex flex-col min-h-[600px]">
        <h2 className="text-2xl font-semibold mb-6">Uploaded Files</h2>
        
        <div className="flex-grow">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <FileList files={files} />
          )}
        </div>

        {!loading && (
          <div className="grid grid-cols-2 gap-6 mt-8">
            <button
              onClick={handleDeployOnDockerHub}
              className="py-4 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
            >
              Deploy on DockerHub
            </button>
            <button
              onClick={downloadZip}
              className="py-4 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
            >
              Generate Zip File
            </button>
          </div>
        )}
      </div>
    </div>
  );
}