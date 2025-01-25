document.addEventListener("DOMContentLoaded", function () {
    // Static values for temperature and wind speed
    const temperature = 5; // in °C (adjust to meet conditions)
    const windSpeed = 6; // in km/h (adjust to meet conditions)

    // Function to calculate wind chill factor (one line of code)
    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    // Function to determine if wind chill calculation is applicable
    function isWindChillApplicable(temp, wind) {
        return temp <= 10 && wind > 4.8;
    }

    // Select the weather table to append the wind chill row
    const weatherTable = document.querySelector(".weather table");

    if (weatherTable) {
        // Create the row for wind chill
        const windChillElement = document.createElement("tr");

        // Create and add the label cell
        const windChillLabel = document.createElement("td");
        windChillLabel.className = "label";
        windChillLabel.innerHTML = "<b>Wind Chill:</b>";
        windChillElement.appendChild(windChillLabel);

        // Create the value cell
        const windChillValue = document.createElement("td");

        // Only calculate and display wind chill if conditions are met
        if (isWindChillApplicable(temperature, windSpeed)) {
            windChillValue.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(2)} °C`;
        }

        windChillElement.appendChild(windChillValue);

        // Append the wind chill row to the table
        weatherTable.appendChild(windChillElement);
    } else {
        console.error("Weather table not found.");
    }
});

// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

if (copyrightYearElement) copyrightYearElement.textContent = currentYear;
if (lastModifiedElement) lastModifiedElement.textContent = `Last update: ${lastModified}`;
