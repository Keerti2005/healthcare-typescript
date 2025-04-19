import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from './components/ui/sidebar';
import AppSidebar from './components/app-sidebar';
import AppSidebarNav from './components/app-sidebar-nav'; // Adjust the import path if needed
import { Heading } from "@/components/ui/heading";
import Dashboard from './pages/Dashboard'; // Adjust the path
import ChatBot from './pages/GptChatPage';
import DoctorAppointmentForm from './pages/doctor-connect'; // Correct the path
import ChatBotIcon from './components/ChatBotIcon';
import SymptomPrediction from './pages/symptom-checker'; // Adjust the path
import Home from './pages/Home';
const App = () => {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar collapsible="dock" />
        <SidebarInset>
          <AppSidebarNav />
          <div className="p-4 lg:p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chatbot" element={<ChatBot />} />
              <Route path="/doctor-connect" element={<DoctorAppointmentForm />} />
              <Route path="/symptom-checker" element={<SymptomPrediction />} />
            </Routes>
          </div>
          <ChatBotIcon />
        </SidebarInset>
      </SidebarProvider>
    </Router>
  );
}

export default App;
