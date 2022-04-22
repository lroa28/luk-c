export const CartWidgetStyles = ((theme) => ({
  root: {
    display: 'grid',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

export const StyledBadgeStyles = ((theme) => ({
  badge: {
    left: 10,
    top: -10,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '9px 9px',
    fontSize: '14px'
  },
}));
