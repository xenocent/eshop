import { Box,Button, Center,Input, InputGroup,InputRightElement, Skeleton, Text } from '@chakra-ui/react';
import {FaFacebook} from 'react-icons/fa'
import React from 'react';
import Axios from 'axios'

const API_URL = "http://localhost:2500"
const Register = ()=>{
    const [email,setInputEmail] = React.useState("")
    const [username,setInputUsername] = React.useState("")
    const [password,setInputPassword] = React.useState("")
    const [showPass,setShowPass] = React.useState(false)

    const handleClick = ()=>{
        setShowPass((prev)=>!prev)
    }

    const onRegis = ()=>{
        // alert(`${inputEmail} ${inputUsername} ${inputPassword}`)
        Axios.post(API_URL+ `/user`,{
            username,
            email,
            password,
            role:"user"
        })
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>console.log(err))
    }


    return <Center flex={1}>
        <Box display='flex' flexDirection='row'>
            <Box p={10} boxShadow='xl'>
                <Skeleton>
                    <Box width={700} height={500}></Box>
                </Skeleton>
            </Box>
            <Box p={10} boxShadow='2xl'>
                <Box p={2} display="flex" flexDirection="column">
                    <Text as='b' fontSize='2xl'>START FOR FREE</Text>
                    <Text as='b' fontSize='4xl'>SIGN UP TO E-SHOP</Text>
                    <Text>Already a member? <Text as={'b'}>Sign in</Text></Text>
                </Box>
                <Box p={2}>
                    <Text fontSize="md" >Username</Text>
                    <Input placeholder='ini user' onChange={(el)=>setInputUsername(el.target.value)}/>
                </Box>
                <Box p={2}>
                    <Text fontSize="md" >E-mail</Text>
                    <Input type="email" placeholder='ini email' onChange={(el)=>setInputEmail(el.target.value)}/>
                </Box>
                <Box p={2}>
                    <Text fontSize="md" >Password</Text>
                    <InputGroup>
                        <Input placeholder='ini password' type={showPass?'text':'password'} onChange={(el)=>setInputPassword(el.target.value)}/>
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {showPass ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement> 
                    </InputGroup>
                </Box>
                
                <Center display='flex' flexDirection='column' paddingTop={5}>
                    <Button colorScheme='teal' width='100%' onClick={onRegis}>
                        Create an account
                    </Button>
                    <Text>or</Text>
                    <Button colorScheme='facebook' leftIcon={<FaFacebook />} width='100%'>
                        Facebook
                    </Button>
                </Center>
            </Box>
        </Box>
    </Center>
}

export default Register