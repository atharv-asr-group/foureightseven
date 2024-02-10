import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxWithText({title,price}:any) {
  return (
    <div className="items-top flex space-x-2 p-4">
      <Checkbox id="terms1" />
      <div className="flex justify-between gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {price}
        </label>
        
      </div>
    </div>
  )
}
