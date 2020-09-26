import React from 'react'
import taha from '../../res/taha.jpg'
import './ProfilPhoto.css'
import Image from 'react-bootstrap/Image'
const ProfilPhoto = () => {
    return (
        <Image src={taha} alt='taha' rounded />
    );
}

export default ProfilPhoto;