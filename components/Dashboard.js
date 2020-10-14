import Link from "next/link";
import { useEffect, useState } from "react";
import {getAlerts, deleteAlert} from '../helpers/api';
import { ToastContainer, toast } from 'react-toastify';
import Router from "next/router";

function deleteThis(e, token, alert_id, updateMessage){
    deleteAlert(token, alert_id, updateMessage);
}

export default function Dashboard(props) {
    const [alerts, updateAlerts] = useState([]);
    const [, updateDeleted] = useState(false);
    const [message, updateMessage] = useState('');
    const notify = (message) => toast.success(message);
    useEffect(() => {        
        getAlerts(props.alert_token, updateAlerts);
    }, [])
    if (message !== ''){
        notify(message);
    }
    return (
        <>
        <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

            <div className="container dashboard">
                <h1><center>Your alerts</center></h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Pair</th>
                            <th scope="col">Interval</th>
                            <th scope="col">Indicators</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {alerts.length > 0 ? alerts.map((alert, index) => {
                            return (
                                <tr key={alert.alert_id}>
                            <td>{alert.symbol}</td>
                            <td>{alert.pair}</td>
                            <td>{alert.interval}</td>
                            <td> 
                            <a href="#" data-toggle="tooltip" data-placement="top" title={alert.indicators.join('\n')}>Hover to see</a>
                            </td>
                            <td><button type="button" onClick = {(e) => {
                                deleteThis(e, props.alert_token, alert.alert_id, updateMessage);
                                updateDeleted(alerts.splice(index, 1)); 
                            }} className="btn btn-danger">Delete</button></td>
                            <td><button type="button" className="btn btn-success" onClick={(e) => { 
                                console.log(alert)
                                Router.push({
                                    pathname: '/update',
                                    query: { alert_id: alert.alert_id, symbol: alert.symbol, interval: alert.interval, pair: alert.pair, indicators: alert.indicators.join('||'), alertPresent: true }
                                })}} >Update</button></td>
                        </tr>  
                            );
                        }) : null}
                        
                    </tbody>
                </table>
                <div className="button-container">
                    <Link href='/update'><button type="button" className="btn btn-primary create-button">CREATE</button></Link>
                </div>
            </div>
        </>
    );
}
