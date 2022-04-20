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
                    <IonCol className='ion-text-center'>
                        {prev ?
                            <IonButton onClick={funcionAnterior}  color="medium">Anterior</IonButton> 
                            :
                            null
                        }
                        {next ?
                            <IonButton onClick={funcionSiguiente}  color="medium">Siguiente</IonButton>
                            :
                            null
                        }
                    </IonCol>
                </IonRow>
            </IonGrid>
        
    );
};

export default Paginacion;