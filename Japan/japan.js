
async function fetchDemo(){
    const response = await fetch("../italy/titaw2.csv");
    const data = await response.text();
    console.log(data)
    let CountryNames = []
    let popularitys = []
        
    const table = data.trim().split('\n').slice(1);
    table.forEach(row => {

        const columns = row.split(',');
        const CountryName = columns[1];
        // console.log(CountryName)
        if(CountryName=="Japan"){
            atractions = []
            atractions.push(columns[4])
            atractions.push(columns[5])
            atractions.push(columns[6])
            atractions.push(columns[7])
            atractions.push(columns[8])

            museums = []
            museums.push(columns[2])
            museums.push(columns[3])

            hotel = []
            hotel.push(columns[9])

            special = []
            special.push(columns[10])

            shopping = []
            shopping.push(columns[11])


            let theTrip = document.getElementById("theTrip");
            let headline = document.createElement("h1");
            headline.innerText= "atractions";
            theTrip.appendChild(headline)
            atractions.forEach(atraction=> {
                line1 = document.createElement("h2")
                line1.innerText= atraction;
                theTrip.appendChild(line1)
            });

            let theTrip2 = document.getElementById("theTrip2");
            let headline2 = document.createElement("h1");
            headline2.innerText= "museums";
            theTrip2.appendChild(headline2)
            museums.forEach(museum=> {
                line2 = document.createElement("h2")
                line2.innerText= museum;
                theTrip2.appendChild(line2)
            });

            let theTrip3 = document.getElementById("theTrip3");
            let headline3 = document.createElement("h1");
            headline3.innerText= "hotel";
            theTrip3.appendChild(headline3)
            hotel.forEach(hotel=> {
                line3 = document.createElement("h2")
                line3.innerText= hotel;
                theTrip3.appendChild(line3)
            });
            
            let theTrip4 = document.getElementById("theTrip4");
            let headline4 = document.createElement("h1");
            headline4.innerText= "special feature";
            theTrip4.appendChild(headline4)
            special.forEach(special=> {
                line4 = document.createElement("h2")
                line4.innerText= special;
                theTrip4.appendChild(line4)
            });

            let theTrip5 = document.getElementById("theTrip5");
            let headline5 = document.createElement("h1");
            headline5.innerText= "shopping";
            theTrip5.appendChild(headline5)
            shopping.forEach(shopping=> {
                line5 = document.createElement("h2")
                line5.innerText= shopping;
                theTrip5.appendChild(line5)
            });
        }

    });
    return { CountryNames, popularitys };
}
fetchDemo()

