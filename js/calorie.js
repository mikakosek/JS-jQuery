$(function () {
    /**
     Zmiana wartości slidera powoduje analogiczną zmianę wartości po prawej stronie slidera oraz ponowne wyliczenie sumy kalorii.
    */            
    var kcalProtein = 4, //liczba kalorii w 1 g białka
        kcalFat = 9, //liczba kalorii w 1 g tłuszczu
        kcalCarbohydrate = 4; //liczba kalorii w 1 g węglowodanów

    /**
     Funkcja wyliczająca sumę kalorii i w zależności od jej wysokości oznaczająca ją odpowiednim kolorem .
    */
    function countCalories() {
        var count = $('#inputProtein').val() * kcalProtein + $('#inputFat').val() * kcalFat + $('#inputCarbohydrate').val() * kcalCarbohydrate;
        $('#result').text(count);
        if (count < 601) {
            $('#result').css('color', '#dddd00');
        } else if (count < 1201) {
            $('#result').css('color', '#ff9900');            
        } else {
            $('#result').css('color', '#ff0000');
        }
    }
    
    $('#inputProtein').change(function () {
        $('#valueProtein').text($(this).val());
        countCalories();
    });
    $('#inputFat').change(function () {
        $('#valueFat').text($(this).val());
        countCalories();
    });
    $('#inputCarbohydrate').change(function () {
        $('#valueCarbohydrate').text($(this).val());
        countCalories();
    });
   
    countCalories();
});