let arrayOfFF = []
let departureDate = new Date('2020-09-01');
let depertureTime = 0


for (i = 0; i < process.argv[2]; i++) {
    var arrivalTime = depertureTime + (Math.round((Math.floor(Math.random() * 1000,10000) + 350)/100)*50)
    var arrivalDate = new Date('2020-09-01');
    arrivalDate.setDate(departureDate.getDate());

    if(arrivalTime > 2400) {
        arrivalTime = arrivalTime - 2400;
        arrivalDate.setDate(departureDate.getDate() + 1);
    }


    obj = {
        "arrivalDate": `${arrivalDate.toISOString().slice(0,10)}`,
        "arrivalPoint": i%2?"RIX":"PRG",
        "arrivalTime": arrivalTime.toString().padStart(4,0),
        "departureDate": `${departureDate.toISOString().slice(0,10)} `,
        "departurePoint": i%2?"PRG":"RIX",
        "departureTime": depertureTime.toString().padStart(4,0),
        "flightReference": Math.random().toString(36),
        "lastUpdate": "2020-09-16T12:44:44"
    };
    
    arrayOfFF.push(obj);
    

    departureDate.setDate(arrivalDate.getDate());

    depertureTime = arrivalTime+(Math.round((Math.floor(Math.random() * 1000,10000) + 100)/100)*50)
    if(depertureTime > 2400) {
        depertureTime = depertureTime - 2400;
        departureDate.setDate(departureDate.getDate() + 1);
    }

}

console.log(JSON.stringify(arrayOfFF))
