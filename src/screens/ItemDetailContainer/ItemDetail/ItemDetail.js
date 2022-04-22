import React, {useState, useContext} from 'react';
//Styles
import { itemDetailContainerStyles } from '../ItemDetailContainerStyles';
//Componentes
import { ItemCount } from '../../ItemListContainer/components/ItemCount/ItemCount';
import { FinalizarCompraProducto } from '../../../components/FinalizarCompraProducto/FinalizarCompraProducto';
import { CartContext } from '../../../Context/CartContext';
//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Chip, CardMedia, Card, Divider, Tooltip } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SecurityIcon from '@material-ui/icons/Security';
import CheckIcon from '@material-ui/icons/Check';

const useStyle = makeStyles((theme) => itemDetailContainerStyles(theme));

export const ItemDetail = props => {

    const classes = useStyle();
    const { detalleProducto } = props;
    const [cantidadProducto, setCantidadProducto] = useState(0)
    const [click, setClick] = useState(false)
    const {addItem, removeItem} = useContext(CartContext)

    const onAdd = cantidad => {
        setCantidadProducto(cantidad); 
        setClick(true); 
        addItem({item: detalleProducto, quantity: cantidad}) 
    }

    const clickCancelar = cl =>{
        setClick(false);
        removeItem(detalleProducto.id);
    }

    return <>
        <Grid className={classes.container} container 
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}>
            <Grid item xs={12} lg={4}>
                <Card>
                    <CardMedia
                        component='img'
                        image= {detalleProducto.pictureUrl}
                        title= {detalleProducto.alt}  
                    />
                </Card>
            </Grid>
            <Grid item xs={12} lg={4}>      
                <Chip label={detalleProducto.category} color="secondary"></Chip>
                <Typography variant="h4" className={classes.titulo}>{detalleProducto.title}</Typography>
                <Typography color="textSecondary" component="p">{detalleProducto.description}</Typography>
                <Typography className={classes.precio}>${detalleProducto.price}</Typography>

                <Divider variant="middle" />
                
                <Tooltip title="GARANTIA POR 36 MESES" arrow><SecurityIcon style={{ color: green[500] }} className={classes.icons}></SecurityIcon></Tooltip>
                <Tooltip title="STOCK DISPONIBLE" arrow><CheckIcon style={{ color: green[500] }} className={classes.icons}></CheckIcon></Tooltip>
                <Tooltip title="ENVIOS GRATIS A TODO EL PAIS" arrow><LocalShippingIcon style={{ color: green[500] }} className={classes.icons}></LocalShippingIcon></Tooltip>
                {
                    click ? 
                    <FinalizarCompraProducto clickCancelar={clickCancelar}/>
                    :
                    <ItemCount stock={detalleProducto.stock} valorInicial={1}  cantidadProducto={cantidadProducto} onAdd={onAdd}/>
                }
            </Grid>
        </Grid>
    </>
}