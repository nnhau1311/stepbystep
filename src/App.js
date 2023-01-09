import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./contact/ContactUs";
import Home from "./home/Home";
import PrivacyPolicy from "./privacy/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stepbystep" element={<Home />} />
        <Route path="/stepbystep/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/stepbystep/ContactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
