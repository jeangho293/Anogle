import { useEffect } from "react";
import { useGoogleLogin } from "../../libs";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function GoogleLoginScreen() {
  // hooks
  const { hash } = useLocation();
  const [googleLogin, { loading }] = useGoogleLogin();

  useEffect(() => {
    const accessToken = hash.split("&")[0].split("=")[1];

    googleLogin({ accessToken });
  }, [googleLogin, hash]);
  return loading ? <CircularProgress /> : <></>;
}

export { GoogleLoginScreen };
