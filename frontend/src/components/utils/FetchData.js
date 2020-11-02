async function fetchData(url, method, data = {}) {
    // Default options are marked with *
    // url = "http://localhost:5000" + url;
    let response;
    if (method === "GET") {
        response = await fetch(url, {
            method: "GET",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } else {
        response = await fetch(url, {
            method: method, // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            // redirect: 'follow', // manual, *follow, error
            // referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }
    return response; // parses JSON response into native JavaScript objects
}

export default fetchData;