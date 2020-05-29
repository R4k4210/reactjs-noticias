import React from 'react';
import PropTypes from 'prop-types';
import styles from './Formulario.module.css';

const Noticia = ({noticia}) => {
    //Extraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    const imagen = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title}/>
            <span className={`card-title ${styles.card_source}`}>{source.name}</span>
        </div>
    : null;

    return ( 
        <div className="col s12 m6  l4">
            <div className="card">

                {imagen}

                <div className="card-content">
                    <h4 className={styles.card_title}>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className={`card-action ${styles.align_center}`}>
                    <a 
                        href={url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
     );
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;