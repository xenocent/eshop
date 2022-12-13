import { Box, Button, ButtonGroup, Center, Flex, Heading, Image, Input, InputGroup, Select,  Text, Wrap, WrapItem } from "@chakra-ui/react";
import {useEffect,useState} from 'react';
import Axios from 'axios';
import { API_URL } from "./../helper/utils";
import { useDispatch, useSelector, useStore } from "react-redux";
import { getProductAction, updateAction } from "./../actions/productAction"
function Products() {
    // const [listProduct,setListProduct] = useState([])
    const { listProduct } = useSelector(({productReducer})=>{
        return {
            listProduct: productReducer.products
        }
    })
    const dispatch = useDispatch();
    // eslint-disable-next-line
    const onLoadProduct = ()=>{
        Axios.get(API_URL+`/products`)    
            .then((res)=>{             
                // setListProduct(res.data.map((product)=>{
                    
                //     }))
                dispatch(updateAction(res.data));
            }).catch((err)=>{
                console.log(err);
            })
    }

    const printData= ()=>
        listProduct.map((product)=>{
            return <WrapItem key={product.id}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={'center'} shadow={"2xl"} m={2}>
                    <Image src={product.images} height={300} width={300}/>
                    <Center p={5} as={'button'} display={"flex"} flexDirection={'column'} background={"teal"} color={"white"}>
                        <Text>{product.price.toLocaleString('id',{ style: 'currency', currency: 'IDR' })}</Text>
                        <Text>{product.name}</Text>
                    </Center>
                </Box>
            </WrapItem>
        })
    

    useEffect(()=>{
        // onLoadProduct()
        dispatch(getProductAction());
        // eslint-disable-next-line
    },[])

    return <Flex direction={"column"} p={10}>
        <Box p={5}>
            <Heading size={"lg"}>Our Arrival Products</Heading>
            <Heading size={"md"}>Choose Products and transact more easily</Heading>
        </Box>

        <Box p={5} display={"flex"} flexDirection={"row"} gap={2}>
            <Box p={10} shadow={"2xl"} flex={1} maxHeight={400} display={"flex"} flexDirection={"column"} gap={5} background="teal" color={"white"}>
                <Text>Filter</Text>
                <Input placeholder='Name' _placeholder={{color:'white'}} />
                <Select placeholder='Select Brand'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Select placeholder='Select Category'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <InputGroup gap={5}>
                    <Input placeholder='Minimum' _placeholder={{color:'white'}}/>
                    <Input placeholder='Maximum' _placeholder={{color:'white'}}/>
                </InputGroup>
                <ButtonGroup gap={5}>
                    <Button colorScheme='green'>Filter</Button>
                    <Button colorScheme='yellow'>Reset</Button>
                </ButtonGroup>
            </Box>
            <Wrap flex={3} p={10}>
                {/* {listProduct.length !== 0?listProduct:<WrapItem><Text>Tidak Ada Data</Text></WrapItem>} */}
                {printData()}
            </Wrap>
        </Box>
        
    </Flex>;
}

export default Products;