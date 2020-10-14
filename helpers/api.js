export async function getPairs(updatePairs){
    var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    const res = await fetch('https://wa7zrjcujb.execute-api.us-east-2.amazonaws.com/prod/type', requestOptions);
    const json = await res.json();
    updatePairs(json.body.types);
}

export async function getIntervals(updateIntervals){
    var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    const res = await fetch('https://wa7zrjcujb.execute-api.us-east-2.amazonaws.com/prod/interval', requestOptions);
    const json = await res.json();
    updateIntervals(json.body.intervals);
}

export async function getIndicators(updateIntervals){
    var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    const res = await fetch('https://wa7zrjcujb.execute-api.us-east-2.amazonaws.com/prod/indicator', requestOptions);
    const json = await res.json();
    const intervals = json.body.indicators;
    let intervals_dict = [];
    intervals.forEach((element) => {
        intervals_dict.push({label: element, value: element});
    });
    updateIntervals(intervals_dict);
}

export async function getSymbol(symbol, updateSymbols){
    var requestOptions = {
        method: "GET",
        redirect: "follow"
      };
    console.log(symbol)
    const res = await fetch('https://wa7zrjcujb.execute-api.us-east-2.amazonaws.com/prod/symbol?pair=' + symbol, requestOptions);
    const json = await res.json();
    updateSymbols(json.body.symbols);
}

export async function getAlerts(token, updateAlerts){
    const res = await fetch('https://wa7zrjcujb.execute-api.us-east-2.amazonaws.com/prod/alert/user', {
        Authorization: token,
        method: "GET",
        redirect: "follow"
    });
    const json = await res.json();
    console.log(json)
    if('body' in json){
        updateAlerts(json.body);
    }else{
        updateAlerts([]);
    }
}

export async function addAlert(token, symbol, pair, interval, indicators, updateMessage){
    const res = await fetch('https://wa7zrjcujb.execute-api.us-east-2.amazonaws.com/prod/alert/user', {
        Authorization: token,
        method: "POST",
        redirect: "follow",
        body: JSON.stringify({ 
            "symbol": symbol,
            "pair": pair,
            "interval": interval,
            "type": "message",
            "indicators": indicators
        }), 
          
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json"
        }
    })

    const json = await res.json();
    updateMessage(json.message);

}

export async function updateAlert(token, alert_id, symbol, pair, interval, indicators, updateMessage){
    const res = await fetch('https://wa7zrjcujb.execute-api.us-east-2.amazonaws.com/prod/alert/user', {
        Authorization: token,
        method: "PUT",
        redirect: "follow",
        body: JSON.stringify({ 
            "alert_id": alert_id,
            "symbol": symbol,
            "pair": pair,
            "interval": interval,
            "type": "message",
            "indicators": indicators
        }), 
          
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json"
        }
    })

    const json = await res.json();
    updateMessage(json.message);

}

export async function deleteAlert(token, alert_id, updateMessage){
    const res = await fetch('https://wa7zrjcujb.execute-api.us-east-2.amazonaws.com/prod/alert/user', {
        Authorization: token,
        method: "DELETE",
        redirect: "follow",
        body: JSON.stringify({ 
            alert_id, 
        }), 
        headers: { 
            "Content-type": "application/json"
        } 
    })
    const json = await res.json();
    updateMessage(json.message);
}