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

svg.SelectAll('circle').data(enemies, function(index) {
  return [index[x], index[y]];
}).enter().append('circle');