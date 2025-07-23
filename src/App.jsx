import { useState } from 'react'
import reatLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  

  return (
   <div className='dept'> 
computer science engineering<br/>
<label className='sup'> Kasaraneni Isha
  </label>
   </div>
   
  )
}

export default App
import React, { Component } from 'react';
import './Myapp.css'
class Myapp extends Component {
    render() {
        return (
            <div className='myinfo'>
                <img className='photo' src='/profile pic.png' alt='photo'/><br></br>
                <table>
                    <tr>
                        <td><label className='deot'>Name:</label></td>
            
                       <td><label>Kasaraneni Isha</label><br></br></td> 
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><label className='deot'>program:</label></td>
                       <td><label1>B.tech...cse</label1><br></br></td> 
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><label className='deot'>Mobile.no:</label></td>
                       <td><label>9492328888</label><br></br></td> 
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><label className='deot'>Email id:</label></td>
                       <td><label>2400032493@kluniversity.in.com</label><br></br></td> 
                    </tr>
                    <tr>
                        <td> <label className='deot'>course: </label></td>
                            <td> <label> front end development frame works</label></td>
                            
                    </tr>
                </table>
                    
            
              
              
            </div>
        );
    }
}

export default Myapp;