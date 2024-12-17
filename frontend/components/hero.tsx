import { Boxes } from '@/components/ui/background-boxes';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[40vh] overflow-hidden bg-background">
      <Boxes />
      <Container className="relative z-10 h-full">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="inline-flex items-center rounded-2xl bg-muted px-3 py-1 text-sm font-semibold">
            <Rocket className="mr-2 h-4 w-4" />
            Revolutionizing Development Workflow
          </div>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
            Deploy Your Code with
            <span className="text-primary"> Lumine</span>
          </h1>
          <p className="mt-4 max-w-prose text-muted-foreground">
            Drop your code folder and let Lumine handle everything - from Docker containers to
            Kubernetes deployments and monitoring. One solution for all your deployment needs.
          </p>
        </div>
      </Container>
    </div>
  );
}