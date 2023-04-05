import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { baseUrl } from 'common/config';
import axios from 'axios';
import 'react-perfect-scrollbar/dist/css/styles.css';
// import './assets/v2/scss/index.scss';
import Routes from './Routes';
import { ThemeProvider } from '@mui/material/styles';
import themes from './themes';

const browserHistory = createBrowserHistory();
axios.defaults.baseURL = baseUrl;
export default class App extends Component {
  splash(){
    return new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds
  }

  componentDidMount(){
    this.splash().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 200)
      }
    })
  }

  render() {
    return (
      <ThemeProvider theme={themes}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>

    );
  }
}
