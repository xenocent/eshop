import React from 'react';
import {Text, Button, Hide,Show} from '@chakra-ui/react';
import { AiFillFacebook,AiFillInstagram,AiFillTwitterCircle,AiFillCopyrightCircle } from 'react-icons/ai';

const Footer = (props) =>{
    return <footer  >
            <div className='container'>
                <div className='row'>
                    <Show below="lg">
                    <div className='col-lg-3 d-flex' style={{justifyContent:'center',alignItems:"end"}}>
                        <Text fontSize="md" as='b' color='teal'>E-SHOP</Text> | Furniture
                    </div>
                    </Show>
                    <Hide below="lg">
                    <div className='col-lg-3 d-flex' style={{justifyContent:'center'}}>
                        <Text fontSize="md" as='b' color='teal'>E-SHOP</Text> | Furniture
                    </div>
                    
                    <div className='col-lg-3'>
                        <Text fontSize="md" as='b'>Products</Text>
                        <Text fontSize="md">Livingroom</Text>
                        <Text fontSize="md">Bedroom</Text>
                        <Text fontSize="md">Kitchen</Text>
                    </div>
                    <div className='col-lg-3'>
                        <Text fontSize="md" as='b'>Company</Text>
                        <Text fontSize="md">About Us</Text>
                        <Text fontSize="md">Career</Text>
                    </div>
                    <div className='col-lg-3'>
                        <Text as='b'>Follow Us</Text>
                        <div>
                            <Button size="sm"><AiFillFacebook/></Button>
                            <Button size="sm"><AiFillInstagram/></Button>
                            <Button size="sm"><AiFillTwitterCircle/></Button>
                        </div>
                    </div>
                    </Hide>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    
                    <Text className='d-flex' style={{justifyContent:'center'}} color="grey"><AiFillCopyrightCircle/> 2022 ESHOP Engineer. All Rights Reserved</Text>
                </div>
            </div>
    </footer>
}

export default Footer