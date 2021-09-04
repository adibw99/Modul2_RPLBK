import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CardList from './components/CardList';
import Gambar from './assets/images/unnamed_300x400.jpg';
import Quotes from './components/Quotes';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const quotes = 'Disaat payung teduh ku dengar , disitu lah tugas-tugas terbabat abis';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList name="Muhammad Adib Bowo L" nim="21120118120036" kelompok="14" i sNameBold image={Gambar} />
    <Quotes author="Orang" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
