import Image from "next/image";
import QuantitySelector from "@/components/quantity_selector";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Accordionsection from "@/components/accordion";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
        <img src="left_carousal.webp" alt="" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-orange-100">
          
            <h1 className="text-2xl mb-4 pt-10">“Drizzle” & “Sizzle”</h1>
            <h1 className="text-3xl mb-4">Extra Virgin Olive Oil</h1>
            <div></div>
            <QuantitySelector/>
            
        <Accordionsection></Accordionsection>

          </div>
        </div>
      </div>
    
    );
}
