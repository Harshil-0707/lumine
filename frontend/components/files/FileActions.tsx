'use client';

interface FileActionsProps {
  onDeploy: () => void;
  onGenerateZip: () => void;
}

export function FileActions({ onDeploy, onGenerateZip }: FileActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      <button
        onClick={onDeploy}
        className="py-4 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
      >
        Deploy on AWS
      </button>
      <button
        onClick={onGenerateZip}
        className="py-4 px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg font-medium"
      >
        Generate Zip File
      </button>
    </div>
  );
}