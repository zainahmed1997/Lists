import React from 'react';
import Color from './Color'; // Assicurati di importare il componente Color correttamente

const Colors = ({ colors }) => {
  return (
    <div>
      <h2>Lista Colori:</h2>
      <ul>
        {colors.map(color => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </div>
  );
}

export default Colors;