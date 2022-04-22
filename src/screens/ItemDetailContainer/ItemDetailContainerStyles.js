const commonWeight = {
    fontWeight: 'bold',
}
export const itemDetailContainerStyles = theme => {
    return({
        precio:{
            fontSize: '30px'
        },
        titulo:{
            ...commonWeight,
            margin: '15px 0px'
        },
        icons: {
            margin: theme.spacing(2,1)
        },
        chip: {
            marginTop: theme.spacing(-5.5),
            marginLeft: theme.spacing(1)
        },
        container: {
            margin: theme.spacing(5,0)
        },
        button: {
            fontSize: '18px',
            marginTop: 40,
        }
    })
};