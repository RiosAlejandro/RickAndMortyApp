import { IonContent, IonPage } from '@ionic/react';
import { useEffect, useState } from 'react';
import Navegacion from '../components/navegacion';
import Paginacion from '../components/Paginacion';
import Personajes from '../components/Personajes';
import { InterfaceApi } from '../Data/InterfaceApi';
import './Home.css';



const Home = () => {


    const [ personajes, setPersonajes] = useState<Array<InterfaceApi>>([]);
    //const [botones, setBotones] = useState<Array<InterfaceApi["info"]>>([]);
    const [botones, setBotones] = useState<InterfaceApi>();
    

    const initialUrl = "https://rickandmortyapi.com/api/character";

    const apiRickAndMorty = (url:string ) =>{
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setPersonajes(data.results);
                setBotones(data.info);  
                console.log(data);
                console.log(botones);
                console.log(data.info.next);
                
            })
            .catch(err => console.log(err))
            
            
    };

    useEffect(() =>{
        apiRickAndMorty(initialUrl);
    }, []);
    
    console.log(botones?.info?.next);
    
    /*const funcionAnterior:()=> void = () =>{
      const botonPrev = botones[0].info.prev;
      apiRickAndMorty(botonPrev);
      
    };

    const funcionSiguiente = () =>{
        const botonNext = botones[1].next;
        apiRickAndMorty(botonNext);
    }

    /*const botonPrev = () =>{
       return botones[0].info.prev;
    }*/

    /*const botonNext = () =>{
      const botonNex = botones[0].next ;
      return botonNex;
    }*/


  return (
    <IonPage>
      
      <Navegacion titulo='Rick and Morty App' />
      <IonContent fullscreen>
        
        <Paginacion  />
        
        <Personajes results={personajes} />

        {/*<Paginacion prev={botonNext} next={botonNext} funcionAnterior={funcionSiguiente} funcionSiguiente={funcionSiguiente} />*/}
      </IonContent>
    </IonPage>
  );
};

export default Home;
