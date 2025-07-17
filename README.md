# College Event Aggregator Platform

A modern, sleek web application for discovering and sharing college tech events including hackathons, tech talks, and workshops from top universities nationwide.

## 🚀 Features

### Core Functionality
- **Event Dashboard**: View all upcoming tech events in a clean, card-based layout
- **Advanced Filtering**: Filter events by type, date, college, location, and search terms
- **Event Submission**: Submit new events through a comprehensive form with validation
- **Event Details**: Detailed view for each event with full information and related events
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### Event Types Supported
- **Hackathons**: 24-48 hour coding competitions and innovation challenges
- **Tech Talks**: Industry expert presentations and thought leadership sessions
- **Workshops**: Hands-on learning experiences and skill-building sessions

### Filtering Capabilities
- **Search**: Search by event name, description, or college
- **Event Type**: Filter by hackathon, tech-talk, or workshop
- **College**: Filter by specific universities
- **Location**: Search by city or state
- **Date Range**: Filter events within specific date ranges
- **Clear Filters**: One-click reset of all filters

## 🛠️ Technology Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: shadcn/ui component library
- **Forms**: React Hook Form with Zod validation
- **Icons**: Built-in lucide-react icons
- **State Management**: React hooks and local state
- **Mock Data**: Comprehensive mock dataset simulating real college events

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Dashboard page
│   ├── submit/
│   │   └── page.tsx        # Event submission form
│   └── event/
│       └── [id]/
│           └── page.tsx    # Event detail page
├── components/
│   ├── EventCard.tsx       # Event display card
│   ├── FilterBar.tsx       # Filtering interface
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── mockEvents.ts       # Mock event data
│   └── utils.ts            # Utility functions
```

## 🎯 Key Features in Detail

### Dashboard Page (`/`)
- **Modern UI**: Clean, professional design with proper spacing and typography
- **Loading States**: Skeleton loaders for better user experience
- **Statistics**: Real-time count of events, hackathons, and workshops
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Empty States**: Helpful messages when no events match filters

### Event Submission (`/submit`)
- **Form Validation**: Comprehensive validation using Zod schemas
- **User Experience**: Clear error messages and success feedback
- **Loading States**: Submit button states and loading indicators
- **Guidelines**: Submission guidelines and best practices
- **Error Handling**: Graceful error handling with user-friendly messages

### Event Details (`/event/[id]`)
- **Dynamic Routing**: Clean URLs for each event
- **Related Events**: Shows similar events from same type/college
- **Call-to-Actions**: Clear registration and navigation buttons
- **Responsive Layout**: Optimized for all device sizes
- **Status Indicators**: Shows if event is upcoming or past

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:8000](http://localhost:8000) in your browser

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design Philosophy

- **Clean & Modern**: Minimalist design with focus on content
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions
- **Mobile-First**: Responsive design starting from mobile devices
- **User-Centric**: Intuitive navigation and clear information hierarchy

## 📊 Mock Data

The platform includes comprehensive mock data featuring:
- **12 Realistic Events**: From top universities like MIT, Stanford, Berkeley, etc.
- **3 Event Types**: Hackathons, tech talks, and workshops
- **Geographic Diversity**: Events from across the United States
- **Date Range**: Events spanning several months
- **Detailed Information**: Full descriptions, links, and metadata

## 🔮 Future Enhancements

- **Real API Integration**: Connect to actual college event APIs
- **User Authentication**: Allow users to save favorite events
- **Email Notifications**: Alert users about new events
- **Calendar Integration**: Export events to Google Calendar
- **Social Sharing**: Share events on social media
- **Advanced Analytics**: Track event popularity and engagement
- **Admin Dashboard**: Manage submitted events
- **Real-time Updates**: Live event status updates

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for the college tech community
