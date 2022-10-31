import logo from './logo.svg';
import './App.css';
import  React, { useState , useEffect } from 'react'

function App() {


  var [date,setDate] = useState(new Date());
    
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 100 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });


  return (
    <>
      <head>
          <title>Rozwiązanie zadania PZC 1.1</title>
      </head>
      <body>
      {date.toISOString()}
      </body>
      </>
  );
}

export default App;
