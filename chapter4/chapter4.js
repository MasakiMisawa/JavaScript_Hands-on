$(function(){
    $('#jsi-do-calculation').click(function(){
        var val1 = $('#jsi-input-value1').val();
        var val2 = $('#jsi-input-value2').val();
        var calcResult = val1 + val2;
        $('#jsi-calculation-result').text(calcResult);
    });
};
