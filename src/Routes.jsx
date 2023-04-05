import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

const MainScreen = lazy(() => import('./views/others/MainScreen/index'))

  
export default class Routers extends Component {
  render() {
    return (
      <Suspense fallback={''} >
        <Routes>
        <Route
          component={MainScreen}
          exact
            path="/"
        />
        </Routes>
      </Suspense>
    )
  }
} 