import Link from 'next/link';
import {signUp} from '../helpers/aws';

async function sign(e){
    console.log("inside")
    e.preventDefault();
    const username = document.getElementById('username').value;
    const userpassword = document.getElementById('userpassword').value;
    const email = document.getElementById('email').value;
    const chatid = document.getElementById('chatid').value;
    const referralid = document.getElementById('referralid').value;
    console.log(username + " " + userpassword)
    const result = await signUp(username, userpassword, email, chatid, referralid);
    console.log(result);
}

export default function SignUp(props){
    return (
        <>  
            <div className="container signup-form">
                <p>Sign up with new account</p>
                <form>
                    <div class="form-group">
                        <label htmlFor="username">Username<sup>*</sup></label>
                        <input type="text" class="form-control" id="username" required></input>
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email address<sup>*</sup></label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required></input>
                    </div>
                    <div class="form-group">
                        <label htmlFor="userpassword">Password<sup>*</sup></label>
                        <input type="password" class="form-control" id="userpassword" required></input>
                    </div>
                    <div class="form-group">
                        <label htmlFor="chatid">Chat Id<sup>*</sup></label>
                        <input type="text" class="form-control" id="chatid" required></input>
                    </div>
                    <div class="form-group">
                        <label htmlFor="referralid">Referral Id</label>
                        <input type="text" class="form-control" id="referralid"></input>
                    </div>
                </form>
                    <button onClick = {(e) => sign(e)} class="btn btn-primary">Sign up</button>
                <p className="need-account"> Already have an account? <Link href="/"><a href="#">Sign in</a></Link></p>
            </div>
        </>
    );
} 