import {
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import ArrowBackSVG from "../../assets/arrow_back.svg?react";
import EmailSVG from "../../assets/mdi_email.svg?react";
import { PasswordTextField } from "../../components";

const yupSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
  })
  .required();

function SignUpScreen() {
  const navigator = useNavigate();

  const { register, control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "23",
      confirmPassword: "23",
    },
    resolver: yupResolver(yupSchema),
  });
  return (
    <Stack
      css={{
        width: "100%",
        maxWidth: "360px",
        padding: "80px 60px 144px 60px",
      }}
    >
      <Stack css={{ alignItems: "flex-start" }}>
        <IconButton onClick={() => navigator(-1)}>
          <ArrowBackSVG css={{ justifyContent: "flex-start" }} />
        </IconButton>
      </Stack>
      <Typography
        css={{ fontSize: "24px", textAlign: "center", margin: "32px 0" }}
      >
        Register new account
      </Typography>

      <Stack spacing="24px" css={{ width: "100%" }}>
        <Stack direction="row" spacing="8px">
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
          <Button css={{ height: "36px", alignSelf: "center" }}>
            <Typography>Check</Typography>
          </Button>
        </Stack>

        {/* password input */}
        <Stack spacing="8px">
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => {
              return <PasswordTextField value={value} onChange={onChange} />;
            }}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { value, onChange } }) => {
              return (
                <PasswordTextField
                  isConfirm
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />
        </Stack>
        <Button
          onClick={handleSubmit(({ email, password, confirmPassword }) => {
            console.log(email, password);
          })}
        >
          <Typography>Register</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export { SignUpScreen };
