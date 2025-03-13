import './App.css'
// import ReferralScreen from './component/ReferralScreen'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import "./index.css";
import Learn from "./pages/Learn.tsx";
// import ReferralScreen from './component/ReferralScreen.tsx';
function App() {
  return (
      
       <div>
       <BrowserRouter>
         <Routes>
           <Route element={<Home />} path="/" />
           <Route element={<Learn />} path="/learn" />
         </Routes>
         {/* <ReferralScreen/> */}

       </BrowserRouter>
     </div>
  )
}
export default App
