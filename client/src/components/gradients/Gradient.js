import React from 'react'
import { downloadGradient, setGradient } from "../../actions/gradientAction";
import { useDispatch } from "react-redux";
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Gradient= (props) => {
  const dispatch=useDispatch()
   
    return (

        <div className="column is-4">
    
           <div className="box">
                            <div className="columns">
                            <div className="column is-6">
                              {props.item.name}   
                            </div>
                            <div className="column is-6 has-text-right">
                               <div className="buttons">
                                    <button className="button is-small is-warning" onClick={() => dispatch(downloadGradient(props.item.name)) }> <span class="material-icons">system_update_alt</span> Download </button>
   <button className="button is-small is-primary" ><CopyToClipboard text={`background-image:linear-gradient(${props.item.colors.direction},${props.item.colors.start}, ${props.item.colors.end})`}><span class="material-icons">content_copy</span></CopyToClipboard> </button>                                  
                                </div>
                              
                            </div>
                           </div>
                          
                      <div className="gradient mb-3" onClick={() => dispatch(setGradient(props.item))}
                       style={{backgroundImage:`linear-gradient(${props.item.colors.direction},${props.item.colors.start}, ${props.item.colors.end}`}}>
                      
                   </div>


                   <div className="columns">
                      <div className="column is-6 has-text-right">
                         <span className="tag is-dark mr-2">{props.item.colors.start}</span>
                        <span className="tag is-dark mr-2">{props.item.colors.end}</span>
                      </div>
                      <div className="column">
                         { props.item.downloads} Downloads
                      </div>
                  </div>
             </div>
      
        </div>
      
    )
   
}
export default Gradient;
