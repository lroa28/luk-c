import React, { useContext } from 'react';

//Styles
import { CartWidgetStyles, StyledBadgeStyles } from './CartWidgetStyles';

//Componentes
import { CartContext } from '../../../../../Context/CartContext';

//Router
import { Link, useHistory } from 'react-router-dom';

//Material-ui
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => CartWidgetStyles(theme));

const StyledBadge = withStyles((theme) => StyledBadgeStyles(theme))(Badge);


export const CartWidget = () => {
  const classes = useStyles();
  const {itemsQuantity} = useContext(CartContext);
  const history = useHistory();

  return (
    <Link onClick={() => history.push(`/cart`)}>
      <div className={classes.root}>
        <IconButton color="default" >
          <StyledBadge badgeContent = {itemsQuantity} color="secondary">
          </StyledBadge>
          <ShoppingCartIcon fontSize="large" style={{ color: "white" }}/> 
        </IconButton>
      </div>
    </Link>
    );
}