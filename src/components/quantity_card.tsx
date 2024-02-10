
const QuantityCard=({offer,quantity}:any)=>{
    return(
        <div className="flex flex-col mt-6 text-gray-700 bg-orange-100 shadow-md bg-clip-border rounded-xl w-20 h-30 hover:bg-orange-200">
            
    <h5 className="block mb-2 font-sans justify-self-center text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {quantity}
    </h5>
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Set
    </h5>
    <p>{offer}</p>
  </div>
    )
}
export default QuantityCard