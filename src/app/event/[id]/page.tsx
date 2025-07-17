'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { mockEvents, Event } from '@/lib/mockEvents';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function EventDetails() {
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const eventId = params.id as string;
        const foundEvent = mockEvents.find(e => e.id === eventId);
        
        if (foundEvent) {
          setEvent(foundEvent);
        } else {
          setError('Event not found');
        }
      } catch (err) {
        console.error('Error fetching event:', err);
        setError('Failed to load event details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [params.id]);

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

  const isEventUpcoming = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          {error || 'Event Not Found'}
        </h1>
        <p className="text-muted-foreground mb-8">
          The event you're looking for doesn't exist or may have been removed.
        </p>
        <Button asChild>
          <Link href="/">
            Back to Dashboard
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Dashboard
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Event Details</span>
      </nav>

      {/* Main Event Card */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Badge className={getEventTypeColor(event.eventType)}>
                  {getEventTypeLabel(event.eventType)}
                </Badge>
                {isEventUpcoming(event.eventDate) && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Upcoming
                  </Badge>
                )}
              </div>
              <CardTitle className="text-3xl mb-3">
                {event.eventName}
              </CardTitle>
              <CardDescription className="text-lg">
                {event.college}
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  Back to Events
                </Link>
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  📅 Date & Time
                </h3>
                <p className="text-muted-foreground">
                  {formatDate(event.eventDate)}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  📍 Location
                </h3>
                <p className="text-muted-foreground">
                  {event.location}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  🏫 Host Institution
                </h3>
                <p className="text-muted-foreground">
                  {event.college}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  🔗 Event Website
                </h3>
                <a 
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  {event.link}
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  📋 Event Type
                </h3>
                <p className="text-muted-foreground">
                  {getEventTypeLabel(event.eventType)}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              About This Event
            </h3>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>

          <Separator />

          {/* Call to Action */}
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to Join?
            </h3>
            <p className="text-muted-foreground mb-4">
              Don't miss out on this amazing opportunity to learn, network, and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <a 
                  href={event.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Register for Event
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/submit">
                  Submit Your Event
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Events */}
      <Card>
        <CardHeader>
          <CardTitle>More Events You Might Like</CardTitle>
          <CardDescription>
            Other {getEventTypeLabel(event.eventType).toLowerCase()}s and events from {event.college}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockEvents
              .filter(e => 
                e.id !== event.id && 
                (e.eventType === event.eventType || e.college === event.college)
              )
              .slice(0, 4)
              .map((relatedEvent) => (
                <Link 
                  key={relatedEvent.id} 
                  href={`/event/${relatedEvent.id}`}
                  className="block"
                >
                  <div className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground line-clamp-1">
                        {relatedEvent.eventName}
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={getEventTypeColor(relatedEvent.eventType)}
                      >
                        {getEventTypeLabel(relatedEvent.eventType)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {relatedEvent.college}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(relatedEvent.eventDate)}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          
          {mockEvents.filter(e => 
            e.id !== event.id && 
            (e.eventType === event.eventType || e.college === event.college)
          ).length === 0 && (
            <p className="text-muted-foreground text-center py-4">
              No related events found.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
