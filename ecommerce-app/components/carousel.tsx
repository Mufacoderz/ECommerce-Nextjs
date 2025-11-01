'use client'

import Stripe from "stripe"
import { Card } from "./ui/card"
import { useState ,useEffect } from "react"
import Image from "next/image"
interface Props{
    products: Stripe.Product[]
}

export const Carousel = ({products}: Props)=>{
    const [current, setCurrent] = useState<number>(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrent((prev)=> (prev+1)%products.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [products.length])

    const currenProduct = products[current]
    const price = currenProduct.default_price as Stripe.Price

    return <Card>{currenProduct.images && currenProduct.images[0] && (
        <div>
            <Image alt={currenProduct.name} src={currenProduct.images[0]} layout="fill" objectFit="cover"/>
        </div>
    )}</Card>
}