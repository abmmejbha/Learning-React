// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserDetails from './pages/UserDetails';
import UserList from './pages/UserList';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar সব page-এ দেখাবে — Routes-এর বাইরে আছে */}
      <Navbar />

      {/* Routes-এর ভেতরে শুধু সেই component দেখাবে যার path match করে */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="users" element={<UserList />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;