import React, { useContext } from 'react';
//Styles
import { cartGridStyles } from './CartGridStyles';
//Componentes
import { CartContext } from '../../../../Context/CartContext';
//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles((theme) => cartGridStyles(theme));

export const CartGrid = () => {
    const {itemsCart, removeItem, subTotal} = useContext(CartContext)
    const classes = useStyle();

    return<div className={classes.container}>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead className={classes.headerTable}>
          <TableRow>
            <TableCell className={classes.headerText} align="center">Imagen</TableCell>
            <TableCell className={classes.headerText} align="center">Producto</TableCell>
            <TableCell className={classes.headerText} align="center">Cantidad</TableCell>
            <TableCell className={classes.headerText} align="center">Precio</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsCart.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row" align="center">
                  <img src={item.item.pictureUrl} alt={item.item.alt} className={classes.imgProducto}></img>
              </TableCell>
              <TableCell align="center">{item.item.title}</TableCell>
              <TableCell align="center">{item.quantity}</TableCell>
              <TableCell align="center">$ {item.item.price}</TableCell>
              <TableCell>
                    <IconButton aria-label="delete" className={classes.delete} onClick={() => removeItem(item.item.id)}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </TableCell>
            </TableRow>
          ))}
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell align="center">Total:</TableCell>
          <TableCell  align="center">$ {subTotal}</TableCell>
          <TableCell></TableCell>

        </TableBody>
      </Table>
    </TableContainer>
    </div>
} 