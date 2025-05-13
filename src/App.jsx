import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Coachs1Page from "./pages/Coachs1";
import Coachs2Page from "./pages/Coachs2";
import Connexion from "./components/connexion/Connexion";
import HomePage from "./pages/Home";
import Produits1Page from "./pages/Produits1";
import Produits2Page from "./pages/Produits2";
import Salles1Page from "./pages/Salles1";
import Salles2Page from "./pages/Salles2";
import Home2Page from "./pages/Home2";
import Registration from './components/Registration/Registration' ; 
import Communaute from "./pages/communaute";
import Communaute2 from "./pages/Communaute2";
import FAQ from "./pages/FAQ";
import Commender from "./pages/Commender"; // Adjusted to match the file name
import Formulaire from "./pages/Formulaire";
import Panier from "./pages/Panier";
import Dashboard from "./pages/Dashboard";
import Proprs from "./pages/Proprs";
function App() {
  return (
    <Router>
      <div className="bg-background">
        {/* Navigation Links */}
        {/* <nav style={{
            
                'padding' : '10px 20px' ,
                color : 'white' ,
        }}>
          <ul style={{
                  'display' : 'flex' , 
                  'justify-content' : 'space-between' ,
                   'align-items' : 'center' ,
          }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/home2">Home 2</Link></li>
            <li><Link to="/produits1">Produits 1</Link></li>
            <li><Link to="/produits2">Produits 2</Link></li>
            <li><Link to="/coachs1">Coachs 1</Link></li>
            <li><Link to="/coachs2">Coachs 2</Link></li>
            <li><Link to="/salles1">Salles 1</Link></li>
            <li><Link to="/connexion">Connexion</Link></li>
            <li><Link to="/communaute">communaute</Link></li>
            <li><Link to= "/faq">FAQ</Link></li>
            <li><Link to="/commender">Commender</Link></li>
            <li><Link to ='formulaire'>Formulaire</Link></li>
          </ul>
        </nav> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home2" element={<Home2Page />} />
          <Route path="/produits1" element={<Produits1Page />} />
          <Route path="/produits2" element={<Produits2Page />} />
          <Route path="/coachs1" element={<Coachs1Page />} />
          <Route path="/coachs2" element={<Coachs2Page />} />
          <Route path="/salles1" element={<Salles1Page />} />
          <Route path="/salles2" element={<Salles2Page />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/crier-mon-compte" element={<Registration/>} />
          <Route path="/communaute" element={<Communaute />} />
          <Route path="/communaute2" element={<Communaute2 />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/commender" element={<Commender />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Proprs" element={<Proprs />} />
          {/* Add more routes as needed */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
