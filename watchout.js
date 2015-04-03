// start slingin' some d3 here.

var width = 1000;
var height = 500;

var svg = d3.select("body").append('svg')
  .attr('width', width)
  .attr('height', height);

var enemies = [];
for (var i = 0; i < 30; i++) {
  enemies.push({
    'i': i,
    'x': Math.floor(Math.random() * width),
    'y': Math.floor(Math.random() * height)
  });
}

var player = {
  'x': width / 2,
  'y': height / 2
}

var drag = d3.behavior.drag()
  //.origin(function(d) { return d; })
  .on('drag', function(d) {
    //svg.select('circle.player')
    d3.select(this)
      .attr('cx', d3.event.x)
      .attr('cy', d3.event.y);
  });

svg.selectAll('circle').data(enemies, function(index) {
  return index.i;
}).enter().append('circle')
  .attr('class', 'enemy')
  .attr('r', 10)
  //.attr('color', 'black')
  .attr('cx', function(data, index) {
    return enemies[index].x;
  })
  .attr('cy', function(data, index){
    return enemies[index].y;
  });

svg.append('circle')
  .attr('class', 'player')
  .attr('fill', '#ff0000')
  .attr('r', 10)
  .attr('cx', player.x)
  .attr('cy', player.y)
  .call(drag);

var enemyMove = function() {
  enemies = enemies.map(function(input) {
    input.x = Math.floor(Math.random() * width);
    input.y = Math.floor(Math.random() * height);
    return input;
  });

  svg.selectAll('circle.enemy').data(enemies, function(index) {
    return index.i;
  }).transition().duration(500)
  .attr('cx', function(data, index) {
    return enemies[index].x;
  })
  .attr('cy', function(data, index){
    return enemies[index].y;
  });

  //svg.select
};

setInterval(enemyMove, 1000);