import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = () => {
  let refreshToken;

  try {
    const cookieStore = cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (err) {
    console.log(err);
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
      //   services
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_MY_NEXT_APP_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};
