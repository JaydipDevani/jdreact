import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Sixcard from './Sixcard';
import Footer from '../Page/Footer';
import Header from '../Page/Header';

const Rickandmotry = () => {
    return (
        <>
            <Header />

            <div className="hero">
                <div className='hero-section'>
                    <h1>The Rick And Morty API</h1>
                </div>
                <div className='card-section'>
                    <div className='all-card'>
                        <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/174.jpeg" name="Albert Einstein" human="Dead - Human" live="Earth (Replace Dimension)" time="A Rickle In Time" />
                        <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/357.jpeg" name="Tommy's Clone" human="Alive - Human" live="Earth (Replacement Dimension)" time="The ABC's of Beth" />
                        <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/799.jpeg" name="Morglutzian" human="Dead - Alien" live="Morglutz" time="A Rickconvenient Mort" />
                        <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/648.jpeg" name="Crystal Dealers Boss" human="Dead - Alien" live="Alien Acid Plant" time="The Vat of Acid Episode" />
                        <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/706.jpeg" name="Squid Costume Morty" human="Dead - Robot" live="Earth (Replacement Dimension)" time="Mortyplicity" />
                        <Sixcard jdimg="https://rickandmortyapi.com/api/character/avatar/730.jpeg" name="Princess Ponietta" human="Alive - Animal" live="Earth (Replacement Dimension)" time="Rickdependence Spray" />
                    </div>
                </div>
            </div>

            
            <Footer />  
        </>

    )
}

export default Rickandmotry
