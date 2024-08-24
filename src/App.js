import React, { useState } from 'react';
import Dashboard from './Dashboard'; // Adjust the path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      {/* <button onClick={openPopup}>Open Dashboard</button> */}

      {/* <Popup isOpen={isPopupOpen} onClose={closePopup}> */}
        <Dashboard />
      {/* </Popup> */}
    </div>
  );
};

export default App;
