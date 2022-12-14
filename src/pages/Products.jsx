import { Box, Button, ButtonGroup, Center, Flex, Heading, Image, Input, InputGroup, Select,  Text, Wrap, WrapItem } from "@chakra-ui/react";
import {useEffect,useState} from 'react';
import Axios from 'axios';
import { API_URL } from "./../helper/utils";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction, updateAction } from "./../actions/productAction"
import { useNavigate } from 'react-router-dom';

function Products() {
    // const [listProduct,setListProduct] = useState([])
    const [formData,setFormData] = useState({
        name:'',
        brand:'',
        category:'',
        min:'',
        max:'',
        order:'',
        column:''
    })

    const [name,setName] = useState('')

    const { listProduct } = useSelector(({productReducer})=>{
        return {
            listProduct: productReducer.products
        }
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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
        listProduct?.map((product)=>{
            return <WrapItem key={product.id} onClick={()=>navigate(`/detail?id=${product.id}`,{state:{productId:product.id}})}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={'center'} shadow={"2xl"} m={2}>
                    <Image src={product.images} height={300} width={300}/>
                    <Center p={5} as={'button'} display={"flex"} flexDirection={'column'} background={"teal"} color={"white"}>
                        <Text>{product.price.toLocaleString('id',{ style: 'currency', currency: 'IDR' })}</Text>
                        <Text>{product.name}</Text>
                    </Center>
                </Box>
            </WrapItem>
        })

    const changeForm = ()=>{
        console.log(formData)
        let sort = formData.order!== '' && formData.column !== ''?'&_sort='+formData.column+"&_order="+formData.order:''
        let brand = formData.brand!==''?'&brand='+formData.brand:''
        let category = formData.category!==''?'&category='+formData.category:''
        Axios.get(API_URL+`/products?q=`+formData.name+brand+category+sort)    
        .then((res)=>{             
            dispatch(updateAction(res.data));
        }).catch((err)=>{
            console.log(err);
        })
    }

    const reset =()=>{
        setFormData({
            name:'',
            brand:'',
            category:'',
            min:'',
            max:''
        })
        setName('')
        dispatch(getProductAction());
    }

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
            <form>
            <Box p={10} shadow={"2xl"} flex={1} maxHeight={500} display={"flex"} flexDirection={"column"} gap={5} background="teal" color={"white"}>
                <Text>Filter</Text>
                <Input placeholder='Name' _placeholder={{color:'white'}} name="name" id="name" onChange={(el)=>setFormData({...formData, name:el.target.value})} value={formData.name}/>
                {/* <Input placeholder='Name' _placeholder={{color:'white'}} name="name" id="name" onChange={(el)=>setName(el.target.value)} value={name}/> */}
                <Select placeholder='Select Brand' name="brand" id="brand" onChange={(el)=>formData.brand=el.target.value}>
                    <option value='Mr. DIY'>Mr. DIY</option>
                    <option value='IKEA'>IKEA</option>
                    <option value='ACE'>ACE</option>
                </Select>
                <Select placeholder='Select Category' name="category" id="category" onChange={(el)=>formData.category=el.target.value}>
                    <option value='Livingroom'>Livingroom</option>
                    <option value='Bedroom'>Bedroom</option>
                    <option value='Kitchen'>Kitchen</option>
                </Select>
                <InputGroup gap={5}>
                    <Input placeholder='Minimum' _placeholder={{color:'white'}} name="min" id="min" onChange={(el)=>formData.min=el.target.value}/>
                    <Input placeholder='Maximum' _placeholder={{color:'white'}} name="max" id="max" onChange={(el)=>formData.max=el.target.value}/>
                </InputGroup>
                <InputGroup gap={5}>
                    <Select placeholder='Select Column' name="category" id="category" onChange={(el)=>formData.column=el.target.value}>
                        <option value='name'>Name</option>
                        <option value='price'>Price</option>
                    </Select>
                    <Select placeholder='Select Order' name="order" id="order" onChange={(el)=>formData.order=el.target.value}>
                        <option value='asc'>Asc</option>
                        <option value='desc'>Desc</option>
                    </Select>
                </InputGroup>
                <ButtonGroup gap={5}>
                    <Button colorScheme='green' onClick={()=>changeForm()}>Filter</Button>
                    <Button colorScheme='yellow' onClick={()=>reset()}>Reset</Button>
                </ButtonGroup>
            </Box>
            </form>
            <Wrap flex={3} p={10}>
                {/* {listProduct.length !== 0?listProduct:<WrapItem><Text>Tidak Ada Data</Text></WrapItem>} */}
                {printData()}
            </Wrap>
        </Box>
        
    </Flex>;
}

export default Products;