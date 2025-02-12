'use client';

import { FileData } from '@/app/types/files';
// import { FileData } from '@/types/files';
import { FileIcon } from 'lucide-react';

interface FileListProps {
  files: FileData[];
}

export function FileList({ files }: FileListProps) {
  return (
    <ul className="space-y-2">
      {files.map((file) => (
        <li
          key={file.id}
          className="p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3"
        >
          <FileIcon className="h-5 w-5 text-gray-500" />
          <span className="font-medium">{file.name}</span>
        </li>
      ))}
    </ul>
  );
}