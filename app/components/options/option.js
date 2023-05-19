import Image from "next/image";
import { RadioGroup, RadioGroupItem  } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { useEffect, useState } from "react";


const Option = ({ option, setSelectedOptions }) => {

  const [activeOption, setActiveOption] = useState(option.values[0])

  useEffect(() => {
    setSelectedOptions((selectedOptions) => ({...selectedOptions, [option.name]: activeOption?.name}));
  }, [activeOption, option.name, setSelectedOptions])

  useEffect(() => {
    console.log(option)
  }, [option])

  return(
    <div>
      <div className="flex flex-col justify-center relative z-10">
          <Label>
            {option?.name}:{" "}
            <span>
              {activeOption?.name || "Choose One"}
            </span>
          </Label>
          <RadioGroup defaultValue={activeOption} onValueChange={(value) => setActiveOption(value)}>
            <div className="grid grid-cols-5 gap-3 mt-2">
                {option.values.map((value, i) => (
                   <RadioGroupItem key={i} value={value} id={value.id} >
                    {value.image && (
                      <div className="relative h-16 w-16 rounded-sm bg-white flex items-center justify-center">
                          <Image
                            src={value.image.file.url}
                            alt={value.name}
                            fill
                            className="object-cover object-center rounded-sm w-full h-full"
                          />
                      </div>
                    )}
              
                    {!value.image && (
                      <div className="text-xs md:text-base uppercase w-full h-full py-3 rounded-sm bg-white relative flex items-center justify-center">
                        {value.name}
                      </div>
                    )}
                  </RadioGroupItem>
                ))}
            </div>
          </RadioGroup>
               
      
      </div>
    </div>
  )
}

export default Option;
