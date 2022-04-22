import React from 'react';

//Styles
import { FinalizarCompraStyles } from './FinalizarCompraProductoStyles';

//Router
import { Link, useHistory } from 'react-router-dom';

//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyle = makeStyles((theme) => FinalizarCompraStyles(theme));

export const FinalizarCompraProducto = props =>{
    const classes = useStyle();
    const {clickCancelar} = props;
    const history = useHistory();
    
    return<div>
        <div>
            <Grid 
                container 
                justify="center"
                alignItems="center" 
                item xs={12}>
                    
                <Link to={`/cart`}>
                    <Button
                        onClick={() => history.push(`/cart`)}
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.buttons}
                        endIcon={<ArrowForwardIcon>send</ArrowForwardIcon>}
                    >
                        Finalizar la Compra
                    </Button>
                </Link>
            </Grid>

        <Grid 
            container 
            justify="center"
            alignItems="center" 
            item xs={12}>
                <Button
                onClick={() => clickCancelar(false)}
                variant="contained"
                color="secondary"
                size="large"
                className={classes.buttons}
                endIcon={<ArrowBackIcon>send</ArrowBackIcon>}
            >
                Cancelar
            </Button>
        </Grid>
        </div>
    </div>
} 