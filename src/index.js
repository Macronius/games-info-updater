import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//REDUX SETUP
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux' //Provider connects the react app to redux and provides react application with access to the redux store
import thunk from 'redux-thunk'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();