//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

var trace = {
    labels: ["nona beer", "nona wine", "nona martini", "nona margarita", "ice tea", "nona rum", "nona mai tai", "nona gin"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "pie"
};

var layout = {
    title: "Popular Nona Bevs"
};

Plotly.newPlot("plotArea", [trace], layout);
