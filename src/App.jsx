import {useState} from 'react';
import './App.css';
import Navbar from './Components/Nabvar';
import Main from './Components/Main';
import Form from './Components/Form';


function App() {
  const [sidebar, setSidebar] = useState("none");
  const [item, setItem]  = useState("none");
 

const navbar = () =>{
  if(sidebar == "none"){
      setSidebar("block");
      
      document.querySelector('.Sidebar').style.display = sidebar;

  }
  else if(sidebar == "block"){
      setSidebar("none");
      document.querySelector('.Sidebar').style.display = sidebar;


  }


}
const form = () =>{
  if(item == "none"){
      setItem("block");
      document.querySelector('.signup').style.display = item;
      document.querySelector('.Sidebar').style.display = "none";

      

  }
  else if(item == "block"){
      setItem("none");
      document.querySelector('.signup').style.display = item;
      


  }

  }
 
 
  

const form1 = () =>{
  if(item == "none"){
      setItem("block");
      document.querySelector('.signup').style.display = item;
      

  }
  else if(item == "block"){
      setItem("none");
      document.querySelector('.signup').style.display = item;
      


  }
 
}
 

      
  
  let forms = () =>{
    setItem("none");
    document.querySelector('.signup').style.display = "none";

  }

  return (
    <>
      <Navbar form = {form} navbar = {navbar} form1 = {form1} item = {item}/>
      <Main/>
      <Form forms = {forms}/>
    </>
  )
}

export default App
