$(document).ready(function(){
    var questionOne;
    var questionTwo;
    var questionThree; 
    var questionFour;
    var questionFive;
    var questionSix;
    var questionSeven;
    var incorrectAns;
    var correctAns;
    var gradePlus = [];
    var counter;
    var unchecked;

    function startGame(){
        counter = 0;
        questionOne = $("input[name=question1]:checked").val();
        questionTwo = $("input[name=question2]:checked").val();
        questionThree = $("input[name=question3]:checked").val();
        questionFour = $("input[name=question4]:checked").val();
        questionFive = $("input[name=question5]:checked").val();
        questionSix = $("input[name=question6]:checked").val();
        questionSeven = $("input[name=question7]:checked").val();
        unchecked = $('input[type="radio"]:not(:checked)');
        incorrectAns = 0;
        correctAns = 0;
        if (questionOne == '40') {
            correctAns++;}else {incorrectAns++;}
        if (questionTwo == 'fish') {
            correctAns++;}else { incorrectAns++;}
        if (questionThree == 'ammeter') {
            correctAns++;}else { incorrectAns++;}
        if (questionFour == 'mars') {
            correctAns++;}else { incorrectAns++;}
        if (questionFive == '4') {
              correctAns++;}else { incorrectAns++;}
        if (questionSix == 'relativity') {
              correctAns++;}else { incorrectAns++;}
        if (questionSeven == 'yellow') {
              correctAns++;}else { incorrectAns++;}      
        gradePlus.push(correctAns);
        gradePlus.push(incorrectAns);
        console.log(Math.floor((unchecked.length/4)-1));
       };        
      
    function fadeOut(){
        $('#summit').fadeOut();
        $('#main-container').fadeOut();
        $('#summit').fadeOut();
        $('#theEnd').hide();
        $('#results').text();
        $('#counter').hide();
        }     
      
    $('#summit').on('click', function (){
        startGame();
        $('#main-container').fadeOut();
        $('#summit').hide();
        $('#theEnd').fadeIn();
        $('#results').text();
        $('#coAns').text('Correct Answers: ' + gradePlus[0]);
        $('#inAns').text('Incorrect Answers: ' + gradePlus[1]);
        });
     
    $('#restart').on('click', function(){
        fadeOut();
        $('#start').fadeIn();
        $('#counter').text('time: 15 sec.');
        gradePlus = [];
        });

    $('#start').on('click', function(){
        $("input:checked").removeAttr("checked");
        $('#start').hide();
        $('#main-container').show();
        $('#counter').show();
        $('#summit').show()
         counter = 15;
        setTimeout(countDown,1000);
        function countDown(){ 
          if (counter > 0){
            counter--;  
            setTimeout(countDown,1000);
          }else if (counter == 0){
            startGame();
            $('#main-container').fadeOut();
            $('#summit').hide();
            $('#theEnd').fadeIn();
            $('#coAns').text('Correct Answers: ' + gradePlus[0]);
            $('#inAns').text('Incorrect Answers: ' + gradePlus[1]); 
          }
          $('#counter').text('Time: ' + counter + ' sec.'); 
        }
    });
  
});