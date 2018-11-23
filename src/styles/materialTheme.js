import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {main: '#3AAFA9'},
        secondary: {main: '#FFB300'},
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            'Lato'
        ].join(',')
    }
});

export default theme;