import React, {useEffect, useState} from 'react';

//Componentes
import {ItemList} from '../ItemListContainer/components/ItemList/ItemList';

//Router
import {useParams} from 'react-router-dom';

//Firebase
import { dataBase } from '../../Firebase/firebase';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();

    useEffect(() =>{
        const itemCollection = dataBase.collection("items");

        if (categoryId === undefined){
            itemCollection.get().then((querySnapshot) =>{
                if(querySnapshot.size === 0){
                    console.log('No results')
                }
                setProductos(querySnapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )));
            }).catch((error) => {
                console.log('Error:', error)
            })
        }else{
            itemCollection.where("category", "==", categoryId).get().then((querySnapshot) =>{
                if(querySnapshot.size === 0){
                    console.log('No results')
                }
                setProductos(querySnapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data()
                    }
                )));
            }).catch((error) => {
                console.log('Error:', error)
            })
        }
    }, [categoryId])

      return <>
        <ItemList productos={productos}/>
    </>
}




  