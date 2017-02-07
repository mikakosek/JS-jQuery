$(function () {
    /**
     Wybór przycisku Odśwież powoduje pojawienie się w polu nad nim litery wskazanej przez uczestnika w wybranym kolorze i na wybranym tle.
     W przypadku wpisania przez użytkownika innej liczby znaków niż 1 w polu na literę, pole to zostaje oznaczone jako błędne i oczekiwane jest poprawienia wartości przez użytkownika.
    */        
    $('#btnRefresh').click(function(){
        var letter = $('#inputLetter').val(),
            colorLetter = $('#selectColorLetter').val(),
            colorBackground = $('#selectColorBackground').val(),
            $letterResult = $('.letterResult');
        
        if (letter.length != 1) {
            $('#inputLetter').parents(".form-group").addClass("has-error");            
        } else {        
            $letterResult.text(letter).css("background-color", colorBackground).css("color", colorLetter);
        }
    });
    
    $('#inputLetter').focusin(function(){
        $(this).parents(".form-group").removeClass("has-error");
    });
});