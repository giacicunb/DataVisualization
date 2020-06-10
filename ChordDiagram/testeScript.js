////////////////////////////////////////////////////////////
//////////////////////// Set-Up ////////////////////////////
////////////////////////////////////////////////////////////Black Widow

var margin = {left:90, top:90, right:90, bottom:90},
	width = Math.min(window.innerWidth, 700) - margin.left - margin.right,
    height = Math.min(window.innerWidth, 700) - margin.top - margin.bottom,
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.1;
	
var Names = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","UNLABELED"],
	colors = ["#083E77", "#342350", "#567235", "#8B161C", "#DF7C00","#083E77", "#342350", "#567235", "#8B161C", "#DF7C00","#083E77", "#342350", "#567235", "#8B161C", "#DF7C00","#083E77", "#342350", "#567235", "#8B161C", "#DF7C00","#CCCCCC"],
	opacityDefault = 0.8;


    //0: 'Poder Executivo' 
    //1: 'Licitações'
    //2: 'Secretaria de Assuntos Jurídicos' 
    //3: 'Secretaria de Cultura' 
    //4: 'Secretaria de Educação, Esporte e Lazer' 
    //5: 'Secretaria de Finanças' 
    //6: 'Secretaria de Direitos Humanos e Segurança Cidadã' 
    //7: 'Secretaria de Saneamento' 
    //8: 'Secretaria de Serviços Públicos' 
    //9: 'Secretaria de Saúde' 
    //10: 'Poder Legislativo - old' 
    //11: 'Notícias' 
    //12: 'Secretaria de Administração e Gestão de Pessoas' 
    //13: 'Secretaria de Assistência Social' 
    //14: 'Secretaria de Ciência, Tecnologia e Desenvolvimento Econômico' 
    //15: 'Secretaria de Planejamento Participativo, Obras e Desenvolvimento Urbano e Ambiental' 
    //16: 'Secretaria de Coordenação Política de Governo' 
    //17: 'Secretaria de Comunicação' 
    //18: 'Fundação de Cultura Cidade do Recife - FCCR' 
    //19: 'Secretaria de Habitação'

//    [0,4,3,2,0,2,0,4,3,2,0,2,0,4,3,2,0,2,0,4,18], 
//	[4,0,3,2,4,3,4,0,3,2,4,3,4,0,3,2,4,3,4,0,19], 
//	[3,3,0,2,3,3,3,3,0,2,3,3,3,3,0,2,3,3,3,3,17], //Hawkeye
//	[2,2,2,0,3,3,2,2,2,0,3,3,2,2,2,0,3,3,2,2,16], //The Hulk
//	[0,4,3,3,0,2,0,4,3,3,0,2,0,4,3,3,0,2,0,4,15], //Iron Man
//    [2,3,3,3,2,0,2,3,3,3,2,0,2,3,3,3,2,0,2,3,18],
//    [0,4,3,2,0,2,0,4,3,2,0,2,0,4,3,2,0,2,0,4,19], //Black Widow
//	[4,0,3,2,4,3,4,0,3,2,4,3,4,0,3,2,4,3,4,0,15], //Captain America
//	[3,3,0,2,3,3,3,3,0,2,3,3,3,3,0,2,3,3,3,3,12], //Hawkeye
//	[2,2,2,0,3,3,2,2,2,0,3,3,2,2,2,0,3,3,2,2,14], //The Hulk
//	[0,4,3,3,0,2,0,4,3,3,0,2,0,4,3,3,0,2,0,4,15], //Iron Man
//    [2,3,3,3,2,0,2,3,3,3,2,0,2,3,3,3,2,0,2,3,17],
//    [0,4,3,2,0,2,0,4,3,2,0,2,0,4,3,2,0,2,0,4,15], //Black Widow
//	[4,0,3,2,4,3,4,0,3,2,4,3,4,0,3,2,4,3,4,0,18], //Captain America
//	[3,3,0,2,3,3,3,3,0,2,3,3,3,3,0,2,3,3,3,3,19], //Hawkeye
//	[2,2,2,0,3,3,2,2,2,0,3,3,2,2,2,0,3,3,2,2,17], //The Hulk
//	[0,4,3,3,0,2,0,4,3,3,0,2,0,4,3,3,0,2,0,4,19], //Iron Man
  //  [2,3,3,3,2,0,2,3,3,3,2,0,2,3,3,3,2,0,2,3,15],
//    [0,4,3,2,0,2,0,4,3,2,0,2,0,4,3,2,0,2,0,4,12], //Black Widow
//    [4,0,3,2,4,3,4,0,3,2,4,3,4,0,3,2,4,3,4,0,13],
//    [18,19,17,16,15,18,19,15,12,14,15,17,15,18,19,17,19,15,12,13,0] //Captain America

    

var matrix = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18], //Black Widow
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19], //Captain America
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17], //Hawkeye
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16], //The Hulk
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15], //Iron Man
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19], //Black Widow
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15], //Captain America
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12], //Hawkeye
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14], //The Hulk
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15], //Iron Man
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15], //Black Widow
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18], //Captain America
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19], //Hawkeye
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17], //The Hulk
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19], //Iron Man
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12], //Black Widow
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13],
    [18,19,17,16,15,18,19,15,12,14,15,17,15,18,19,17,19,15,12,13,0] //Captain America
];

////////////////////////////////////////////////////////////
/////////// Create scale and layout functions //////////////
////////////////////////////////////////////////////////////

var colors = d3.scale.ordinal()
    .domain(d3.range(Names.length))
	.range(colors);

var chord = d3.layout.chord()
    .padding(.15)
    .sortChords(d3.descending)
	.matrix(matrix);
		
var arc = d3.svg.arc()
    .innerRadius(innerRadius*1.01)
    .outerRadius(outerRadius);

var path = d3.svg.chord()
	.radius(innerRadius);
	
////////////////////////////////////////////////////////////
////////////////////// Create SVG //////////////////////////
////////////////////////////////////////////////////////////
	
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + (width/2 + margin.left) + "," + (height/2 + margin.top) + ")");
		
////////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
////////////////////////////////////////////////////////////

var outerArcs = svg.selectAll("g.group")
	.data(chord.groups)
	.enter().append("g")
	.attr("class", "group")
	.on("mouseover", fade(.1))
	.on("mouseout", fade(opacityDefault));

outerArcs.append("path")
	.style("fill", function(d) { return colors(d.index); })
	.attr("d", arc);
	
////////////////////////////////////////////////////////////
////////////////////// Append Names ////////////////////////
////////////////////////////////////////////////////////////

//Append the label names on the outside
outerArcs.append("text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("class", "titles")
  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function(d) {
		return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
		+ "translate(" + (outerRadius + 10) + ")"
		+ (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .text(function(d,i) { return Names[i]; });
	
////////////////////////////////////////////////////////////
////////////////// Draw inner chords ///////////////////////
////////////////////////////////////////////////////////////
  
svg.selectAll("path.chord")
	.data(chord.chords)
	.enter().append("path")
	.attr("class", "chord")
	.style("fill", function(d) { return colors(d.source.index); })
	.style("opacity", opacityDefault)
	.attr("d", path);

////////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
////////////////////////////////////////////////////////////

//Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(d,i) {
    svg.selectAll("path.chord")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
		.transition()
        .style("opacity", opacity);
  };
}//fade