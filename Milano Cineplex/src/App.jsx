import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heading from './components/Home/Header/Heading';
import Body from './components/Home/Body/Body';
import LoginSignup from './components/Login/LoginSignup';
import Signup from './components/Login/Signup'; 
import AdminPanel from './components/AdminPanel/AdminPanel';
import TicketPage from './components/Tickets/TicketPage'; 
import MoviesPage from './components/Movies/MoviesPage';
import ContactUsPage from './components/ContactUS/ContactUsPage';

function App() {
  return (
    <Router>
      <Heading />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/admin" element={<AdminPanel />} /> 
        <Route path="/buy-tickets" element={<TicketPage />} /> 
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/contact" element={<ContactUsPage/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
