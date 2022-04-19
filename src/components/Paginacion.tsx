import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react';


export interface Props{
    next:  string 
    prev:string
    previo: ()=> void | null
    siguiente: ()=> void 
}

 

const Paginacion = ({next, prev, siguiente, previo}: Props) => {

    const funcionAnterior = () =>{
        previo();
    }

    const funcionSiguiente = () =>{
        siguiente();
    }


    return(
        
            <IonGrid>
                <IonRow>
                    {prev ?
                        <IonCol size='6' className='ion-text-end'>
                            <IonButton onClick={funcionAnterior}  color="medium">Anterior</IonButton>
                        </IonCol>
                        :
                        null
                    }
                    {next ?
                        <IonCol size='6'>
                            <IonButton onClick={funcionSiguiente}  color="medium">Siguiente</IonButton>
                        </IonCol>
                        :
                        null
                    }
                </IonRow>
            </IonGrid>
        
    );
};

export default Paginacion;