import Link from 'next/link';
import {confirmSignUp} from '../helpers/aws';
import { Router } from 'next/router';
import Swal from 'sweetalert2'

async function sign(e){
    console.log("inside")
    e.preventDefault();
    const username = document.getElementById('username').value;
    const code = document.getElementById('code').value;
    console.log(username + " " + code)
    const result = await confirmSignUp(username, code);
    console.log(await result);
    if (result === 1) {
        Router.push('/login');
    }else{
        Swal.fire('Oops...', 'Please try again!', 'error')
    }
}

export default function Confirm(props){
    return (
        <>  
            <div className="container signup-form">
                <p>Sign up with new account</p>
                <form>
                    <div class="form-group">
                        <label htmlFor="username" >Username<sup>*</sup></label>
                        <input type="text" class="form-control" value={props.username} id="username" required></input>
                    </div>
                    <div class="form-group">
                        <label htmlFor="code" >Code<sup>*</sup></label>
                        <input type="text" class="form-control" id="code" required></input>
                    </div>
                </form>
                    <button onClick = {(e) => sign(e)} class="btn btn-primary">Confirm Account</button>
                <p className="need-account"> Already have an account? <Link href="/"><a href="#">Sign in</a></Link></p>
            </div>
        </>
    );
} 