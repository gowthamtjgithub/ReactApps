import React from 'react';
import { useState, useEffect, component } from 'react';
import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


function Menu() {
    const classes = useStyles();
    const [searchText, setSearchText] = useState('');
    const [menu, setMenu] = useState([]);


    useEffect(() => {
        console.log(searchText);
        let lUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        let fMethod;
        if (searchText) {
            lUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchText;
            fMethod = 'POST'
        }



        axios({
            method: fMethod ? fMethod : 'GET',
            url: lUrl,
            timeout: 4000
            // 4 seconds timeout

        })
            .then(response => {
                console.log(response.meals);
                setMenu(response.data.meals);
            })
            .catch(error => console.error('timeout exceeded'))

    }, [searchText]);

    function onSearchTextChange(e) {
        setSearchText(e.target.value);
    }

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Menu
          </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                value={searchText}
                                onChange={onSearchTextChange}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Instructions</th>
                        <th>Source</th>
                    </tr>
                </thead>
                <tbody>
                    {menu.map(emp => (
                        <tr key={emp.idMeal}>
                            <td>{emp.idMeal}</td>
                            <td>{emp.strMeal}</td>
                            <td>
                                {/* <Container maxWidth="sm"> */}
                                <img src={emp.strMealThumb} height='150' width='200'></img>
                                {/* </Container> */}
                            </td>
                            <td>
                                <Container maxWidth="sm">
                                    <Paper>{emp.strInstructions}</Paper>
                                </Container>

                            </td>
                            <td>
                            <a href={emp.strSource} target="_blank">Visit W3Schools.com!</a>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Menu;