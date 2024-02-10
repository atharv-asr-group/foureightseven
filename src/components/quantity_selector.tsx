import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
import { Checkbox } from "@/components/ui/checkbox"
import { CheckboxWithText } from "./checkbox"
import QuantityCard from "./quantity_card"

const QuantitySelector=()=>{
    return(
        <div>
            <div className="flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 justify-center items-center">
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Quantity
    </h5>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <QuantityCard offer="10% off" quantity="1"></QuantityCard>
    <QuantityCard offer="14% off" quantity="2"></QuantityCard>
    <QuantityCard offer="15% off" quantity="3"></QuantityCard>
    <QuantityCard offer="17% off" quantity="6"></QuantityCard>

    </div>
    <div>
    <CheckboxWithText title="One Time Purchase" price="$199" ></CheckboxWithText>
    <CheckboxWithText title="Subscribe & Save" price="$185.07" ></CheckboxWithText>
    </div>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle w-full select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>

  </div>
</div>
<div>
    
</div>
        

</div> 
    )
}
export default QuantitySelector;
