import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { removeGradient } from "../../actions/gradientAction";
//removeGradient
export default function FullGradients() {
    const dispatch = useDispatch()
     const gradient=useSelector((state) => state.gradient.gradient);
     const { colors }=gradient;
     console.log(colors)
    return (
        <div className="gradient-full animate__animated animate__zoomIn" style={{
            backgroundImage:`linear-gradient(${ colors.direction } , ${ colors.start }, ${ colors.end })`
        }}
        onClick={() => dispatch(removeGradient())}
        >
            
        </div>
    )
}
