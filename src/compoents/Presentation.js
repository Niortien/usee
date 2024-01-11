import React from 'react';

const Presentation = ({Id,Espèce,Nom,Remove}) => {
    
    return (
        <div className='Presentation'>
            <h3>Id :{Id}</h3>
            <h3>Espèce: {Espèce} </h3>
            <h3> Nom : {Nom} </h3>
            <button onClick={Remove} > Remove</button>
            
        </div>
    );
}

export default Presentation;
