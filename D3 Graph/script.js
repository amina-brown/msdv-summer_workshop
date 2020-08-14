var sports = [
    {season: "Winter", number: 2, names: "Skiing, Rock Climbing", colors: "#FFE7D3"},
    {season: "Spring", number: 4, names: "Skiing, Rock Climbing, Mountain Biking, Kite Boarding", colors: "#B294BB"},
    {season: "Summer", number: 4, names: "Sailing, Kite Boarding, Paddle Boarding, Swimming", colors: "#95C1C2"},
    {season: "Fall", number: 4, names: "Sailing, Rock Climbing, Mountain Biking, Kite Boarding", colors: "#C75314"}
]

var numSport = [],
    season = [],
    nameSport = [],
    colors = []

function getData(arr){
for(i = 0; i < sports.length;i++){
  numSport.push(sports[i].number)
  season.push(sports[i].season)
  nameSport.push(sports[i].names)
  colors.push(sports[i].colors)
}
  return numSport, season, nameSport, colors
}

getData(sports)

var tooltip = d3.select('main')
            .append('div')
            .style('position','absolute')
            .style('padding','1px 1px')
            .style('background','beige')
            .style('opacity',0)
            .style('font-family','Helvetica')
            .style('font-size','12px');

var myChart = d3.select("main")
        .append("svg")
        .attr('width',1000)
        .attr('height',1000)
        .style('background','#93a1a1')

var xAxisValues = d3.scaleLinear()
        .domain([0,season.length])
        .range([120,920]);

var xAxisTicks = d3.axisTop(xAxisValues)
        .ticks(0);

var xGuide = d3.select('svg').append('g')
    .attr('transform','translate(0,200)')
    .style('color','beige')
    .style('opacity',.3)
    .call(xAxisTicks);

var chart =  myChart.append('g')
    .selectAll('circle').data(numSport)
        .enter().append('circle')
            .style('fill',function(d,i){
                return colors[i];
            })
            .style('opacity',.75)
            .attr('cx', function(d,i){
                return i*200+200
            })
            .attr('cy',200)
            .attr('r', 0)
    
        .on('mouseover', function(d,i){
            tooltip.transition().duration(200)
                .style('opacity',.9);
            tooltip.html(nameSport[i])
            .style('left',(d3.event.pageX -35) + 'px')
            .style('bottom',(d3.event.pageY -30) + 'px');
            

            d3.select(this)
                .transition()
                .duration(1000)
                .style('opacity',1)
                .style('stroke','beige');
        })

        .on('mouseout', function(d){
            tooltip.style('opacity',0)

            d3.select(this)
                .transition()
                .duration(500)
                .style('opacity',.75)
                .style('stroke','none')
        })

var labels = d3.select("svg")
            .selectAll('text').data(season)
            .enter().append('text')
            .attr('y',200)
            .attr('x', function(d,i){
                return i*200+200
            })
            .attr('fill','#344040')
            .attr('text-anchor','middle')
            .attr('alignment-baseline','central')
            .style('font-family','Helvetica')
            .style('font-size','16px')
            .text(d=>d);

var yAxisValues = d3.scaleLinear()
                    .domain([0,d3.max(numSport)])
                    .range([200,120]);
                
var yAxisTicks = d3.axisLeft(yAxisValues)
                    .ticks(2);

var yGuide = d3.select('svg').append('g')
                .attr('transform','translate(120,0)')
                .style('color','beige')
                .call(yAxisTicks);

chart.transition()
        .duration(1500)
        .attr('r', function(d) {
            return d*20;
        })
        .ease(d3.easeBounceOut);

