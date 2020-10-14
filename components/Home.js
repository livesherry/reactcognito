import Link from 'next/link';
import {SignIn} from '../helpers/aws';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2'
import Router from 'next/router';

async function sign(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const userpassword = document.getElementById('userpassword').value;
    document.getElementById("sign").innerText = "Signing in...";
    const result = await SignIn(username, userpassword);
    if (result === 0){
        document.getElementById("sign").innerText = "Sign in";
        Swal.fire('Oops...', 'Pease check your username or password', 'error')
    }else if('signInUserSession' in result){
        const alert_token = result.signInUserSession.idToken.jwtToken;
        // const inSixty = 1/24;
        Cookies.set('name', username, { expires: 30 })
        Cookies.set('alert_token', alert_token, { expires: 30 })
        Router.push('/');
    }else{
        document.getElementById("sign").innerText = "Sign in";
        console.log("Problem")
    }
}

export default function Home(props){
    return (
        <>  
            <div className="container login-form">
                <p>Sign in with your username and password</p>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" required></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="userpassword" required></input>
                        {/* <p><Link href="/"><a href="#">Forgot your password?</a></Link></p> */}
                    </div>
                </form>
                    <button id="sign" class="btn btn-primary" onClick = {(e) => sign(e)}>Sign in</button>
                <p className="need-account"> Need and account? <Link href="/signup"><a href="#">Sign up</a></Link></p>
            </div>
        </>
    );
} 