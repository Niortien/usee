import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Presentation from './compoents/Presentation';


function App() {
  const [animaux,setanimaux]=useState([
{
  Id:1,
  Espèce:"mamifère",
  Nom:"Lion"
}
])
const [Nom,setNom]=useState("");
const [Espèce,setEspèce]=useState("");
const [Id,setId]=useState()
function addAnimal(){
  let newAnimal={
    Id:Id,
    Espèce:Espèce,
    Nom:Nom
  }
   let Animal=[...animaux,newAnimal]
   setanimaux(Animal)
}
const Remove=(id)=>{
  let arr=animaux;
  let index=arr.findIndex(f=>parseInt( f.Id)===parseInt(id))
  console.log(Id);
  arr.splice(index,1)
  setanimaux([...arr])

}


 
  return (
    <div className="App">
<div>
    <input type="text"   onChange={(e)=>setEspèce(e.target.value)} placeholder="l'espèce svp"/>
    <input type="text"   placeholder="le nom svp" onChange={(e)=>setNom(e.target.value) } />
    <input type="text"   placeholder="l'id svp"  onChange={(e)=>setId(e.target.value) }  />
    <button onClick={addAnimal}>+</button>
    </div>
    {animaux.map((element)=>{
      return(
        <Presentation  Remove={Remove} key={element.Id} Id={element.Id} Espèce={element.Espèce} Nom={element.Nom} />
        
      )
    })}
   </div>

    
  );
}

export default App;
