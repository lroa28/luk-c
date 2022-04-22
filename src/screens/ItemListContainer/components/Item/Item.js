import React from 'react';
//Styles
import { ItemStyles } from './ItemStyles';
//Router
import { Link } from 'react-router-dom';
//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Typography, Button, Snackbar, Divider} from '@material-ui/core';
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined';

const useStyle = makeStyles((theme) => ItemStyles(theme));

export const Item = props => {
    const classes = useStyle();
    const { producto } = props;
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return<>
        <Card className={classes.root}>
            <CardMedia
                component='img'
                image= {producto.data.pictureUrl}
                width="100"
                title= {producto.data.alt}/>
            <CardContent>
                <Typography  component="h2" className={classes.titulo}>{producto.data.title}</Typography>
                <Divider variant="middle" />
                <Typography  color="textSecondary" component="p">{producto.data.description}</Typography>
                <Typography  className={classes.precio}>{`$ ${producto.data.price}`}</Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
                <Link to={`/item/${producto.id}`}>    
                    <Button
                        onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}
                        variant="contained"
                        color="secondary">
                        Detalle del producto
                        <TouchAppOutlinedIcon />
                    </Button>
                </Link>
            </CardActions>
            <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="¡Añadido al Carrito!"
        key={vertical + horizontal}/>
        </Card>
    </>
}