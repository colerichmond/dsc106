Highcharts.chart('container', {

    title: {
        text: 'UCSD Full-Time Admission Statistics, 2005-2018'
    },

    yAxis: {
        title: {
            text: 'Number Enrolled'
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
        data: [1607, 2031, 1838, 1893, 1695, 1858, 1583, 2328, 2616, 2538, 
               2711, 2669, 2725, 3220],
        marker: {
            symbol: 'circle'
        }
    }, {
        name: 'Women',
        color: '#FF0000',
        data: [2113, 2558, 2303, 2399, 2054, 2089, 1861, 2245, 2612, 2383, 
               2581, 3077, 2974, 3484],
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