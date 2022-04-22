import React from 'react';
//Styles
import { cartMessageStyles } from './CartMessageStyles';
//Router
import { Link, useHistory } from 'react-router-dom';
//Material-ui
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => cartMessageStyles(theme));

export const CartMessage = () =>{
    const classes = useStyle();
    const history = useHistory();

    return <div className={classes.container}>
        <Typography className={classes.text} variant="h3">Carrito vacío</Typography> 
        <div className={classes.buttonContainer}>
        <Button
            className={classes.button}
            variant="contained"
            color="primary"
            >
            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} onClick={() => history.push(`/`)}>Volver a la lista de productos</Link>
            </Button>
        </div>
    </div>
}; 