var sports = [
    {name: "Sailing", season: "Summer,Fall"},
    {name: "Skiing", season: "Winter,Spring"},
    {name: "Mountain Biking", season: "Spring,Fall"},
    {name: "Rock Climbing", season: "Winter,Spring,Fall"},
    {name: "Kite Boarding", season: "Spring,Summer,Fall"},
    {name: "Paddleboarding", season: "Summer"},
    {name: "Swimming", season: "Summer"}
]

var container = document.querySelector('#container')

container.innerHTML = sports.map((item) => {
    var season = item.season.split(",").map((i) => {
        return `<span class='${i}'>${i}</span>`;
      }).join(' ');
    return `<p>
                <b>${item.name}</b>
                <br>
                ${season} 
            </p>`;
  }).join('')

// container.innerHTML = `<ul>${container.innerHTML}</ul>`

console.log(container)