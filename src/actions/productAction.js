import Axios from 'axios';
import { API_URL } from "../helper/utils"

export const getProductAction = ()=>{
    return async (dispatch)=>{
        try {
            let res = await Axios.get(API_URL + '/products')
            dispatch({
                type:"ADDPRODUCT",
                payload: res.data        
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateAction = (data)=>{
    return {
        type:"ADDPRODUCT",
        payload:data
    }
}