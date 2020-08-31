import React, {Fragment, useState, useEffect} from 'react';
import Axios from 'axios';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // State de la categoria
  const [categoria, guardarCategoria] = useState('general');

  // State del resultado de la busqueda
  const [busqueda, guardarBusqueda] = useState([]);

  // Llamado a la API
  useEffect(() => {

    if(categoria) {
      const consultarAPI = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=APIKEY`;
        let resultado = await Axios.get(url);
  
        guardarBusqueda(resultado.data.articles);
      }

      consultarAPI();
    }
    
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"/>

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={busqueda}
        />
      </div>
    </Fragment>
  );
}

export default App;
