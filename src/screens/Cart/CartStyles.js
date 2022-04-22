export const cartStyles = theme => {
    return ({
        container: {
            background: 'black',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            columnGap:'3rem',
            alignItems: 'flex-start',
            padding: '2rem',
            marginBottom:'2rem',
            '& div:nth-child(1)':{
                overflowX:'auto'
            }
            
        }
    })
}