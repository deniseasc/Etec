$(document).on("click", "#btnMapa", function(){

  var onSuccess = function(position){
        L.mapquest.key = 'Tb4mQvnfzr5SSkAldnGNtLUzzpQTaaaL';
        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });   

        map.addControl(L.mapquest.control());
        }

        navigator.geolocation.getCurrentPosition(onSuccess);

  checkConnection();
});

//Verificar conexão;
/*function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    if(states[networkState] == states[Connection.NONE])
    {

      navigator.notification.alert("Sem conexão. Por favor, conectar a uma rede.", semConexao, "Alerta", "fechar");
    }
    else
    {
      navigator.notification.beep(1);
    }
}*/
