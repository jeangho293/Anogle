import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useGoogleLogin } from "../../libs";
import { CircularProgress } from "@mui/material";

function GoogleLoginScreen() {
  const [googleLogin, { loading }] = useGoogleLogin();
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code") || "";
    googleLogin({ code });
  }, [searchParams, googleLogin]);

  return loading ? <CircularProgress /> : <></>;
}

export { GoogleLoginScreen };
