import { useEffect, useState } from 'react';

interface dateApi {
    results: any,
    info: any,
    /*prev: string,
    next: string*/
}


const ConsumoApi: React.FC = () => {

    const [ personajes, setPersonajes] = useState<any[]>([]);
    const [botones, setBotones] = useState<dateApi[]>([]);

    const initialUrl = "https://rickandmortyapi.com/api/character";

    const apiRickAndMorty = (url:any) =>{
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setPersonajes(data.results);
                setBotones(data.info);
            })
            .catch(err => console.log(err))
    };

    /*const funcionAnterior = () =>{
        apiRickAndMorty(botones.prev);
    };

    const funcionSiguiente = () =>{
        apiRickAndMorty(botones.next);
    }*/

    useEffect(() =>{
        apiRickAndMorty(initialUrl);
    }, []);

    return(
        <></>
    );
};

export default ConsumoApi;