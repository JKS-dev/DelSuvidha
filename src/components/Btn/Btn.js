export const SimpleBtn = (params) => {
    let text, Disabled; 
    console.log(params.jks)
   [text , Disabled] =params.jks
    return(
       <button disabled={Disabled} className={Disabled?"text-red-700":"text-blue-600"}>
        {text}
       </button>
    )
}