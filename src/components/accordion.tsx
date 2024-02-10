import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const Accordionsection=()=>{
    return(
        <div className="p-5">
            <Accordion type="single" collapsible defaultValue="item-1" orientation="horizontal">
        <AccordionItem value="item-1">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
            DRIZZLE: 500ML

Extra Virgin finishing oil made from olives that are picked early, when flavor is bold and antioxidants are highest. Made for eating, never heating.

SIZZLE: 750ML
Extra Virgin cooking oil made from mature, mid-season olives that yield a more mellow flavor. Use it every day, in every way.            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>Harvest</AccordionTrigger>
            <AccordionContent>
            DRIZZLE:
Harvested in October, before the olives have ripened fully. Picked by hand because young olives need a firm yank to loosen up.

SIZZLE:
Harvested in November and December, when the olives are more mature. They’re pretty laid back by this point, so it only takes a few shakes to get them off the branch.            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger>Use cases</AccordionTrigger>
            <AccordionContent>
            DRIZZLE:
A little Drizzle goes a long way! Use it on and around things like ice cream, pesto, popcorn, salads, sandwiches or even directly on your tongue (we won’t tell).

SIZZLE:
If you would put it in or on top of an oven, use sizzle. Chicken Cutlets, Sheet Pan Veggies, Fried Rice, or even Chocolate Chip Cookies! You name it, Sizzle sizzles it.            </AccordionContent>
        </AccordionItem>
        </Accordion>
        </div>
    )
}
export default Accordionsection