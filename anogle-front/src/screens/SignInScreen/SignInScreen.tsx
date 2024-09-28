import { Button, Stack, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import * as yup from "yup";
import { PasswordInput } from "../../components";
import { userRepository } from "../../repositories/user-repository";
import Anogle from "../../assets/anolge.jpg";

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

  const { mutateAsync } = useMutation({
    mutationFn: userRepository.signIn,
  });

  return (
    <Stack
      css={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "144px",
      }}
    >
      <Stack
        direction="column"
        spacing={4}
        css={{ width: "100%", maxWidth: "480px" }}
      >
        <Typography
          variant="h5"
          css={{ color: "#FFFFFF", textAlign: "center" }}
        >
          Anogle에 오신 것을 환영합니다.
        </Typography>
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
              const token = await mutateAsync({ email, password });
              console.log(token);
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
