import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {
    
    // State del custom hook
    const [categoria, guardarCategoria] = useState(stateInicial);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={categoria}
            onChange={e => guardarCategoria(e.target.value)}
        >
            <option value="">Seleccione</option>
            {opciones.map(opcion => (
                <option 
                    key={opcion.value}
                    value={opcion.value}
                >
                    {opcion.label}
                </option>
            ))}
        </select>
    );
    
    return [categoria, SelectNoticias];
}
 
export default useSelect;