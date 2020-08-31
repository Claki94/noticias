import React from 'react';
import formStyles from '../css/Formulario.module.css';

const Formulario = () => {
    return (  
        <div className={`${formStyles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h3 className={formStyles.heading}>Encuentra noticias por categoría</h3>

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
 
export default Formulario;