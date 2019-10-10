Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'UCSD Full-Time Admission Statistics, 2005-2018'
    },

    xAxis: {
        categories: ['2005', '2006', '2007', '2008', '2009', '2010',
        						 '2011', '2012', '2013', '2014', '2015', '2016', 
                     '2017', '2018']
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of Students'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },

    series: [{
        name: 'Men Enrolled',
        data: [1607, 2031, 1838, 1893, 1695, 1858, 1583, 2328, 2616, 2538, 
               2711, 2669, 2725, 3220],
        stack: 'male'
    }, {
        name: 'Men Admitted',
        color: '#4169E1',
        data: [7580, 9210, 8419, 8517, 7816 ,8365, 8707, 10917, 11866, 
               11758, 12748, 14103, 13981, 13781],
        stack: 'male'
    }, {
        name: 'Men Applied',
        color: '#191970',
        data: [18147, 19838, 20566, 21590, 21725 ,22332, 25097, 28758, 31992,
               34618, 37009, 39779, 41583, 45636],
        stack: 'male'
    }, {
        name: 'Women Enrolled',
        color: '#F08080',
        data: [2113, 2558, 2303, 2399, 2054, 2089, 1861, 2245, 2612, 2383, 
               2581, 3077, 2974, 3484],
        stack: 'female'
    }, {
        name: 'Women Admitted',
        color: '#DC143C',
        data: [10311, 12135, 10759, 11200, 9863, 9991, 10269, 12046, 12966, 
               12837, 13761, 16170, 16231, 15821],
        stack: 'female'
    }, {
        name: 'Women Applied',
        color: '#8B0000',
        data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408,
               38822, 41047, 44430, 46845, 52265],
        stack: 'female'
    }]
});