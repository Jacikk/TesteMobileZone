import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {Header} from './components/header'
import './index.css'
import { LandingPage } from './pages/Landing';
import { BannerDinamico } from './pages/Landing/banner';
import { Footer } from './components/footer'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <Header />
      <BannerDinamico />
      <LandingPage />
      <Footer />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);