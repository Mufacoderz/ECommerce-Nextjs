
import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  })

  console.log(products)
  return(
      <div>
        <section>
          <div>

            <div>
              <h2>Welcome to My Ecommerce</h2>
              <p>Discover the lastest product at the best prices</p>
              <Button asChild variant="default">
                <Link href="/products.tsx">Browse All Products</Link>
              </Button>
            </div>
            <Image 
              alt="Banner img/"
              width={450} 
              height={450} 
              src={products.data[0].images[0]}
            />
            
          </div>
        </section>
        <section>

        </section>
      </div>
  );
}
