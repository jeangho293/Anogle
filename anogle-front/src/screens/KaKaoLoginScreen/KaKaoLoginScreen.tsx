import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useKaKaoLogin } from "../../libs";
import { CircularProgress } from "@mui/material";

function KaKaoLoginScreen() {
  // state
  const [kakaoLogin, { loading }] = useKaKaoLogin();

  // hooks
  const [searchParams, _] = useSearchParams();

  // effect, memo...
  useEffect(() => {
    const code = searchParams.get("code") || "";
    kakaoLogin({ code });
  }, [kakaoLogin, searchParams]);

  // calculate values

  return loading ? <CircularProgress /> : <></>;
}

export { KaKaoLoginScreen };
