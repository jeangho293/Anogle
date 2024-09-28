import { Button, Stack, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { PasswordInput } from "../../components";
import { userRepository } from "../../repositories/user-repository";

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

  const data = useMutation({
    mutationFn: userRepository.signIn,
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
            onClick={handleSubmit(async ({ email, password }) => {
              // TODO: libs로 이동시켜야겠다.
              const a = data.mutate({ email, password });
              console.log({ email, password });
              console.log(a);
            })}
            css={{
              width: "100%",
              maxWidth: "240px",
              backgroundColor: "rgb(79 70 229)",
              color: "#FFFFFF",
            }}
          >
            로그인
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export { SignInScreen };
