import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./register";
import { usePostRegister } from "../../useQuery/useLogin";
import { useEffect } from "react";
import {
  resetMessage,
  showMessageError,
  showMessageSuccesss,
} from "../../feature/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import AlertCmp from "../../components/alert/Alert";

const defaultTheme = createTheme();

export default function SignUp() {
  const type = useSelector((state) => state.home.type);
  const showMess = useSelector((state) => state.home.showMess);
  const message = useSelector((state) => state.home.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
  });
  const { data, mutate } = usePostRegister();
  useEffect(() => {
    const cb = async () => {
      if (data) {
        await navigate("/dang-nhap");
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
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Màn hình đăng kí
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit((data) => {
                mutate(data, {
                  onSuccess: () => {
                    dispatch(showMessageSuccesss("Đăng kí thành công!"));
                    reset();
                  },
                  onError: (err) => {
                    dispatch(showMessageError(err.response.data.message));
                  },
                });
              })}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Nhập số điện thoại"
                    name="phone"
                    autoComplete="phone"
                    {...register("phone")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Nhập email"
                    name="email"
                    autoComplete="email"
                    {...register("mail")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Nhập mật khẩu"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password")}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng kí
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/dang-nhap" variant="body2">
                    Đã có tài khoản , đăng nhập
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
    </>
  );
}
