import React, { useEffect } from 'react';
import { Box,Text,Button, Input, Center, InputGroup, InputRightElement } from '@chakra-ui/react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {loginAction} from '../actions/userAction';
import {useDispatch} from 'react-redux'
import { API_URL } from "./../helper/utils";


const Login = (props) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch(); // untk menjalankan action redux
    // data state
    const [inputEmail,setInputEmail] = React.useState("tester@markvisit.com")
    const [inputPassword,setInputPassword] = React.useState("Passwordnya0k!")
    const [showPass,setShowPass] = React.useState(false)

    const redirectFromLogin = ()=>{
        let getLocalStorage = JSON.parse(localStorage.getItem('eshop_login'))
        if(getLocalStorage?.id){
            navigate("/",{replace:true})
        }
    }

    useEffect(()=>{
        redirectFromLogin()
        // eslint-disable-next-line
    },[])
    const onBtnLogin = ()=>{
        // alert(`${inputEmail} ${inputPassword}`)
        Axios.get(API_URL+`/user?email=${inputEmail}&password=${inputPassword}`)    
            .then((res)=>{
                console.log(res.data);
                delete res.data[0].password;
                dispatch(loginAction(res.data[0])); // menjalankan fungsi action
                localStorage.setItem('eshop_login',JSON.stringify(res.data[0]))
                navigate("/",{replace:true});
            }).catch((err)=>{
                console.log(err);
            })
    }

    const handleClick = ()=>{
        setShowPass((prev)=>!prev)
    }

    return <Center style={{flex:1}} >
        <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' p={10} boxShadow='2xl'>
            <Box p={2}>
                <Text fontSize="md">Sign in for Shopping</Text>
                <Text fontSize="md">Not Have account? Sign Up</Text>
            </Box>
            <Box p={2}>
                <Text fontSize="md" >Email</Text>
                <Input placeholder='Basic usage' onChange={(el)=>setInputEmail(el.target.value)}/>
            </Box>
            <Box p={2}>
                <Text fontSize="md" >Password</Text>
                <InputGroup>
                    <Input placeholder='Basic usage' type={showPass?'text':'password'} onChange={(el)=>setInputPassword(el.target.value)}/>
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {showPass ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement> 
                </InputGroup>
            </Box>
            <Box p={2}>
                <Text fontSize="md" paddingBottom={2}>Forgot password? Click Here</Text>
                <Button onClick={onBtnLogin}>Login</Button>
            </Box>
        </Box>
    </Center>
    
}

export default Login;