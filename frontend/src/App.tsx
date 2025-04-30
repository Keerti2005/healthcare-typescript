import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';
import AppSidebar from './components/app-sidebar';
import AppSidebarNav from './components/app-sidebar-nav';
import ChatBotIcon from './components/ChatBotIcon';

import Dashboard from './pages/Dashboard';
import ChatBot from './pages/GptChatPage';
import DoctorAppointmentForm from './pages/doctor-connect';
import SymptomPrediction from './pages/symptom-checker';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import ProtectedRoute from './auth/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar collapsible="dock" />
        <SidebarInset>
          <AppSidebarNav />
          <div className="p-4 lg:p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/chatbot" element={
                <ProtectedRoute>
                  <ChatBot />
                </ProtectedRoute>
              } />
              <Route path="/doctor-connect" element={
                <ProtectedRoute>
                  <DoctorAppointmentForm />
                </ProtectedRoute>
              } />
              <Route path="/symptom-checker" element={
                <ProtectedRoute>
                  <SymptomPrediction />
                </ProtectedRoute>
              } />
            </Routes>
          </div>
          <ChatBotIcon />
        </SidebarInset>
      </SidebarProvider>
    </Router>
  );
};

export default App;
