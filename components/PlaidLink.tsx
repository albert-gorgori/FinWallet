import { useCallback, useEffect, useState } from "react";

import { Button } from "./ui/button";
import { PlaidLinkOptions } from "react-plaid-link";
import { StyledString } from "next/dist/build/swc";
import { useRouter } from "next/router";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const getLinkToken = async () => {
      //   const data = await createLinkToken(user);
      //   setToken(data?.linkToken);
    };
    getLinkToken();
  }, []);

  const onSuccess = useCallback(
    async (public_token: StyledString) => {
    //   await exchangePublicToken({ publicToken: public_token, user });
        router.push("/");
    },
    [user]
  );
  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };
  return (
    <>
      {variant === "primary" ? (
        <Button className="plaidlink-primary">Connect Bank</Button>
      ) : variant === "ghost" ? (
        <Button>Connect bank</Button>
      ) : (
        <Button>Connect bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
