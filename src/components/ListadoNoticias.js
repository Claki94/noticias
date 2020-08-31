import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Noticia from './Noticia';

const ContenedorNoticias = styled.div`
    display: grid;
    column-gap: 2rem;

    @media (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ListadoNoticias = ({noticias}) => {
    return (  
        <ContenedorNoticias>
            {noticias.map(noticia => (
                <Noticia
                    key={noticia.url} 
                    noticia={noticia}
                />
            ))}
        </ContenedorNoticias>
    );
}

ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}

export default ListadoNoticias;