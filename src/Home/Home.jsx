import React from 'react';
import Header from '../Header/Header';
import Categorys from '../Categorys/Categorys';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className='bg-amber-50'>
              <Header></Header>
            </div>
            <div>
                <Categorys></Categorys>
            </div>
            <div>
                <Features></Features>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;