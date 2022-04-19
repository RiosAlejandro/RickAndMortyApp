import { IonButton, IonCol, IonContent, IonGrid, IonRow, IonToolbar } from '@ionic/react';
import * as React from 'react';
import { InterfaceApi } from '../Data/InterfaceApi';

export interface Props{
    //prev: ()=> string | null
    prev: string 
    next:  string 
    funcionAnterior: ()=> void | null
    funcionSiguiente: ()=> void 
}

 

const Paginacion = () => {

    /*const anterior = () =>{
        funcionAnterior();
    }

    const siguiente = () =>{
        funcionSiguiente();
    }*/


    return(
        
            <IonGrid>
                <IonRow>
                    
                        <IonCol size='6' className='ion-text-end'>
                            <IonButton  color="medium">Anterior</IonButton>
                        </IonCol>
                        
                    
                        <IonCol size='6'>
                            <IonButton  color="medium">Siguiente</IonButton>
                        </IonCol>
                        
                    
                </IonRow>
            </IonGrid>
        
    );
};

export default Paginacion;