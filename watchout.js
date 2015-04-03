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

svg.selectAll('circle').data(enemies, function(index) {
  return index.i;
}).enter().append('circle')
  .attr('r', 10)
  .attr('color', 'black')
  .attr('cx', function(data, index) {
    return enemies[index].x;
  })
  .attr('cy', function(data, index){
    return enemies[index].y;
  });

var enemyMove = function() {
  enemies = enemies.map(function(input) {
    input.x = Math.floor(Math.random() * width);
    input.y = Math.floor(Math.random() * height);
    return input;
  });

  svg.selectAll('circle').data(enemies, function(index) {
    return index.i;
  }).transition().duration(500)
  .attr('cx', function(data, index) {
    return enemies[index].x;
  })
  .attr('cy', function(data, index){
    return enemies[index].y;
  })
};

setInterval(enemyMove, 1000);