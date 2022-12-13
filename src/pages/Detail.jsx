import { Box, Button, Container, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { API_URL } from '../helper/utils';

function Detail(props) {
    const location = useLocation();
    const [product,setProduct] = useState({})
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

    useEffect(()=>{
        fetchProduct()
    },[])

    return ( <Box flex={1}>
        <Flex p={10} display={"flex"} flexDirection={'row'}>
            <Box flex={2}>
                <Image src={product.images} height={500} width={500} />
            </Box>
            <Box p={5} flex={3} display={"flex"} flexDirection={"column"} gap={3}>
                <Heading>{product.name}</Heading>
                <Heading>By {product.brand}</Heading>
                <Text>Description</Text>
                <Text>{product.description}</Text>
                <Heading>{product.price?.toLocaleString('id',{ style: 'currency', currency: 'IDR' })}</Heading>
                <Box display={"flex"} flexDirection={"row"} gap={3}>
                    <Button> + </Button>
                    <Text> 1 </Text>
                    <Button> - </Button>
                    <Button flexGrow={3}> Buy </Button>
                </Box>
            </Box>
        </Flex> 
    </Box>);
}

export default Detail;