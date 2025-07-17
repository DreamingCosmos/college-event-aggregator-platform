'use client';

import Link from 'next/link';
import { Event } from '@/lib/mockEvents';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'hackathon':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'tech-talk':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'workshop':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'tech-talk':
        return 'Tech Talk';
      case 'hackathon':
        return 'Hackathon';
      case 'workshop':
        return 'Workshop';
      default:
        return type;
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 line-clamp-2">
              {event.eventName}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              {event.college}
            </CardDescription>
          </div>
          <Badge className={getEventTypeColor(event.eventType)}>
            {getEventTypeLabel(event.eventType)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-foreground">
              {formatDate(event.eventDate)}
            </p>
            <p className="text-sm text-muted-foreground">
              {event.location}
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-3">
            {event.description}
          </p>
          
          <div className="flex gap-2 pt-2">
            <Button asChild size="sm" className="flex-1">
              <Link href={`/event/${event.id}`}>
                View Details
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
