// Function to embed each Vega-Lite visualization
const embedChart = (id, specFile) => {
    vegaEmbed(id, specFile).catch(console.error);
};

// Embed each chart using the correct paths
document.addEventListener("DOMContentLoaded", () => {
    embedChart('#choropleth_map', 'choropleth_map.json');
    embedChart('#heatmap', 'graphs/heatmap.json');
    embedChart('#pie_chart', 'graphs/pie_chart.json');
    embedChart('#pictogram_chart', 'graphs/pictogramt.json');
    embedChart('#bubble_chart', 'graphs/bubble_chart.json');
});
