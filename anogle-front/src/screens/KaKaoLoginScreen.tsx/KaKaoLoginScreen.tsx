import { useSearchParams } from "react-router-dom";

function KaKaoLoginScreen() {
  // hooks
  const [searchParams, _] = useSearchParams();

  // calculate values
  const code = searchParams.get("code");

  return <div>{code}</div>;
}

export { KaKaoLoginScreen };
