async function fetchDemo(){
    const response = await fetch("../chart/titaw.csv");
    const data = await response.text();
    console.log(data)
    let CountryNames = []
    const table = data.trim().split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const CountryName = columns[1];
        console.log(CountryName)
        CountryNames.push(CountryName);
        });
        console.log(CountryNames)
    return {CountryNames};
}



async function createButtons(containerId) { 
    countries = await fetchDemo()
    const container = document.getElementById(containerId);
    console.log(countries)

    countries.CountryNames.forEach((country, index) => {
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'countries';
        radioInput.value = country;
        radioInput.id = `country${index}`;

        const label = document.createElement('label');
        label.htmlFor = radioInput.id;
        label.textContent = country;

        container.appendChild(radioInput);
        container.appendChild(label);

        container.appendChild(document.createElement('br'));
    });
}

createButtons('radio-container');


document.getElementById('suby').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedCountry = document.querySelector('input[name="countries"]:checked');
    if (selectedCountry) {
        const countryValue = selectedCountry.value;
        if (countryValue === 'Italy') {
            window.location.href = "../italy/italy.html";
        }
        if (countryValue === 'Japan') {
            window.location.href = "../japan/japan.html";
        }
        if (countryValue === 'France') {
            window.location.href = "../france/france.html";
        }
        if (countryValue === 'Brazil') {
            window.location.href = "../brazil/brazil.html";
        }
   }
});
