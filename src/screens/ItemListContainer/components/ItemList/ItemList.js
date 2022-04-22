import React from 'react';

//Styles
import { ItemListStyles } from './ItemListStyles';

//Componentes
import { Item } from '../Item/Item';

//Material-ui
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Grid } from '@material-ui/core';

const useStyle = makeStyles((theme) => ItemListStyles(theme));

export const ItemList = props => {
    const classes = useStyle();
    const {productos} = props;

    return<>
        {
            productos.length === 0 ? (<div className={classes.root}><LinearProgress/></div>) : (<Grid container>
                <Grid className={classes.grilla} item xs={12} >
                    <Grid container justify="center" >
                        {productos.map((producto) => <Item 
                            key={producto.id}
                            producto={{id: producto.id, data: producto.data}}
                        />)}
                    </Grid>
                </Grid>
            </Grid>)
        }
    </>
}