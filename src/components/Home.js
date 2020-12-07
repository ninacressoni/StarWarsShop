import React from 'react';
import Products from './Products';
import  './Home.css';

const Home = () => {
    return (

        <React.Fragment>
            <div className="Home">
                <div className="banner">
                    <h2>Welcome to our far far <br/> away galaxy store!</h2>
                </div>

                <Products />
            </div>

            
        </React.Fragment>
    )
}

export default Home;
