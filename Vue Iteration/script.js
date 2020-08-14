    
    var vm = new Vue({
        el: '#app',
        data: {
            // sports: [
            //     {name: "Sailing", season: "Summer,Fall"},
            //     {name: "Skiing", season: "Winter,Spring"},
            //     {name: "Mountain Biking", season: "Spring,Fall"},
            //     {name: "Rock Climbing", season: "Winter,Spring,Fall"},
            //     {name: "Kite Boarding", season: "Spring,Summer,Fall"},
            //     {name: "Paddleboarding", season: "Summer"},
            //     {name: "Swimming", season: "Summer"}
            // ],
            sports: [   
                        "Sailing",
                        "Skiing",
                        "Mountain Biking",
                        "Rock Climbing",
                        "Kite Boarding",
                        "Paddleboarding",
                        "Swimming"
                    ],
            search: ""

        },
        computed: {
            getData: function() {
                // var seasons = []
                // seasons.push(sports.season)
                // return this.seasons.filter((i) => {
                return this.sports.filter((i) => {
                    return i.match(this.search)
                })
            }
        }//,
        // methods: {
        //     separateSeasons: function (a) {
        //         return a.season//.split(",")
        //     }
        // }     
    });        
