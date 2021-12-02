const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoDisplay = document.querySelector(".geo-display");
const loader = document.querySelector(".loader-container");
const details = document.querySelector(".details");


lookupBtn.addEventListener("click", () => {
    loader.style.display = "flex";
    details.style.display = "none";

    loader.style.display = "none";
    details.style.display = "block";


/*
    axios.get("https://ipapi.co/json").then(response =>{
        ipDisplay.textContent = `IP: ${response.data.ip}`;

        loader.style.display = "none";

        details.style.display = "block";

        locationDisplay.textContent = `Location: ${response.data.city},         
        ${response.data.region}, ${response.data.country_name}`;

        geoDisplay.textContent = `Geo Location: ${response.data.latitude}, 
        ${response.data.longitude}`;
    });  
*/  
});




