import React, { useState } from "react";
// import Dashboard from './Dashboard'; // Adjust the path as needed
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    // <Container fluid style={{height:'100%'}}>
    //   <Dashboard />
    //   {/* <button onClick={openPopup}>Open Dashboard</button> */}

    //   {/* <Popup isOpen={isPopupOpen} onClose={closePopup}> */}

    //   {/* </Popup> */}
    // </Container>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
