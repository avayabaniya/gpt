import { Button } from "../../components";
import { Input } from "../../components/Input";
import "../../App.css";
import { useGoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoogleOauthPayload, useGoogleOAuth, useRegister } from "./queries";
import { toast } from "react-toastify";
import jwt_decode, { JwtPayload } from "jwt-decode";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync, isError } = useRegister();
  const { mutateAsync : mutateAsyncGoogle } = useGoogleOAuth()

  useEffect(() => {
    if (isError) {
      toast.error("Error");
    }
  }, [isError]);

  const handleRegister = async () => {
    const { data } = await mutateAsync({ email, password });

    localStorage.setItem("access_token", data.access_token);
    const decoded = jwt_decode<JwtPayload>(data.access_token);
    localStorage.setItem("username", decoded.sub || "");

    navigate("/");
  };

  const loginWithGoogle =  useGoogleLogin({
    //ux_mode: "redirect",
    //redirect_uri: "http://localhost:8081/login/oauth2/code/google",
    onSuccess: async (codeResponse) => {
        console.log(codeResponse)
        console.log("data from google login")
        const { data } = await mutateAsyncGoogle(codeResponse as GoogleOauthPayload);

        console.log("data from backend")
        console.log(data)

        localStorage.setItem("access_token", data.access_token);
        const decoded  = jwt_decode<JwtPayload>(data.access_token)
        localStorage.setItem("username", decoded.sub || "");
    
        navigate("/");
    },
    flow: 'implicit',
  });

  return (
    <div className="bg-white text-black flex flex-col h-screen">
      <div className="pt-8">
        <img src="/react.svg" alt="" className="mb-4 max-w-xs m-auto" />
      </div>
      <div className="container h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-xs">
          <header className="pb-6">
            <h1 className="font-semibold mt-6">Create your account</h1>
          </header>

          <div className="mb-2">
            <Input
              name="email"
              placeholder="Email address"
              value={email}
              inputProps={{ onChange: (e) => setEmail(e.target.value) }}
            />
          </div>
          <div>
            <Input
              name="password"
              placeholder="Password"
              value={password}
              inputProps={{
                type: "password",
                onChange: (e) => setPassword(e.target.value),
              }}
            />
          </div>
          <div className="mt-6">
            <Button maxWidth={true} onClick={handleRegister}>
              Continue
            </Button>
          </div>

          <div className="mt-4">
            <p>
              Already have an account? &nbsp;
              <Link to="/auth/login" className="text-green">
                Log In
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
    </div>
  );
}

export default Register;
