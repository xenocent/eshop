import React from 'react';
import { Button,ButtonGroup, Menu, MenuButton, MenuItem, MenuList, MenuGroup, Spinner } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // mengambil data dari reducer
import { logoutAction } from '../actions/userAction';
import {useDispatch} from 'react-redux'

const Navbar = (props) =>{
    const { username } = useSelector((state)=>{
        return {
            username:state.userReducer.username
        }
    })

    const dispatch = useDispatch();

    return <nav className="navbar navbar-expand-lg bg-light" style={{minHeight:"100px"}}>
        <div className="container">
            <Link to='/'>
                <span className='fw-bold' style={{padding:'10px'}}>
                    E-SHOP
                </span>
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to='/products'>
                            <button className="nav-link" >Products</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" >Link</button>
                    </li>
                    <li className="nav-item dropdown">
                        
                    </li>
                    <li className="nav-item">
                        <button className="nav-link disabled">Disabled</button>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    {
                        props.loading? <Spinner/> :username && !props.loading?
                        <Menu>
                            <MenuButton as={Button} colorScheme='pink'>
                                {username}
                            </MenuButton>
                            <MenuList>
                                <MenuGroup>
                                    <MenuItem>Cart</MenuItem>
                                    <MenuItem onClick={()=>dispatch(logoutAction(null))}>Logout</MenuItem>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                        :
                        <ButtonGroup>
                            <Link to='/login'>
                                <Button type='button' colorScheme='teal' variant='solid'>Login</Button>
                            </Link>
                            <Link to='/register'>
                                <Button type='button' colorScheme='teal' variant='outline'>Register</Button>
                            </Link>
                        </ButtonGroup>
                    }
                </form>
            </div>
        </div>
    </nav>;
}

export default Navbar