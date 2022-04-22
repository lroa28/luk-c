export const cartGridStyles = theme => {
    return({
        container:{
            display: 'flex',
            justifyContent: 'center'
            
        },
        headerTable:{
            backgroundColor: '#4056b3',
        },
        headerText:{
            color: 'white',
        },
        tableContainer:{
            width: '80%',
            marginTop: '5%'
        },
        imgProducto:{
            maxWidth: '8rem'
        },
        delete:{
            '&:hover':{
                color: '#ff0000'
            }
        }
    })
}; 