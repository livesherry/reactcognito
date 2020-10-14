import {useState, useEffect} from 'react';
import Link from 'next/link';
import {getPairs, getSymbol, getIntervals, getIndicators, addAlert, updateAlert} from '../helpers/api';
import MultiSelect from "react-multi-select-component";
import { ToastContainer, toast } from 'react-toastify';

function update(token, alert_id, symbol, pair, interval, indicators, updateMessage, operation){
    let indi = [];
    indicators.forEach((element) => {
        indi.push(element.value);
    });
    if(operation === 'add'){
        addAlert(token, symbol, pair, interval, indi, updateMessage);
    }else if(operation === 'update'){
        updateAlert(token, alert_id, symbol, pair, interval, indi, updateMessage);
    }
}

export default function Update(props) {
    const [indicators, updateIndicators] = useState([]);
    const [pairs, updatePairs] = useState([]);
    const [symbols, updateSymbols] = useState([]);
    const [intervals, updateIntervals] = useState([]);
    const [selected, setSelected] = useState([]);
    const [message, updateMessage] = useState('');
    const notify = (message) => toast.success(message);
    const notifyDanger = (message) => toast.error(message);

    if (message === 'Alert added' || message==='Alert updated'){
        notify(message);
        document.getElementById('symbol').value = '';
        document.getElementById('interval').value = '';
    }else if(message === ''){}else{
        notifyDanger(message);
    }
    useEffect(() => {
        getPairs(updatePairs);
        getIntervals(updateIntervals);
        getIndicators(updateIndicators);
        if('alertPresent' in props.query){
            const ind = props.query.indicators.split("||");
            let indi = [];
            ind.forEach((element) => {
                indi.push({label: element, value: element});
            });
            setSelected(indi);
            getSymbol(props.query.pair, updateSymbols)
            document.getElementById('symbol').value = props.query.symbol;
            document.getElementById('interval').value = props.query.interval;
        }
    }, []);
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
            <div className="container update-form">
                <h1><center>Create alert</center></h1>
                <form>
                <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputState">Type</label>
                            
                            <select id="pair" class="form-control" onChange={(e) => {
                                if(e.target.value !== ''){
                                    getSymbol(e.target.value, updateSymbols);
                                }
                                }}>
                                {'alertPresent' in props.query ? <option>{props.query.pair}</option> : <option></option>}
                                {pairs.length > 0 ? pairs.map((type, index) => {
                                return (<option key={index}>{type}</option>);
                                }) : <option></option>}
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputState">Symbol</label>
                            <select id="symbol" class="form-control">
                            {'alertPresent' in props.query ? <option>{props.query.symbol}</option> : <option></option>}
                            {symbols.length > 0 ? symbols.map((symbol, index) => {
                                return (<option key={index}>{symbol}</option>);
                                }) : <option></option>}
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputState">Interval</label>
                            <select id="interval" class="form-control">
                            {'query' in props ? <option>{props.query.interval}</option> : <option></option>}
                                {intervals.map((interval, index) => {
                                    return (<option key={index}>{interval}</option>);
                                })}
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label for="inputState">Indicators</label>
                            <div class="autocomplete">
                            <MultiSelect
                                options={indicators}
                                value={selected}
                                onChange={setSelected}
                                labelledBy={"Select"}
                            />
                            </div>
                        </div>
                    </div>
                </form>
                    <Link href='/'><button type="submit" class="btn btn-light">Cancel</button></Link>{'alertPresent' in props. query ? <button type="submit" class="btn btn-success" onClick={(e)=> update(props.alert_token, props.query.alert_id, document.getElementById('symbol').value, document.getElementById('pair').value, document.getElementById('interval').value, selected, updateMessage, 'update')}>Submit</button> :<button type="submit" class="btn btn-success" onClick={(e)=> update(props.alert_token, '', document.getElementById('symbol').value, document.getElementById('pair').value, document.getElementById('interval').value, selected, updateMessage, 'add')}>Submit</button>}
            </div>
        </>
    );
}