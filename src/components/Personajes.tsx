import { IonCard, IonCardHeader, IonCardTitle, IonLabel } from '@ionic/react';
import { InterfaceApi } from '../Data/InterfaceApi';

export interface Props{
    results: Array<InterfaceApi> 
}


const Personajes = ({results}: Props) => {


    return(
        <>
            {
                results.map((item: any, index) => (
                    <IonCard key={index} className='ion-text-center ion-padding-bottom ion-padding-top'>
                        <img src={item.image} />
                        <IonCardHeader>
                            <IonCardTitle>{item.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonLabel>Especies: {item.species}</IonLabel>
                        <IonLabel>Localización {item.location.name}</IonLabel>
                    </IonCard>
                ))
            }
        </>
    );
};

export default Personajes;