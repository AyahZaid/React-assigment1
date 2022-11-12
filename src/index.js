import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Portfolio from './Portfolio';
import Header from './Header';
import About from './About';
import Contact from './Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
let Router=createBrowserRouter([
  {path:'/', element:<App/> ,children:
  [
    {path:"/",element:<Header/>},
    {path:"Portfolio",element:<Portfolio/>},
    {path:"About",element:<About/>},
    {path:"Contact",element:<Contact/>},
   
  ]
}
])
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
