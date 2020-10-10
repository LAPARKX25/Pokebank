      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var x = 50;
        var data = google.visualization.arrayToDataTable([
          ['OPERACION', 'MONTO'],
          ['DEPOSITO',     x],
          ['RETIRO',      200],
        ]);

        var options = {
          title: 'TRANSACCIONES',
          is3D: true,
          width: $(window).width(),
          height: $(window).height()*0.75,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
