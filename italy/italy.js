chartIt()

async function fetchDemo(){
    const response = await fetch("titaw2.csv");
    const data = await response.text();
    console.log(data)
    let CountryNames = []
    let popularitys = []
        
    const table = data.trim().split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const CountryName = columns[1];
        console.log(CountryName)
        CountryNames.push(CountryName);
        const popularity = columns[12];
        console.log(popularity)
        popularitys.push(popularity);

        });
    return { CountryNames, popularitys };

}


