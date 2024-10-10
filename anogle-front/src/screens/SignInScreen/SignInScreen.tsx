import {
  Button,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import AnogleLogoSVG from "../../assets/anogle_logo.svg?react";
import EmailSVG from "../../assets/mdi_email.svg?react";
import { useForm, Controller } from "react-hook-form";
import { PasswordTextField, SocialLoginButtonGroup } from "../../components";
import { useSignIn } from "../../libs";

const yupSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function SignInScreen() {
  const navigator = useNavigate();
  // TODO: loading 시간 지현에 따른 로딩바 만들자
  const [signIn, { loading }] = useSignIn();

  const { register, handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(yupSchema),
  });

  return (
    <Stack
      css={{
        width: "100%",
        maxWidth: "360px",
        padding: "80px 60px 144px 60px",
        alignItems: "center",
      }}
    >
      <AnogleLogoSVG />

      <Typography css={{ fontSize: "24px", margin: "40px 0" }}>
        Sign in your account
      </Typography>

      <Stack spacing="16px" css={{ width: "100%" }}>
        <TextField
          {...register("email")}
          placeholder="email"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailSVG />
                </InputAdornment>
              ),
            },
          }}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => {
            return <PasswordTextField value={value} onChange={onChange} />;
          }}
        />
        <Stack css={{ alignItems: "center" }}>
          <Button
            onClick={handleSubmit(async ({ email, password }) => {
              signIn({ email, password });
              navigator("/");
            })}
            css={{ width: "160px" }}
          >
            <Typography>Sign in</Typography>
          </Button>
        </Stack>
      </Stack>

      <Divider
        css={{
          width: "100%",
          margin: "24px",
          "&::before, &::after": {
            borderColor: "#000000",
          },
        }}
      >
        or
      </Divider>

      <SocialLoginButtonGroup />

      <Typography
        css={{
          fontSize: "16px",
          margin: "24px 0 4px 0",
          color: "#B0B0B0",
          textDecoration: "underline",
        }}
      >
        forget your password?
      </Typography>
      <Typography css={{ fontSize: "16px" }}>
        need to{" "}
        <Link relative="path" to="../sign-up" css={{ color: "#69AFEF" }}>
          sign up!
        </Link>
      </Typography>
    </Stack>
  );
}

export { SignInScreen };
