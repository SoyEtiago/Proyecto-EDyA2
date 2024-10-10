
import './index.css'

const Login = () => {
    return (
        <div>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1>Login</h1>
                <form action="">
                <div>
                <input type="email" />
                <label htmlFor="">Tu Email</label>
                </div>
                <div>
                    <div>
                    <input type="checkbox" name="" id=""/>
                    <label htmlFor="Remember Me"></label>
                    </div>
                    <span>Forgot password?</span>
                </div>
                <button type="submit">Login</button>
                <div>
                    <span>New Here?<link to='Register'>Create an Account</link></span>
                </div>
                </form>
            </div>
    </div>
    );
};