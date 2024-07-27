import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainApp from './MainApp';
import FlashcardSidebar from './Flashcardsidebar';


import './index.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { Provider } from 'react-redux'
import store from './redux/store'

export const GlobalContext = createContext();

const navSideBar = ReactDOM.createRoot(document.getElementById('react-sidebar-1'));
navSideBar.render(
  <React.StrictMode>
    <FlashcardSidebar/>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

