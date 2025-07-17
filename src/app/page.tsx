'use client';

import { useState, useEffect } from 'react';
import { mockEvents, Event } from '@/lib/mockEvents';
import EventCard from '@/components/EventCard';
import FilterBar, { FilterOptions } from '@/components/FilterBar';

export default function Dashboard() {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (filters: FilterOptions) => {
    try {
      let filtered = [...events];

      // Filter by search term
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(event =>
          event.eventName.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower) ||
          event.college.toLowerCase().includes(searchLower)
        );
      }

      // Filter by event type
      if (filters.eventType && filters.eventType !== 'all') {
        filtered = filtered.filter(event => event.eventType === filters.eventType);
      }

      // Filter by college
      if (filters.college && filters.college !== 'All Colleges') {
        filtered = filtered.filter(event => event.college === filters.college);
      }

      // Filter by location
      if (filters.location) {
        const locationLower = filters.location.toLowerCase();
        filtered = filtered.filter(event =>
          event.location.toLowerCase().includes(locationLower)
        );
      }

      // Filter by date range
      if (filters.dateFrom) {
        filtered = filtered.filter(event => event.eventDate >= filters.dateFrom);
      }

      if (filters.dateTo) {
        filtered = filtered.filter(event => event.eventDate <= filters.dateTo);
      }

      // Sort by date (upcoming events first)
      filtered.sort((a, b) => new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime());

      setFilteredEvents(filtered);
    } catch (error) {
      console.error('Error filtering events:', error);
      setFilteredEvents(events);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            College Event Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Loading upcoming events...
          </p>
        </div>
        
        {/* Loading skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 animate-pulse">
              <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-muted rounded w-1/2 mb-4"></div>
              <div className="h-3 bg-muted rounded w-full mb-2"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          College Event Dashboard
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover upcoming tech talks, hackathons, and workshops from top colleges nationwide. 
          Filter by your interests and never miss an opportunity to learn and grow.
        </p>
      </div>

      {/* Filter Bar */}
      <FilterBar onFilterChange={handleFilterChange} />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-2">
            {filteredEvents.length}
          </div>
          <div className="text-muted-foreground">
            {filteredEvents.length === 1 ? 'Event Found' : 'Events Found'}
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-2">
            {filteredEvents.filter(e => e.eventType === 'hackathon').length}
          </div>
          <div className="text-muted-foreground">Hackathons</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-foreground mb-2">
            {filteredEvents.filter(e => e.eventType === 'workshop').length}
          </div>
          <div className="text-muted-foreground">Workshops</div>
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            No Events Found
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Try adjusting your filters or search terms to find events that match your interests.
          </p>
        </div>
      )}
    </div>
  );
}
