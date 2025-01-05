import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { EventsList } from './components/EventsList';
import { BetSlip } from './components/BetSlip';
import { BetHistory } from './components/BetHistory';
import { EventFilters } from './components/EventFilters';
import { Notifications } from './components/Notifications';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { motion } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-100">
            <Notifications />
            <Header />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="container mx-auto px-4 py-8"
            >
              <EventFilters onFilterChange={filters => console.log(filters)} />
              <div className="flex gap-6">
                <Sidebar />
                <main className="flex-1">
                  <EventsList />
                </main>
                <div className="space-y-6">
                  <BetSlip />
                  <BetHistory />
                </div>
              </div>
            </motion.div>
          </div>
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}