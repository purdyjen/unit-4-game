$(function(){ //doc ready opening tags

var quigon = {
    Name: "Qui-Gon Jinn",
    Side: "Jedi",
    Health: 150

};


// *~*~*~*~*~*~*~ Choose a side *~*~*~*~*~*~*~

//if light
    //add visibility class to characters.light
//if dark
    //add visibility class to characters.dark

    $('#Jedi').on("click", function() {
        $('#jedi-characters').removeClass('hidden');
        $('#side').addClass('hidden');
    });

    $('#Sith').on("click", function() {
        $('#sith-characters').removeClass('hidden');
        $('#side').addClass('hidden');
    });

// *~*~*~*~*~*~*~ Choose a character *~*~*~*~*~*~*~

//jedi
$('#qui-gon').on("click", function() {
    $('.obi-wan').addClass('hidden');
    $('.luke').addClass('hidden');
    $('.rey').addClass('hidden');
    $(this).addClass('selected-attacker');
    $('#jedi-opponents').removeClass('hidden');
});

$('#obi-wan').on("click", function() {
    $('.qui-gon').addClass('hidden');
    $('.luke').addClass('hidden');
    $('.rey').addClass('hidden');
    $(this).addClass('selected-attacker');
    $('#jedi-opponents').removeClass('hidden');
});

$('#luke').on("click", function() {
    $('.obi-wan').addClass('hidden');
    $('.qui-gon').addClass('hidden');
    $('.rey').addClass('hidden');
    $(this).addClass('selected-attacker');
    $('#jedi-opponents').removeClass('hidden');
});

$('#rey').on("click", function() {
    $('.obi-wan').addClass('hidden');
    $('.luke').addClass('hidden');
    $('.qui-gon').addClass('hidden');
    $(this).addClass('selected-attacker');
    $('#jedi-opponents').removeClass('hidden');
});

//sith
$('#sidious').on("click", function() {
    $('.maul').addClass('hidden');
    $('.vader').addClass('hidden');
    $('.kylo').addClass('hidden');
    $(this).addClass('selected-attacker');
    $('#sith-opponents').removeClass('hidden');
});

$('#maul').on("click", function() {
    $('.sidious').addClass('hidden');
    $('.vader').addClass('hidden');
    $('.kylo').addClass('hidden');
    $(this).addClass('selected-attacker');
    $('#sith-opponents').removeClass('hidden');
});

$('#vader').on("click", function() {
    $('.maul').addClass('hidden');
    $('.sidious').addClass('hidden');
    $('.kylo').addClass('hidden');
    $('this').addClass('selected-attacker');
    $('#sith-opponents').removeClass('hidden');
});

$('#kylo').on("click", function() {
    $('.maul').addClass('hidden');
    $('.sidious').addClass('hidden');
    $('.vader').addClass('hidden');
    $(this).addClass('selected-attacker');
    $('#sith-opponents').removeClass('hidden');
});

// *~*~*~*~*~*~*~ Choose an opponent *~*~*~*~*~*~*~

//Jedi Opponents
$('#sidious2').on("click", function() {
    $('.maul2').addClass('hidden');
    $('.vader2').addClass('hidden');
    $('.kylo2').addClass('hidden');
    $(this).addClass('selected-defender');
    $('.arena').removeClass('hidden');
    $('.selected-attacker').removeClass('hidden');
    $('.selected-defender').removeClass('hidden');
    $('#attacker-sith').addClass('hidden');
    $('#defender-jedi').addClass('hidden');
    $('#selection-complete').addClass('hidden');
});

$('#maul2').on("click", function() {
    $('.sidious2').addClass('hidden');
    $('.vader2').addClass('hidden');
    $('.kylo2').addClass('hidden');
    $(this).addClass('selected-defender');
    $('.arena').removeClass('hidden');
    $('.selected-attacker').removeClass('hidden');
    $('.selected-defender').removeClass('hidden');
    $('#attacker-sith').addClass('hidden');
    $('#defender-jedi').addClass('hidden');
    $('#selection-complete').addClass('hidden');
});

$('#vader2').on("click", function() {
    $('.maul2').addClass('hidden');
    $('.sidious2').addClass('hidden');
    $('.kylo2').addClass('hidden');
    $(this).addClass('selected-defender');
    $('.arena').removeClass('hidden');
    $('.selected-attacker').removeClass('hidden');
    $('.selected-defender').removeClass('hidden');
    $('#attacker-sith').addClass('hidden');
    $('#defender-jedi').addClass('hidden');
    $('#selection-complete').addClass('hidden');
});

$('#kylo2').on("click", function() {
    $('.maul2').addClass('hidden');
    $('.sidious2').addClass('hidden');
    $('.vader2').addClass('hidden');
    $(this).addClass('selected-defender');
    $('.arena').removeClass('hidden');
    $('.selected-attacker').removeClass('hidden');
    $('.selected-defender').removeClass('hidden');
    $('#attacker-sith').addClass('hidden');
    $('#defender-jedi').addClass('hidden');
    $('#selection-complete').addClass('hidden');
});

//sith opponents
$('#qui-gon2').on("click", function() {
    $('.obi-wan2').addClass('hidden');
    $('.luke2').addClass('hidden');
    $('.rey2').addClass('hidden');
    $(this).addClass('selected-defender');
    $('.arena').removeClass('hidden');
    $('.selected-attacker').removeClass('hidden');
    $('.selected-defender').removeClass('hidden');
    $('#defender-sith').addClass('hidden');
    $('#attacker-jedi').addClass('hidden');
    $('#selection-complete').addClass('hidden');
});

$('#obi-wan2').on("click", function() {
    $('.qui-gon2').addClass('hidden');
    $('.luke2').addClass('hidden');
    $('.rey2').addClass('hidden');
    $(this).addClass('selected-defender');
    $('.arena').removeClass('hidden');
    $('.selected-attacker').removeClass('hidden');
    $('.selected-defender').removeClass('hidden');
    $('#defender-sith').addClass('hidden');
    $('#attacker-jedi').addClass('hidden');
    $('#selection-complete').addClass('hidden');
});

$('#luke2').on("click", function() {
    $('.obi-wan2').addClass('hidden');
    $('.qui-gon2').addClass('hidden');
    $('.rey2').addClass('hidden');
    $(this).addClass('selected-defender');
    $('.arena').removeClass('hidden');
    $('.selected-attacker').removeClass('hidden');
    $('.selected-defender').removeClass('hidden');
    $('#defender-sith').addClass('hidden');
    $('#attacker-jedi').addClass('hidden');
    $('#selection-complete').addClass('hidden');
});

$('#rey2').on("click", function() {
    $('.obi-wan2').addClass('hidden');
    $('.luke2').addClass('hidden');
    $('.qui-gon2').addClass('hidden');
    $(this).addClass('selected-defender');
    $('.arena').removeClass('hidden');
    $('.selected-attacker').removeClass('hidden');
    $('.selected-defender').removeClass('hidden');
    $('#defender-sith').addClass('hidden');
    $('#attacker-jedi').addClass('hidden');
    $('#selection-complete').addClass('hidden');
});









}); //doc ready closing tags