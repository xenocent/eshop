import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useLocation } from "react-router-dom";
import { API_URL } from '../helper/utils';

function Detail(props) {
    const location = useLocation();
    const [product,setProduct] = useState({})
    const [qty,setQty] = useState(0)
    // const {product} = useSelector(({productReducer})=>{
    //     return {
    //         product: productReducer.products.find(x=>x.id == location.state.productId)
    //     }
    // })
    const fetchProduct = ()=>{
        axios.get(API_URL+'/products/'+location.state.productId)
            .then((res)=>{             
                setProduct(res.data)
            }).catch((err)=>{
                console.log(err);
            })
    }

    const changeQty=(type)=>{
        if(type)
            setQty((prev)=>prev<product?.stock?prev+1:prev)
        else
            setQty((prev)=>prev>0?prev-1:0)
    }

    const addCart = ()=>{
        
    }

    useEffect(()=>{
        fetchProduct()
    },[])

    return ( <Box flex={1}>
        <Flex p={10} display={"flex"} flexDirection={'row'}>
            <Box flex={2}>
                <Image src={product.images} height={500} width={500} />
                <Heading>{product.category}</Heading>
            </Box>
            <Box p={5} flex={3} display={"flex"} flexDirection={"column"} gap={3}>
                <Heading>{product.name}</Heading>
                <Heading>By {product.brand}</Heading>
                <Text>Description</Text>
                <Text>{product.description}</Text>
                <Heading>{product.price?.toLocaleString('id',{ style: 'currency', currency: 'IDR' })}</Heading>
                <Box display={"flex"} flexDirection={"row"} gap={3}>
                    <Button onClick={()=>changeQty(true)}> + </Button>
                    <Text> {qty} </Text>
                    <Button onClick={()=>changeQty(false)}> - </Button>
                    <Button flexGrow={3} onClick={()=>addCart()}> Buy </Button>
                </Box>
                <Text>Stock : {product.stock}</Text>
            </Box>
        </Flex> 
    </Box>);
}

export default Detail;