import { Button, Stack, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PasswordInput } from "../../components";

const bodySchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});
function SignInScreen() {
  const { register, control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(bodySchema),
  });

  return (
    <Stack css={{ justifyContent: "center", alignItems: "center" }}>
      <Stack
        direction="column"
        spacing={4}
        css={{ width: "100%", maxWidth: "480px" }}
      >
        <Stack direction="column" spacing={2}>
          <TextField
            {...register("email")}
            placeholder="이메일"
            slotProps={{
              input: {
                startAdornment: <EmailIcon css={{ marginRight: "8px" }} />,
              },
            }}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <PasswordInput value={value} onChange={onChange} />
            )}
          />
        </Stack>

        <Stack direction="column" spacing={2} css={{ alignItems: "center" }}>
          <Button
            onClick={handleSubmit(({ email, password }) => {
              console.log(email, password);
            })}
            css={{
              width: "100%",
              maxWidth: "240px",
              backgroundColor: "rgb(79 70 229)",
              color: "#FFFFFF",
            }}
          >
            Login
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { SignInScreen };
