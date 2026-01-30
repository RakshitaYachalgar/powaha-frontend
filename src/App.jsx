import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/auth/Login";
import Home from "./pages/Home";
/* import RegisterStep1 from "./pages/auth/RegisterStep1"
import RegisterStep2 from "./pages/auth/RegisterStep2" */
import Contact from "./pages/Contact";
/*import ChurchOnboarding from "./pages/ChurchOnboarding";*/
/* import ChurchRegistration from "./pages/auth/ChurchRegister"
import RegisterRole from "./pages/auth/RegisterRole"
import PendingApproval from "./pages/PendingApproval"; */




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
