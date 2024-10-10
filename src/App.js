// import logo from './logo.svg';
import Body from "./components/Body";
import BookaCall from "./components/BookCall";
import HomebuyerGuide from "./components/BrambleGuides";
import CashBackCalculaterComponent from "./components/CashBackCalculater";
import ContactModal from "./components/ContactModal";
import Login from "./components/Login";
import ServicesSection from "./components/ServicesSection";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/cashback" element={<CashBackCalculaterComponent/>}/>
        <Route path="/speak" element={<ContactModal/>}/>
        <Route path="/guide" element={<HomebuyerGuide/>}/>
        <Route path="/services" element={<ServicesSection/>}/>
        <Route path="/bookcall" element={<BookaCall/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;