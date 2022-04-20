import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
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
                            <IonCardTitle color="warning">{item.name}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonBadge color="dark">Especies:</IonBadge>
                            <IonBadge color="warning">{item.species}</IonBadge>
                        </IonCardContent>
                        <IonCardContent>
                            <IonBadge color="dark">Localización:</IonBadge>
                            <IonBadge color="warning">{item.location.name}</IonBadge>
                        </IonCardContent>
                    </IonCard>
                ))
            }
        </>
    );
};

export default Personajes;