import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Mic from '@material-ui/icons/Mic';
import {Button} from "@material-ui/core";
import './Search.css';
import {useHistory} from 'react-router-dom';
import  {useStateValue} from './StateProvider';
// import {actionTypes} from './reducer';


function Search() {
    const history=useHistory();
    const [input,setinput] = useState(" ");
    const [state,dispatch]=useStateValue("");

    const search=(e)=>{
        e.preventDefault();
        // console.log("you hit button",input);
        dispatch({
            type:"SET_SEARCH_TERM",
            // type:actionTypes.SET_SEARCH_TERM,
            term:input,
        })

        history.push('/Searchpage');
        

    }

    return (
        <div className="Search">
            <div className="Search__input">
                <SearchIcon/>
                <input value={input}  onChange={(e=>setinput(e.target.value))} />
                <Mic />
            </div>
            <div className="Search__button">
                <Button variant="outlined" onClick={search} >Google Search</Button>
                <Button variant="outlined">I'm Felling Lucky</Button>

            </div>
        </div>
    );
}

export default Search;