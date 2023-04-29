import * as React from 'react';
import PropTypes from 'prop-types';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Foodcard from './Foodcard';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DisplayCards = (props) => {

    // const { window } = props;

    console.log("display card props", props);
    const data = props.data;

    return (
        <>
            <Box sx={{ flexGrow: 1, minHeight: '100vh', backgroundColor: '#3C486B' }}>

                <Grid
                    container spacing={{ xs: 2, md: 8 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}>

                    {data.map((item, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Item sx={{
                                display: 'flex',
                                backgroundColor: 'transparent',
                                boxShadow: 'none'
                            }}>
                                <Foodcard data={item}/>
                            </Item>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </>
    );
}


DisplayCards.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default DisplayCards

