import { IonContent, IonPage } from '@ionic/react';
import { useEffect, useState } from 'react';
import Navegacion from '../components/navegacion';
import Paginacion from '../components/Paginacion';
import Personajes from '../components/Personajes';
import { InterfaceApi } from '../Data/InterfaceApi';
import './Home.css';



const Home = () => {


    const [ personajes, setPersonajes] = useState<Array<InterfaceApi>>([]);
    const [botonSiguiente, setBotonSiguiente] = useState<string>('');
    const [botonPrevio, setBotonPrevio] = useState<string>('');



    const initialUrl = "https://rickandmortyapi.com/api/character";

    const apiRickAndMorty = (url:string ) =>{
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setPersonajes(data.results);
                setBotonSiguiente(data.info.next); 
                setBotonPrevio(data.info.prev);
            })
            .catch(err => console.log(err))
            
            
    };

    useEffect(() =>{
        apiRickAndMorty(initialUrl);
    }, []);
    

    const funcionSiguiente = () => {
        apiRickAndMorty(botonSiguiente);
    }

    const FuncionPrevia = () =>{
        apiRickAndMorty(botonPrevio);
    }
    


  return (
    <IonPage>
      
      <Navegacion titulo='Rick and Morty App' />
      <IonContent fullscreen>
        
        <Paginacion next={botonSiguiente} prev={botonPrevio} siguiente={funcionSiguiente} previo={FuncionPrevia} />
        
        <Personajes results={personajes} />

        <Paginacion next={botonSiguiente} prev={botonPrevio} siguiente={funcionSiguiente} previo={FuncionPrevia} />
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
