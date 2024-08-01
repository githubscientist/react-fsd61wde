import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const items = [
  { id: 1, product: "Mobile", price: 10000 },
  { id: 2, product: "Laptop", price: 50000 },
  { id: 3, product: "Tablet", price: 15000 },
  { id: 4, product: "Smartwatch", price: 5000 },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <App 
    items={items}
  />
)
