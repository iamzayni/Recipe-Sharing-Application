import React from 'react';
import Header from '../../client-layout/Header';
import Footer from '../../client-layout/Footer';
import PhotoAlbum from '../gallery/PhotoAlbum'
const Gallery = () => {
    return (
        <div>
            <Header />
            <PhotoAlbum/>
            <Footer />
        </div>
    )
};

export default Gallery;