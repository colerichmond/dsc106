Highcharts.chart('container', {
    chart: {
        type: 'variablepie'
    },
    accessibility: {
        description: 'Yield is the percent of students who choose to enroll in a particular college or university after having been offered admission. It is calculated by dividing the number of students who choose to enroll at a school in a given year, which is often based on their decision to pay a deposit, by the total number of offers of acceptance sent.'
    },
    title: {
        text: 'UCSD Full-Time Admission Yield'
    },
    subtitle: {
    		text: '2005-2018'
		},
    tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            'Number Admitted: <b>{point.y}</b><br/>' +
            'Enrollment Offers Accepted: <b>{point.z}</b><br/>'
    },
    series: [{
        minPointSize: 10,
        innerSize: '20%',
        zMin: 0,
        name: 'genders',
        data: [{
            name: 'Men',
            y: 147768,
            z: 31312
        }, {
            name: 'Women',
            color: '#DC143C',
            y: 174360,
            z: 34733
        }]
    }]
});

