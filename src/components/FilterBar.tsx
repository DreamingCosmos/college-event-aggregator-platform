'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { eventTypes, colleges } from '@/lib/mockEvents';

export interface FilterOptions {
  eventType: string;
  college: string;
  location: string;
  dateFrom: string;
  dateTo: string;
  searchTerm: string;
}

interface FilterBarProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    eventType: 'all',
    college: 'All Colleges',
    location: '',
    dateFrom: '',
    dateTo: '',
    searchTerm: ''
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters: FilterOptions = {
      eventType: 'all',
      college: 'All Colleges',
      location: '',
      dateFrom: '',
      dateTo: '',
      searchTerm: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <Card className="mb-8">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {/* Search Term */}
          <div className="xl:col-span-2">
            <Label htmlFor="search" className="text-sm font-medium">
              Search Events
            </Label>
            <Input
              id="search"
              type="text"
              placeholder="Search by name or description..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              className="mt-1"
            />
          </div>

          {/* Event Type */}
          <div>
            <Label htmlFor="eventType" className="text-sm font-medium">
              Event Type
            </Label>
            <Select
              value={filters.eventType}
              onValueChange={(value) => handleFilterChange('eventType', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* College */}
          <div>
            <Label htmlFor="college" className="text-sm font-medium">
              College
            </Label>
            <Select
              value={filters.college}
              onValueChange={(value) => handleFilterChange('college', value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select college" />
              </SelectTrigger>
              <SelectContent>
                {colleges.map((college) => (
                  <SelectItem key={college} value={college}>
                    {college}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location" className="text-sm font-medium">
              Location
            </Label>
            <Input
              id="location"
              type="text"
              placeholder="City, State"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="mt-1"
            />
          </div>

          {/* Date Range */}
          <div className="xl:col-span-1">
            <Label htmlFor="dateFrom" className="text-sm font-medium">
              Date From
            </Label>
            <Input
              id="dateFrom"
              type="date"
              value={filters.dateFrom}
              onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-4">
          <div>
            <Label htmlFor="dateTo" className="text-sm font-medium">
              Date To
            </Label>
            <Input
              id="dateTo"
              type="date"
              value={filters.dateTo}
              onChange={(e) => handleFilterChange('dateTo', e.target.value)}
              className="mt-1"
            />
          </div>

          {/* Clear Filters Button */}
          <div className="flex items-end">
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="w-full"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
