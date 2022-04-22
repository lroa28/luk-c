import React, { useEffect, useState } from 'react';
//Componentes
import { ItemDetail } from '../ItemDetailContainer/ItemDetail/ItemDetail';
//Router
import { useParams} from 'react-router-dom';
//Firebase
import { dataBase } from '../../Firebase/firebase';

export const ItemDetailContainer = props => {
    const [detalleProducto, setDetalleProducto] = useState([])
    const {productId} = useParams();

    useEffect(()=>{
        const itemCollection = dataBase.collection("items");
        const item = itemCollection.doc(productId)

        item.get().then((doc) =>{
            if (!doc.exists){
                console.log('No existe')
                return;
            }
            setDetalleProducto([{id: doc.id, ...doc.data()}])
        }).catch((error) =>{
            console.log('Error', error)
        })
    },)

    return<>
        {
            detalleProducto.map((detalle) => <ItemDetail detalleProducto={detalle}/> )
        }
        
    </>
}