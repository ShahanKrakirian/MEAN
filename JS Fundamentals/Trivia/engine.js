$(document).ready(function(){

    $('.to-show-question').click(function (e) { 
        var difficulty = $(this).attr(difficulty);
        var category = $(this).attr(category);
        
    });
    
    $.get("https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple", handleEasySports, 'json')



    var points = 0;
    function addPoints(){
        $('#points').html(points.toString() + " Points")
    }
    addPoints();

    function handleEasySports(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }
    function handleEasyScience(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }
    function handleEasyComputer(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }
    function handleMediumSports(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }
    function handleMediumScience(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }
    function handleMediumComputer(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }
    function handleHardSports(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }
    function handleHardScience(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }
    function handleHardComputer(questions){
        console.log(questions.results);
        for (var i=0; i<3; i++){
        }
    }


})