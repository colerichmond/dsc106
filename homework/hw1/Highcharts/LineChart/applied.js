Highcharts.chart('container', {

    title: {
        text: 'UCSD Full-Time Admission Statistics, 2005-2018'
    },

    yAxis: {
        title: {
            text: 'Number of Applicants'
        }
    },
    xAxis: {
        title: {
            text: 'Year'
        },
        tickInterval: 1
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2005
        }
    },

    series: [{
        name: 'Men',
        data: [18147, 19838, 20566, 21590, 21725 ,22332, 25097, 28758, 31992,								34618, 37009, 39779, 41583, 45636],
        marker: {
            symbol: 'circle'
        }
    }, {
        name: 'Women',
        color: '#FF0000',
        data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408, 38822, 41047, 44430, 46845, 52265],
        marker: {
            symbol: 'circle'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});