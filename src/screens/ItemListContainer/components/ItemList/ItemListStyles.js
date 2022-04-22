export const ItemListStyles = ((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(1),
    },
},
    grilla: {
        paddingTop: theme.spacing(10),
    }
}));