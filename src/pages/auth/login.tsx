import { Button } from "../../components";
import { Input } from "../../components/Input";
import "../../App.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useLogin } from "./queries";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode, { JwtPayload } from "jwt-decode";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync, isError } = useLogin();

  useEffect(() => {
    if (isError) {
      toast.error("Error");
    }
  }, [isError]);

  const handleLogin = async () => {
    const { data } = await mutateAsync({ email, password });
   

    localStorage.setItem("access_token", data.access_token);
    const decoded  = jwt_decode<JwtPayload>(data.access_token)
    localStorage.setItem("username", decoded.sub || "");

    navigate("/");
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
  });

  return (
    <div className="bg-white text-black flex flex-col h-screen">
      <div className="pt-8">
        <img src="/react.svg" alt="" className="mb-4 max-w-xs m-auto" />
      </div>
      <div className="container h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-xs">
          <header className="px-10 pb-6">
            <h1 className="font-bold tracking-wide mt-6">Welcome back</h1>
          </header>

          <Input
            name="email"
            placeholder="Email address"
            value={email}
            className="mb-2"
            inputProps={{ onChange: (e) => setEmail(e.target.value) }}
          />
          <Input
            name="password"
            placeholder="Password"
            value={password}
            inputProps={{
              type: "password",
              onChange: (e) => setPassword(e.target.value),
            }}
          />
          <div className="mt-6">
            <Button maxWidth={true} onClick={handleLogin}>
              Continue
            </Button>
          </div>

          <div className="mt-4">
            <p>
              Dont't have an account?{" "}
              <Link to="/auth/register" className="text-green">
                Sign up
              </Link>
            </p>
          </div>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-8 border-0 bg-gray-300" />
            <span className="absolute text-xs px-4 -translate-x-1/2 bg-white left-1/2">
              OR
            </span>
          </div>

          <div className="mb-2">
            <Button
              maxWidth={true}
              social={true}
              onClick={() => loginWithGoogle()}
            >
              <img src="/google.svg" alt="" className="w-5 h-5 -ml-1 mr-3" />
              <span>Continue With Google</span>
            </Button>
          </div>

          <div className="mb-2">
            <Button maxWidth={true} social={true}>
              <img src="/microsoft.svg" alt="" className="w-5 h-5 -ml-1 mr-3" />
              <span>Continue With Microsoft Account</span>
            </Button>
          </div>

          <div className="mb-2">
            <Button maxWidth={true} social={true}>
              <img src="/apple.svg" alt="" className="w-5 h-5 -ml-1 mr-3" />
              <span>Continue With Apple</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="py-3 mx-auto text-sm text-green pt-20">
        Terms of user | Private Policy
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
