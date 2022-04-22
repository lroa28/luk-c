import React, { useContext } from 'react';
//Styles
import { orderMessageStyles } from './OrderMessageStyles';
//Componentes
import { CartContext } from '../../../../Context/CartContext';
//Router
import { Link, useHistory } from 'react-router-dom';
//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => orderMessageStyles(theme));

export const OrderMessage = () => {
    const {orderData, clear} = useContext(CartContext)
    const history = useHistory();
    const classes = useStyle();
    const goToIndex = () =>{
        clear()
        history.push(`/`)
    }
    return <div>
        <div className={classes.messageOrder}>
            <Typography variant="h3">¡Gracias por la compra!</Typography>
            <Typography className={classes.code}>Tu número de órden es: {orderData}</Typography>  
        </div>
        <div className={classes.container}>
            <Link>
            <Button className={classes.button} color="primary" variant="contained" onClick={goToIndex}>Seguir comprando!</Button>
            </Link>
        </div>
    </div>
}