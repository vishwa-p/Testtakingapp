import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Index from "./components/Index";
import Index2 from "./components/Index2";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Dashboard />} />
     
      <Route path="/index" element={<Index />} />
      <Route path="/index2" element={<Index2 />} />
    </Routes>
  
  </BrowserRouter>
    </div>
  );
}

export default App;
