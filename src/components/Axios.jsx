import React,{useState} from "react";
import axios from "axios";
const Axios = () => {

    let [pokemon,setPokemon] = useState([]);
    console.log(pokemon,"kdjflskdjflksjdflksdjflksjdflkjsflkjsdlkfjiefoihosidhgoihwseoihrtfwsedf")

    const getData = () =>{
        // this is how we call an api
    // ? this is call a promise
    // axios insted of fetch first .then not needed
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        // another .then()
            .then(
                response => {
                    console.log("response of api call",response);
                    setPokemon(response.data.results);
                }
            )
            .catch(
                (err) => {
                    console.log("there is an error somewhere",err);
                }
            )
            console.log("waiting for the info")
            console.log("still waiting for the info");
    }

    return(
        <div>
        <button onClick={getData} > click for pokemon</button>
        {
            pokemon.map((poke,idx)=>{
                    return(
                        <div key={idx} >
                            <h3>{poke.name }</h3>
                            <a href="{poke.url}">{poke.url}</a>
                        </div>
                    )
                }
            )
        } 
        </div>
    )
}

export default Axios;