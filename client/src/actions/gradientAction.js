import {
    GET_GRADIENTS,
    CREATE_GRADIENT, 
 UPDATE_GRADIENT, 
 DELETE_GRADIENT, 
 SET_GRADIENT, 
 REMOVE_GRADIENT, 
 DOWNLOAD_GRADIENT 
} from "../constants/types";

import axios from "axios";

const url="http://localhost:8000/gradients";



export const getGradients = () => async (dispatch) =>{
   const result = await axios.get(url);

   

    dispatch({

    type:GET_GRADIENTS,
    payload:result.data,
  
    });

};
export const createGradient = (gradient) => async (dispatch) =>{
     const result =await axios.post(url,gradient);
     dispatch({
         type:CREATE_GRADIENT,
        payload:result.data
     })
};




export const updateGradient = gradient => async dispatch =>{
   const result  = await axios.put(`http://localhost:8000/gradients/${gradient._id}`, gradient);
   dispatch({
       type:UPDATE_GRADIENT,
       payload:result.data,
   });

}






export const deleteGradient = (id) => async (dispatch) =>{
     await axios.delete(`http://localhost:8000/gradients/${id}`);
     dispatch({
         type:DELETE_GRADIENT,
         payload:id,
      
     })
};










//gradientAction
//DOWNLOAD_GRADIENT


export const downloadGradient=(gradientName)=>async (dispatch) =>{
    window.open(`http://localhost:8000/gradients/download/${gradientName}`);
    dispatch({
        type:DOWNLOAD_GRADIENT,
        payload:gradientName,
    })
}
export const setGradient=(gradient)=>({
    type:SET_GRADIENT,
    payload:gradient
});
export const removeGradient=()=>({
    type:REMOVE_GRADIENT,
    
})
