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

    function startGame(){
        questionOne = $("input[name=question1]:checked").val();
        questionTwo = $("input[name=question2]:checked").val();
        questionThree = $("input[name=question3]:checked").val();
        questionFour = $("input[name=question4]:checked").val();
        questionFive = $("input[name=question5]:checked").val();
        questionSix = $("input[name=question6]:checked").val();
        questionSeven = $("input[name=question7]:checked").val();
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
        $('#main-container').fadeOut();
            $('#summit').hide();
            $('#theEnd').fadeIn();
            $('#results').text();
            $('#coAns').text('Correct Answers: ' + gradePlus[0]);
            $('#inAns').text('Incorrect Answers: ' + gradePlus[1]); 
        // startGame(); 
        // fadeOut();
        // $('#coAns').text('Correct Answers: ' + gradePlus[0]);
        // $('#inAns').text('Incorrect Answers: ' + gradePlus[1]);  
        // console.log('correct Answers: ' + correctAns);
        // console.log('Incorrect Answers: ' + incorrectAns);
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
        var counter = 15;
        setTimeout(countDown,1000);
        function countDown(){
          counter--;
          if(counter > 0){
            setTimeout(countDown,1000);
          }else if (counter == 0){
            startGame();
            $('#main-container').fadeOut();
            $('#summit').hide();
            $('#theEnd').fadeIn();
            $('#results').text();
            $('#coAns').text('Correct Answers: ' + gradePlus[0]);
            $('#inAns').text('Incorrect Answers: ' + gradePlus[1]); 
          }
          $('#counter').text('Time: ' + counter + ' sec.'); 
        }
    });
  
});