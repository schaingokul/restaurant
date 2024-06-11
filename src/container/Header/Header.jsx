import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding'id=''>
    <div className='app__wrapper_info'>
      <SubHeading  tittle ="Chase The New Flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dinning</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Sit tellus lobortics sed senectus vivamus molestie. Condimentum volumebt mobire fascbrkd quam scelerisique sapien. Et, penetsjf alindu amet tellus</p>    
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
