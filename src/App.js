import React from 'react';
import LandingPage from './pages/LandingPage';
import { arePropsEqual } from './utils/utils';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  window.history.replaceState({}, '', '/collections/spectacles-women');

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/collections/:collectionType'
            element={<LandingPage />}
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default React.memo(App, arePropsEqual);
