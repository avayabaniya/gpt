import { Link } from 'react-router-dom';
import '../App.css'
import { Button } from '../components';

function Home() {
    return (
        <div className="container flex flex-col h-screen">
            <div className='flex flex-col h-full items-center justify-center text-center'>

                <img src="/react.svg" alt="" className="mb-4 max-w-xs"/>

                Welcome to ChatGPT <br/>
                Login with your OpenAI account to continue

                <div className='my-4'>
                    <Link to={`auth/login`}>
                        <Button>Log in</Button>
                    </Link>
                    &nbsp;
                    <Link to={`auth/register`}>
                        <Button>Sign up</Button>
                    </Link>
                </div>

            </div>
        
            <div className='py-3 mx-auto text-sm'>
                Terms of user | Private Policy
            </div>
        </div>
    );
}

export default Home

