import React,{useEffect, useState,Fragment} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getGradients, createGradient, deleteGradient,updateGradient } from "../../actions/gradientAction";
import styled from 'styled-components';
const GradientBox = styled.div`
background-image:linear-gradient(
    ${props => props.direction},
     ${(props) => props.start},
      ${(props) => props.end}
      
    );
`;


const GradientChips = styled.div`
align-items:center;
justify-content:center;
display:flex;
width:120%;
height:100px;
background-image:linear-gradient(
    ${props => props.direction},
     ${(props) => props.start},
      ${(props) => props.end}
      
    );
& div {
    display:none;
}
&:hover div{
    display:block;
}
`;
export default function AddGradient() {

    const dispatch=useDispatch()
    const gradients=useSelector((state) => state.gradient.gradients);
    const [name, setName]=useState("")
    const [startColor, SetStartColor]=useState("");
    const [endColor, SetEndColor]=useState("");
    const [direction, setDirection]=useState("");
    const [currentGradient, setCurrentGradient]=useState(null)
    const [positions, setPositions]=useState([
        "to bottom","to top","to left","to right",
        "to top left","to top right",
        "to bottom left",
        "to bottom right"
    ]);
    useEffect(() => {
       if(currentGradient != null){
          setName(currentGradient.colors.name);
           setDirection(currentGradient.colors.direction);
            SetStartColor(currentGradient.colors.start);
             SetEndColor(currentGradient.colors.end);

       }
       else{
           setName("");
           setDirection("");
            SetStartColor("");
             SetEndColor(""); 
       }
    },[currentGradient])



    useEffect(()=>{
       dispatch(getGradients())
    },[]);




    const editGradient = gradient =>{
        setCurrentGradient(gradient)
    }




    const onSubmit = (e) =>{
        e.preventDefault();
        const gradient={
            name:name,
            colors:{
                direction:direction,
                start:startColor,
                end:endColor,

            },
            
        };
            if(currentGradient == null){
                     dispatch(createGradient(gradient));
                      setName("");
                     setDirection("");
                     SetStartColor("");
                     SetEndColor(""); 
            } else{
                 dispatch(updateGradient(Object.assign(currentGradient, gradient)))
            }
            setCurrentGradient(null)
       
    }




    return (
        <div className="container py-4">
            <div className="columns">
                  <div className="column is-8">
                  {
                      gradients.map((gradient) => (
                        
                            <div key={gradient._id}  className="column is-3">  
                             <GradientChips 
                                direction={gradient.colors.direction}
                                start={gradient.colors.start}
                                end={gradient.colors.end}
                               className="box">
                               <div className="buttons">
                                   <button className="button is-rounded is-white is-small" onClick={() => editGradient(gradient)}>Edit</button>
                                   <button className="button is-rounded is-white is-small" onClick={() => dispatch(deleteGradient(gradient._id))}>Delete</button>
                                 </div> 
                               </GradientChips >  
                            </div> 
                      ))
                  }
                  </div>
                   <div className="column is-4"> 
                     <form onSubmit={onSubmit}>
                         <div className="box">
                               <div class="field">
                              <label class="label">Name</label>
                              <div class="control">
                               <input class="input"
                               value={name} onChange={(e) => setName(e.target.value)}
                               placeholder="Enter Your Gradient Color"
                                type="text" />
                               </div>
                               </div> 
                             <div class="field">
                              <label class="label">First Color</label>
                              <div class="control">
                               <input class="input"
                                 value={startColor} onChange={(e) => SetStartColor(e.target.value)}
                                type="text" placeholder="Enter Your First Color"/>
                               </div>
                               </div> 
                                 <div class="field">
                              <label class="label">Last Color</label>
                              <div class="control">
                               <input class="input"
                                value={endColor} onChange={(e) => SetEndColor(e.target.value)}
                                type="text" placeholder="Enter Your Last Color"/>
                               </div>
                               </div> 
                                          <div className="field">
                                              <div className="columns is-multiline">
                                              { startColor && endColor &&
                                                  positions.map((position) => (
                                                      <div className="column is-6">
                                                         <GradientBox 
                                                         direction={position} 
                                                         start={startColor}
                                                         end={endColor}
                                                          onClick={()=>setDirection(position)}
                                                         className="box has-text-white has-text-centered"
                                                         >
                                                         {position}
                                                           </GradientBox>
                                                      </div>
                                                  ))
                                              }
                                               </div>
                                          </div>

                               <br/>
                               <div class="field">
                               <div class="control">
                               {
                                   currentGradient ? (
                                       <Fragment>
                                        <button class="button is-link is-warning is-full-width">Update Grdaident</button>
                                         <button class="button is-link is-dark ml-1 is-full-width" onClick={() => setCurrentGradient(null)}>Cancle</button>
                                         </Fragment>
                                   ):(
                                         <button class="button is-link is-primary is-full-width">Create Grdaident</button>
                                   )
                               }
                             </div>
                               
                             </div>
                      </div>
                     </form>
                   </div>
             </div>
        </div>
    )
}
