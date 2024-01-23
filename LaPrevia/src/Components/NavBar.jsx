import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import CartWidget from './CartWidget';
import {Link,Image, Flex, Spacer, Box, Menu,MenuButton,MenuList,MenuItem,Button} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'

import * as Router from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <Flex bg='green.200'>
            <Router.Link to="/">
                <Box p='4' bg='green.200'>
                <Image
                    borderRadius='full'
                    boxSize='75px'
                    src='/img/logo.png'
                    alt='Logo'
                    
                />
                
                   
                </Box>
            </Router.Link>
            
            <Spacer />

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg='green.200' mt='20px'>
                Categorías
                </MenuButton>
                <MenuList>
                    <Router.Link to={"/category/Cervezas"}>
                        <MenuItem>Cervezas</MenuItem>
                    </Router.Link>

                    <Router.Link to={"/category/Vinos"}>
                        <MenuItem>Vinos</MenuItem>
                    </Router.Link>

                   
                </MenuList>
            </Menu>



            <Router.Link to="/Cart">
                <Box p='4' bg='green.200'>
                    <CartWidget/>
                </Box>
            </Router.Link>
        </Flex>
  
    </div>
  )
}

export default NavBar