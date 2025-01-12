// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;