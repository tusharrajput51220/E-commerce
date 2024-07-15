import { Suspense, useContext, useEffect } from "react";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import { WixClientContext } from "./context/wixContext";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products } from "@wix/stores";
import { useWixClient } from "./hooks/useWixClient";
import { wixClientServer } from "./lib/wixClientServer";

const HomePage = async () => {
  // const wixClient=useWixClient()
  // useEffect(() => {
  //   const getProducts=async()=>{
  //     // console.log(wixClient.products.queryProducts().find())
  //     const  res = await wixClient.products.queryProducts().find();
  //     // console.log(res)
  //   }
  //   getProducts()
  // },[wixClient])

  // const wixClient=await wixClientServer()
  // const  res = await wixClient.products.queryProducts().find();
  // console.log(res)

//   NEXT_PUBLIC_MY_NEXT_APP_CLIENT_ID=19a2bc8d-409e-43e6-91bb-3fdbbea064d7
// FEATURED_PRODUCTS_CATEGORY_ID=f89a6ef4-9296-b75e-a80a-5d67ad851e1c

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <Suspense fallback={"loading"}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
