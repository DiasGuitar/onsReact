import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./assets/plugins/owl-carousel/dist/assets/owl.carousel.min.css";
import "./assets/plugins/owl-carousel/dist/assets/owl.theme.default.min.css";
import "./assets/css/style.css";
import "./assets/css/normalize.css"
import "./assets/css/responsive.css"
import "./assets/css/bootstrap.min.css"
import "./assets/fonts/flaticon/flaticon.css"
import "./assets/plugins/fancybox-master/dist/jquery.fancybox.min.css"
import "./assets/fonts/fontawesome/css/all.min.css"

import '@css/bootstrap.min.css';
import '@css/normalize.css';
import '@css/responsive.css';
import '@css/style.css';
import '@plugins/owl-carousel/dist/assets/owl.carousel.min.css';
import '@plugins/owl-carousel/dist/assets/owl.theme.default.min.css';
import '@plugins/fancybox-master/dist/jquery.fancybox.min.css';
import '@assets/fonts/flaticon/flaticon.css';
import '@assets/fonts/fontawesome/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
