import { Button } from "../../components";
import { Input } from "../../components/Input";
import "../../App.css"
import { useGoogleLogin } from "@react-oauth/google";


function Login () {


    // const loginWithGoogle = () => {
    //     alert("googlr")
    // }

    const loginWithGoogle = useGoogleLogin({
        onSuccess: codeResponse => console.log(codeResponse)
      });

    return(

            <div className="bg-white text-black flex flex-col h-screen">
                    <div className="pt-8">
                        <img src="/react.svg" alt="" className="mb-4 max-w-xs m-auto"/>
                    </div>
                <div className="container h-full flex flex-col justify-center items-center text-center">

                    <div className="max-w-xs">
                        <header className="px-10 pb-6">
                            <h1 className="font-bold tracking-wide mt-6">Welcome back</h1>
                        </header>

                        <Input name="email" placeholder="Email address" value="" />
                        <div className="mt-6">
                            <Button maxWidth={true}>Continue</Button>
                        </div>
                        
                        <div className="mt-4">
                            <p>Dont't have an account? <a href="#" className="text-green">Sign up</a></p>
                        </div>

                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-full h-px my-8 border-0 bg-gray-300" />
                            <span className="absolute text-xs px-4 -translate-x-1/2 bg-white left-1/2">
                                OR
                            </span>
                        </div>
                        
                        <div className="mb-2">
                            <Button maxWidth={true} social={true} onClick={() => loginWithGoogle()}>
                                <img src="/google.svg" alt="" className="w-5 h-5 -ml-1 mr-3"/>
                                <span>Continue With Google</span>
                            </Button>
                        </div>
                        
                        <div className="mb-2">
                            <Button maxWidth={true} social={true}>
                                <img src="/microsoft.svg" alt="" className="w-5 h-5 -ml-1 mr-3"/>
                                <span>Continue With Microsoft Account</span>
                            </Button>
                        </div>

                        <div className="mb-2">
                            <Button maxWidth={true} social={true}>
                                <img src="/apple.svg" alt="" className="w-5 h-5 -ml-1 mr-3"/>
                                <span>Continue With Apple</span>
                            </Button>
                        </div>


                    </div>  
                </div>
                <div className='py-3 mx-auto text-sm text-green pt-20'>
                        Terms of user | Private Policy
                </div>
            </div>
        
    );
}

export default Login
