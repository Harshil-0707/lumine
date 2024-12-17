import UploadZone from '@/components/upload-zone';
import Features from '@/components/features';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <UploadZone />
      <Features />
    </main>
  );
}