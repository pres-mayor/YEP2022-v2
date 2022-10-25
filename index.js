
var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);

function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    userAction(decodedText);
    console.log('hello world');
    console.log(`Scan result: ${decodedText}`, decodedResult);
    alert("Scan Complete")
}

function userAction(decodedText) {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = {
        "result": decodedText
    }

    const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(body),
    }

    fetch("https://eouvq7no4w25s5w.m.pipedream.net", options);
}

