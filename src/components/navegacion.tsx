import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import * as React from 'react';

interface tituloHeader {
    titulo: string;
}

const Navegacion: React.FC<tituloHeader> = ({titulo}) => {
    
    return(
        <IonHeader>
            <IonToolbar className='ion-text-center'>
                <IonTitle>{titulo}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Navegacion;