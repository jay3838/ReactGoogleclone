import React from 'react';
import './Home.css';
import  {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from  '@material-ui/core';
import Search from './Search';


// AIzaSyBtCrbRngBn5nD_tw7_tLFZ3fxuZOHU3DE
// e07ebc041b994930b
function Home() {
    return (
        <div className="home">
            {/* <h1>Hellp</h1> */}
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/about">Gmail</Link>
                    <Link to="/store">Images</Link>
                   <Link to=""> <AppsIcon/></Link>
                   <Link to=""> <Avatar/></Link>
               </div>    
            </div>


            <div className="home__body">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"  alt="googleimage"/>
                <div className="input__container">
                    <Search/>
                </div>
            </div>

        </div>
    );
}

export default Home;