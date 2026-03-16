
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "./MainPage.jsx";
import AuthenticationPage from "./AuthenticationPage.jsx";
import RegistrationPage from "./RegistrationPage.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/authentication" element={<AuthenticationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;