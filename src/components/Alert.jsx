import React from "react";

const Respuesta = ({error}) =>{
    return(
        <>
        {error && <p className="pError">{error}</p>}
        </>
    )
}
export default Respuesta