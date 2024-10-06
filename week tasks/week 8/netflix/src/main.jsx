import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import {  originals,action,documenteries,HorrorMovie } from './urls.js'
import Navbar from './components/Navbar/Navbar.jsx'
import Banner from './components/Banner/Banner.jsx'
import RowPost from './components/RowPost/RowPost.jsx'
import Footer from './components/Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Banner/>
    <RowPost url = {originals}  title ='Netflix Original'/>
    <RowPost url = {action} title ='Action' isSmall/>
    <RowPost url = {documenteries} title ='documenteries' isSmall/>
    <RowPost url = {HorrorMovie} title ='Horror Movie' isSmall/>
    <Footer/>
  </StrictMode>,
)
