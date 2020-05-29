import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //Definimos categoría y noticia
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);


  useEffect(() => {
      const consultarAPI = async () => {
        const apiKey = "ebf42aa88c58458681624ef5ff35a73f";
        const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`;
        
        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        
        guardarNoticias(noticias.articles);
      }
      consultarAPI();  
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo="Buscado de Noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
