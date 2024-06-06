chartIt()

async function fetchDemo(){
    const response = await fetch("titaw.csv");
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

async function chartIt(){
    const data = await fetchDemo();
    const ctx = document.getElementById('myChart');
    ctx.height = 50;
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.CountryNames,
        datasets: [{
        label: 'popular',
        data: data.popularitys,
        backgroundColor: 'rgb(50, 113, 180)',
        borderColor: 'rgb(35, 66, 97)',
        Color: 'rgb(0, 0, 0)',
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true,
        }
        }
}
});
}