const ip = document.getElementById("ip")
const country = document.getElementById("country")
const capital = document.getElementById("capital")
const city = document.getElementById("city")
const timezone = document.getElementById("timezone")
const region = document.getElementById("region")
const org = document.getElementById("org")

// Currently burned out to comment the code but it's simple enough to understand.

function search() {
    let ip = document.getElementById("ip").value;

    fetch(`https://ipapi.co/${ip}/json/`)
    .then(response => response.json())
    .then(function(data) {
        ip.innerHTML = `IP: ${data.ip}`
        country.innerHTML = `Country: ${data.country_name}`
        capital.innerHTML = `Capital: ${data.country_capital}`
        city.innerHTML = `City: ${data.city}`
        timezone.innerHTML = `Timezone: ${data.timezone}`
        region.innerHTML = `Region: ${data.region}`
        org.innerHTML = `ISP: ${data.org}`
        // info.innerHTML = data.ip
        // info.innerHTML = data.ip
        // info.innerHTML = data.ip
        // info.innerHTML = data.ip
        // info.innerHTML = data.ip
    })


}
