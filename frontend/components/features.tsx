import { Container } from '@/components/ui/container';
import { Box, Container as ContainerIcon, GitFork, Monitor } from 'lucide-react';

const features = [
  {
    title: 'Docker Integration',
    description: 'Automatic containerization of your application with optimized Docker configurations.',
    icon: Box,
  },
  {
    title: 'Kubernetes Deployment',
    description: 'Seamless deployment to Kubernetes clusters with auto-scaling capabilities.',
    icon: ContainerIcon,
  },
  {
    title: 'Git Integration',
    description: 'Automatic version control setup and integration with popular Git platforms.',
    icon: GitFork,
  },
  {
    title: 'Monitoring & Analytics',
    description: 'Built-in monitoring solutions with detailed metrics and performance analytics.',
    icon: Monitor,
  },
];

export default function Features() {
  return (
    <Container className="py-24">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
          >
            <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}