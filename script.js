const additem = async (item) => {
    await randomdelay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.append(div);
}
const randomdelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 400);
    })

}
async function main() {

    let t = setInterval(() => {
        let alldivs = document.body.getElementsByTagName("div");
        last = alldivs[alldivs.length - 1]
        if (last.innerHTML.endsWith("....")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 4)
        }
        else {

            last.innerHTML = last.innerHTML + "."
        }

    }, 100);

    let text = ["Initializing encrypted connection...",
        "Bypassing system firewall protocols...",
        "Establishing secure shell tunnel...",
        "Fetching target system configuration files...",
        "Injecting backdoor into the mainframe...",
        "Decrypting secured user credentials...",
        "[DATA EXFILTRATION IN PROGRESS] → Transmitting packets via secure Tor channel... Bypassing detection algorithms... Uploading to remote vault...",
        "Scanning active network ports...",
        "Cloning internal file directory: /etc/data/core/system/",
        "Spoofing admin session token...",
        "Uploading payload to remote server...",
        "Accessing restricted database nodes...",
        "Extracting confidential data packets...",
        "[COMPLETE CONTROL GAINED] → Admin privileges unlocked... Modifying permissions... Installing root access key to maintain stealth connection...",
        "Finalizing root access permissions...",
        "Compressing downloaded data into secure archive...",
        "Uploading results to anonymous cloud vault...",
        "Terminating all active traces from system logs...",
        "Closing tunnel... Disconnecting from server...",
        "Operation complete. Exiting protocol."]


    for (const item of text) {
        await additem(item)
    }
    await randomdelay()
    clearInterval(t)
}

let button = document.querySelector("button")

button.addEventListener("click", () => {
    button.style.display = "none"
    main()

})

