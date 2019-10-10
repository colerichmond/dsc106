Highcharts.chart('container', {

    title: {
        text: 'UCSD Full-Time Admission Statistics, 2005-2018'
    },

    yAxis: {
        title: {
            text: 'Number Admitted'
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
        data: [7580, 9210, 8419, 8517, 7816 ,8365, 8707, 10917, 11866,								     11758, 12748, 14103, 13981, 13781],
        marker: {
            symbol: 'circle'
        }
    }, {
        name: 'Women',
        color: '#FF0000',
        data: [10311, 12135, 10759, 11200, 9863, 9991, 10269, 12046, 12837, 
               13761, 16170, 16231, 15821],
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