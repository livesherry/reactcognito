import {signOut} from '../helpers/aws';
import Cookies from 'js-cookie';
import Router from "next/router";

function logout(e){
    Cookies.remove('name');
    Cookies.remove('alert_token');
    signOut();
    Router.push('/login');
}

export default function NavBar(props) {
    return (
        <nav className="navbar navigation" style={{backgroundColor: "#026BFF"}}>
                <a className="navbar-brand" href="#" >
                    <img src="/logo.png" width="240" height="60" alt="" loading="lazy"></img>
                </a>
                <span className="navbar-text">
                    {props.alert_token !== undefined ? props.name : null} &nbsp;&nbsp; {props.alert_token !== undefined ? <button type="submit" className="btn btn-primary" onClick={(e) => logout(e)}>Logout</button> : null}
                </span>
        </nav>
    );
}