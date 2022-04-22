import React, {useState} from 'react'
//Styles
import {NavBarStyles} from './NavBarStyles';
//Componentes
import {CartWidget} from './components/Cart/CartWidget/CartWidget';
//Router
import {Link} from 'react-router-dom';
//Material-ui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';


const useStyles = makeStyles((theme) => NavBarStyles(theme));

export const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const buzos = "buzos";
  const tejidos = "tejidos";
  const moldes = "moldes";
  const barbijos = "barbijos";
  const sets = "sets";

  return (
  <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="logo" src="https://firebasestorage.googleapis.com/v0/b/lukc-ecarrito-npx.appspot.com/o/logooriginalnegro.jpg?alt=media&token=37c01104-a0c3-4478-b302-0987545f5ee7" />
          <Typography variant="title" className={classes.title}>
            <Link aria-current="page" to={'/'}>_luk_c</Link>
          </Typography>
        <div className={classes.title}>
          <Button 
          aria-describedby={id} 
          variant="contained" 
          color="black" 
          onClick={handleClick}>
            Ver por Categorías
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            className={classes.typography}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: -50,
              horizontal: 'center',
            }}>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}>
              <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/category/${buzos}`}>Buzos</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/category/${tejidos}`}>Tejidos</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/category/${moldes}`}>Moldes</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/category/${barbijos}`}>Barbijos</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/category/${sets}`}>Sets</Link>
              </MenuItem>
            </Popover> 
          </Menu>
        </div> 
        <Typography variant="h5">Tu compra</Typography>       
        <DoubleArrowIcon />
          <CartWidget/>    
        </Toolbar>
      </AppBar>
    </div>
  );
}