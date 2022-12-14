import { Button } from "@chakra-ui/react";
import  Axios  from "axios";
import { useEffect, useState } from "react";
const API_GMS = "https://api.mygms.com/v1/people/search-by-nij?key=AYKhSvUfrV1D2Uj2SXUH6kgupXrf7fX01t4yQ5Tn5PNf2OL2&nij="
const JSON_GMS = "http://localhost:2500"
function Test() {
    const [nij,setNij] = useState("020001")
    const [status,changeStatus] = useState(true)

    useEffect(()=>{
        lastNij()
    },[])

    useEffect(()=>{
        if(!status){
            const intervalId = setInterval(getFromGMS, 500);
            return () => {
                clearInterval(intervalId);
            };
        }
    },[status])

    const lastNij = ()=>{
        Axios.get(JSON_GMS+`/gms?_limit=1&_sort=nij&_order=desc`)
            .then((res)=>{             
                setNij(res.data[0].nij)
            }).catch((err)=>{
                console.log(err);
            })
    }

    const changeStts = (stts)=>{
        if(stts)
            changeStatus(true)
        else
            changeStatus(false)
            
    }

    const getFromGMS= ()=>{
        setNij((prev)=>{
            let add = parseInt(prev)+1
            let next = "0"+add.toString()
            Axios.get(API_GMS+next)    
            .then((res)=>{             
                setToJSON(res.data.result)
            }).catch((err)=>{
                console.log(err);
            })
            return next
        })
        
    }

    const setToJSON= (data)=>{
        data['id'] = data.mygms_id
        Axios.post(JSON_GMS+ `/gms`,data,{
                headers: {
                    // Overwrite Axios's automatically set Content-Type
                    'Content-Type': 'application/json'
                }
            })
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>console.log(err))
    }
    return ( <>
            {nij}
            <Button onClick={()=>changeStts(false)}>Start</Button>
            <Button onClick={()=>changeStts(true)}>Stop</Button>
            </> );
}

export default Test;