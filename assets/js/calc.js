function media() {

    var values = [
        $('#ax_media').val(),
        $('#ay_media').val(),
        $('#bx_media').val(),
        $('#by_media').val()
    ];

    console.clear();
    console.log("Já defini os valores no array... \n================================");

    values = toFloat(values);

    var mx = (values[0] + values[2]) / 2;
    var my = (values[1] + values[3]) / 2;
    var resultado = "Resultado: (" + mx +", " + my + ")";

    console.log(resultado);

    $('#resultado').html("Resultado: " + resultado);
}

function toFloat(values) {

    console.log("Iniciando conversão de variaveis... \n===================================");
    console.log(values);

    for (var i = 0 ; i < values.length ; i++) {

        if (values[i].indexOf(",") != -1) {
            values[i] = values[i].replace(/,/g, '.');
        }

        try {
            values[i] = parseFloat(values[i]);
        } catch (err) {
            console.log(err);
        }
    }


    return values;
}

function mediana() {
    var pontos = [
        $('#bx_mediana').val(),
        $('#by_mediana').val(),
        $('#cx_mediana').val(),
        $('#cy_mediana').val(),
        $('#ax_mediana').val(),
        $('#ay_mediana').val()
    ];

    pontos = toFloat(pontos);

    var mbcx = (pontos[0] + pontos[2]) / 2;
    var mbcy = (pontos[1] + pontos[3]) / 2;

    var vec1 = [mbcx, mbcy],
        vec2 = [pontos[4], pontos[5]];

    var resultado = Math.sqrt(Math.pow(vec1[0] - vec2[0], 2) + Math.pow(vec1[1] - vec2[1], 2));

    console.log(resultado);
    $('#resultado-mediana').html("Resultado: " + resultado);

}

function distancia() {
  var values = [
    $('#ax_dist').val(),
    $('#ay_dist').val(),
    $('#bx_dist').val(),
    $('#by_dist').val()
  ];

  var distancia = Math.sqrt(Math.pow(values[0] - values[2], 2) + Math.pow(values[1] - values[3], 2));

  var resultado = "Resultado: (" + distancia + ")";

  console.log(resultado);

  $('#resultado-dist').html(resultado);

}

function baricentro() {
  var values = [
    $('#ax_bari').val(),
    $('#ay_bari').val(),
    $('#bx_bari').val(),
    $('#by_bari').val(),
    $('#cx_bari').val(),
    $('#cy_bari').val()
  ];

  values = toFloat(values);

  var xg = (values[0] + values[2] + values[4]) / 3;
  var yg = (values[1] + values[3] + values[5]) / 3;

  var resultado = "Resultado: (" + xg +", " + yg + ")";

  console.log(resultado);

  $('#resultado-bari').html(resultado);

}
