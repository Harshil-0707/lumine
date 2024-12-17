import { DockerForm } from '@/components/DockerForm';

export default function DockerWalaForm() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Docker Hub Login</h1>
            <p className="text-gray-600 mt-2">
              Enter your Docker Hub credentials to continue
            </p>
          </div>
          <DockerForm />
        </div>
      </div>
    </div>
  );
}
