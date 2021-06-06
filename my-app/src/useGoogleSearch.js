import { useEffect, useState } from 'react';



//new project banvohttps://console.cloud.google.com/projectcreate?previousPage=%2Fapis%2Fcredentials%2Fconsent%3Fproject%3Djp-project-310216&folder=&organizationId=0 
//pachi https://developers.google.com/custom-search/v1/introduction api key genrate karvi 
//ek j var search karva dese 


const API_KEY="AIzaSyDCc-o8Zqk-LtCXhyjuI6kJXpu-XVGpyb4";
const CONTEXT_KEY="e07ebc041b994930b";

function useGoogleSearch(term) {
    const [data,setdata]=useState(null);
    // console.log("i am usegooglesearch  page",term);

    useEffect(()=>{
        const fetchData = async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result=>{
                setdata(result);
            })
        }
       fetchData();
    },[term])
    return {data}
};

export default useGoogleSearch;