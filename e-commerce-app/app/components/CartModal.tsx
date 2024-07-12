"use client"

import Image from "next/image"

const CartModal = () => {
    const cartItems = true
    return (
        <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col
         gap-6 z-20">
            {!cartItems ? (
                <div className="">Cart is empty!!</div>
            ) : (
                <div>
                    <h2 className="text-xl">Shopping Cart</h2>
                    {/* List */}
                    <div className="flex flex-col gap-8">
                        {/* Items */}
                        <div className="flex gap-4">
                            <div className="">
                                <Image src='/woman.png' alt="" width={72} height={96} className="object-cover rounded-md" />
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                {/* Top */}
                                <div className="">
                                    {/* Title */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                    </div>
                                    {/* Desc */}
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/* Bootom */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="">
                                <Image src='/woman.png' alt="" width={72} height={96} className="object-cover rounded-md" />
                            </div>
                            <div className="flex flex-col justify-between w-full">
                                {/* Top */}
                                <div className="">
                                    {/* Title */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product Name</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                    </div>
                                    {/* Desc */}
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/* Bootom */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Qty. 2</span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bootom */}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold mt-2">
                            <span>Subtotal</span>
                            <span>$49</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">Shipping and taxes calculated at checkout</p>
                        <div className="flex justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View cart</button>
                            <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartModal