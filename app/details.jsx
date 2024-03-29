'use client'

import { useContext, useEffect, useState } from 'react'
import { useOptions, useVariant } from '@/lib/swell/hooks'
import { StorefrontContext } from '@/provider/storefront-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Label } from "@/components/ui/label"
import Option from "@/app/components/options/option"


const Details = ({ product }) => {

  const { addItem, getCart, toggleCart } = useContext(StorefrontContext)

  const [loading, setLoading] = useState(false)

  const { id } = product;
  const { options } = useOptions(product)
  const [selectedOptions, setSelectedOptions] = useState({});
  const [purchaseOptions, setPurchaseOptions] = useState({})
  const [purchasePlan, setPurchasePlan] = useState(product.purchase_options.subscription?.plans[0].id)
  const [purchaseType, setPurchaseType] = useState('standard')
  const { variant } = useVariant(product, selectedOptions)

  useEffect(() => {
    console.log('variant', variant)
  }, [variant])



  useEffect(() => {
    const handlePurchaseOptions = () => {
      if (purchaseType === 'subscription') {
        setPurchaseOptions({
          type: 'subscription',
          plan_id: purchasePlan,
        })
      } else {
        setPurchaseOptions({
          type: 'standard',
        })
      }
    }

    handlePurchaseOptions()
  }, [purchaseType, purchasePlan])


  return (
    <div className="flex flex-col justify-between">

        {options && (
          <div className="relative flex flex-col space-y-5">
            {options.map((option) => (
               <Option key={option.id} option={option} setSelectedOptions={setSelectedOptions} />
            ))}
          </div>
        )}

        {product.purchase_options.subscription && (
          <Tabs defaultValue="subscription" className="mt-10 w-full h-full min-h-[200px]">
            <TabsList className="w-full grid grid-cols-2 gap-5">
              <TabsTrigger value="subscription" onClick={() => setPurchaseType('subscription')} className="col-span-1 text-xs md:text-base">Subscribe</TabsTrigger>
              <TabsTrigger value="standard" onClick={() => setPurchaseType('standard')} className="col-span-1 text-xs md:text-base">One-Time</TabsTrigger>
            </TabsList>
            <TabsContent value="subscription">
              <Label>Delivery Frequency</Label>
              {product.purchase_options.subscription && (
                <div className="flex flex-col space-y-5">
                  <Select defaultValue={`${product.purchase_options.subscription?.plans[0].id}`} onValueChange={setPurchasePlan}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                    {product.purchase_options.subscription?.plans?.map((option, i) => {
                      return (
                        <SelectItem key={i} value={option.id}>
                          {option.name} - ${option.price}
                        </SelectItem>
                      )
                    })}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </TabsContent>
            <TabsContent value="standard">
              <div className="hidden">
              <p>Save 10% by subscribing</p>
              </div>
            </TabsContent>
          </Tabs>
          
        )}


      
      <div className="flex w-full mt-5 md:mt-10">
        <button 
          type="button"
          className="w-full rounded-sm bg-white border-4 border-black text-black text-xl uppercase font-bold px-3 py-5 shadow-md" 
          onClick={() => {
            setLoading(true)
            addItem({product_id: id, quantity: 1, variant_id: variant?.variant_id, purchase_option: purchaseOptions}).then(
              () => {
                getCart().then(
                  () => {
                    setLoading(false)
                    toggleCart(true)
                  }
                );
              }
            )
          }}
        >
          {loading ? "Adding to cart..." : `Add to Cart`}
        </button>
      </div>
    </div>
 
  );
}

export default Details;