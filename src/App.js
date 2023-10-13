import './App.css';
import React from 'react';
import Product from './Product'

function App() {
  return (
    <div>
    <Product name="Apple Watch" price = {399} rating = "4.7/5.0" image = "https://ss7.vzw.com/is/image/VerizonWireless/apple-watch-series-9-gps-cellular-41mm-pink-aluminum-case-light-pink-sport-band-mrhy3ll-a-a?wid=465&hei=465&fmt=webp"/>
    <Product name="Samsung Watch" price = {200} rating = "4.7/5.0" image = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6510/6510882_sd.jpg"/>
    <Product name="Xiaomi Watch" price = {100} rating = "4.4/5.0" image = "https://m.media-amazon.com/images/I/61Nm7nXsQbL._AC_UF894,1000_QL80_.jpg"/>
    <Product name="Huawei Watch" price = {100} rating = "4.4/5.0" image = "https://m.media-amazon.com/images/I/61G-lDqEZ6L._AC_UF894,1000_QL80_.jpg"/>
    </div>
  )
}

export default App;
