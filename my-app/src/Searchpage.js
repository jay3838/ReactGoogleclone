import React from 'react';
import  {Link} from 'react-router-dom';
import './Searchpage.css';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Mic from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from  '@material-ui/core';
import {useStateValue} from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
// import Response from './Response.js';

function Searchpage() {
    const [{term},disptch] = useStateValue();
    // console.log("i am searchpage",term);
    const  {data} = useGoogleSearch(term);

    // const data = Response;
    console.log(data);
    return (
        <div className="searchpage">

            <div className="searchpage__header">
                <Link  to="/">
                    <img className="searchpage__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="googleimage"/>
                </Link>
                <div className="Search__input">
                    <SearchIcon/>
                    <input/>
                    <Mic />
                </div>
                <div className="icons">
                   <Link to=""> <Avatar/></Link>
                    <Link to=""> <AppsIcon/></Link>
                    </div>
             </div>


             <div className="Search__options">
                 
                    <div className="Search__optionsLeft">

                        <div className="Search__option">
                            <SearchIcon/>
                            <Link to="/all">All</Link>
                        </div>
                        <div className="Search__option">
                            <DescriptionIcon/>
                            <Link to="/all">News</Link>
                        </div>
                        <div className="Search__option">
                            <ImageIcon/>
                            <Link to="/all">Videos</Link>
                        </div>
                        <div className="Search__option">
                            <LocalOfferIcon/>
                            <Link to="/all">Images</Link>
                        </div>
                        <div className="Search__option">
                            <RoomIcon/>
                            <Link to="/all">Maps</Link>
                        </div>
                        <div className="Search__option">
                            <MoreVertIcon/>
                            <Link to="/all">More</Link>
                        </div>


                        <div className="Search__option">
                               
                                <Link to="/all">Setting</Link>
                            </div>
                            <div className="Search__option">
                                
                                <Link to="/all">Tools</Link>
                            </div>
                    </div>
                </div>
         
            <div className="jp">
                {/* line border  */}
            </div>


            {data?.items.map(item=>(

            <div className="Search__results">
                <a href={item.link}>{item.displayLink}</a>
                <a href={item.link} className="Search__result Tittle"><h2>{item.title}</h2></a>
                <p className="Search__result Snippet">{item.snippet}</p>

            </div>
            ))}
           





   

                
    </div>
        // </div>
    );
}

export default Searchpage;