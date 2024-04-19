import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLoginPost } from "../../useQuery/useLogin";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import {
  resetMessage,
  showMessageError,
  showMessageSuccesss,
} from "../../feature/homeSlice";
import AlertCmp from "../../components/alert/Alert";

const defaultTheme = createTheme();

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const type = useSelector((state) => state.home.type);
  const showMess = useSelector((state) => state.home.showMess);
  const message = useSelector((state) => state.home.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });
  const { data, mutate } = useLoginPost();
  useEffect(() => {
    const cb = async () => {
      if (data) {
        await localStorage.setItem("accessToken", data.accessToken);
        await localStorage.setItem("refreshToken", data.refreshToken[0]);
        await localStorage.setItem("mail", data.mail);
        await localStorage.setItem("userId", data.user);
        await navigate("/");
      }
    };
    cb();
  }, [data]);
  useEffect(() => {
    let timeoutId;
    if (showMess) {
      timeoutId = setTimeout(() => {
        dispatch(resetMessage());
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showMess]);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
      <div className="p-8">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="h1" variant="h5">
                Đăng nhập
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit((data) => {
                  mutate(data, {
                    onSuccess: () => {
                      dispatch(showMessageSuccesss("Đăng nhập thành công!"));
                      reset();
                    },
                    onError: (err) => {
                      dispatch(showMessageError(err.response.data.message));
                    },
                  });
                })}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Nhập email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  {...register("mail")}
                />
                <div className="relative">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    {...register("password")}
                    name="password"
                    label="Nhập mật khẩu"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                  />
                  <div
                    onClick={handleClickShowPassword}
                    className="absolute top-[30px] right-[10px] cursor-pointer"
                  >
                    {" "}
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </div>
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Đăng nhập
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      to="/dang-ki"
                      variant="body2"
                      className="hover:text-blue-800 transition-all"
                    >
                      Chưa có tài khoản, đăng kí
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
        {showMess && (
          <div className="z-[1000000]  fixed right-4 bottom-10">
            <div className="w-[400px]">
              <AlertCmp type={type} message={message} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
