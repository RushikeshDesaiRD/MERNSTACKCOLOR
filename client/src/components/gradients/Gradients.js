import React,{useEffect, Fragment} from 'react'
import  FullGradients  from "./FullGradients";
import Gradient from "./Gradient";
import { useDispatch, useSelector } from "react-redux";
import { getGradients } from "../../actions/gradientAction";
import {CopyToClipboard} from 'react-copy-to-clipboard';
export default function Gradients() {
    const dispatch=useDispatch();
    const gradients=useSelector((state) => state.gradient.gradients);
    const gradient=useSelector((state) => state.gradient.gradient)
    useEffect(() => {
        dispatch(getGradients())
        
    },[])
    return (
       <Fragment>
       { gradient && <FullGradients/> }
              <div classsName="columns is-multiline">
         { gradients.map( (item) =>(
                   <Gradient key={item._id} item={item}/>
               ))
            }
           </div>
          </Fragment>   
)
}
