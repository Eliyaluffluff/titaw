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

    countries.forEach((country, index) => {
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