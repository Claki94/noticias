import React from 'react';
import PropTypes from 'prop-types';

import useSelect from '../hooks/useSelect';
import formStyles from '../css/Formulario.module.css';

const Formulario = ({guardarCategoria}) => {
    
    // Opciones del select
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
    ];

    // Custom hook useSelect
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const handleSubmit = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }

    return (  
        <div className={`${formStyles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h3 className={formStyles.heading}>Encuentra noticias de US por categoría</h3>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`btn-large amber darken-2 ${formStyles.['btn-block']}`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;