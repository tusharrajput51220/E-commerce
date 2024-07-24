"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "../hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "../hooks/useCartStore";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();

  // Temporary
  // const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen(!isProfileOpen);
    }
  };

  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  // console.log(cart);

  const handleLogOut = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  // Ref for the cart modal
  const cartModalRef = useRef<HTMLDivElement>(null);

  // Close cart modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartModalRef.current &&
        !cartModalRef.current.contains(event.target as Node)
      ) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
        // onClick={login}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 bg-white left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer" onClick={handleLogOut}>
            {isLoading ? "Logging Out" : "Logout"}
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer "
        />
        <div
          className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex 
                items-center justify-center"
        >
          {counter}
        </div>
      </div>
      {isCartOpen && (
        <div ref={cartModalRef}>
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavIcons;
