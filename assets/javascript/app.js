$(document).ready(function() {
    var questions = [
        { question: 'What was the average life expectancy of white males born in the U.S. just before the Civil War?' ,
        choices: ['40 years','50 years','60 years','70 years'],
        answer: '40 years'}, 
        { question: 'What is a shaddock?', 
        choices: ['A fish, the offspring of a male shad and a female haddock',  'A crystal, such as quartz, that sticks out from  A mineral vein',  'A plant that is a member of the nightshade family',  'A grapefruit'],
        answer: 'A grapefruit'},
        { question: 'Which one of the following instruments is used to measure humidity?',
        choices: ['Anemometer' , 'Ammeter' , 'Hygrometer' , 'Barometer'],
        answer: 'Hygrometer' } ,
        { question: 'Which two planets are most similar in size diameter wise?',
        choices: ['Mars and Mercury' , 'Venus and Earth' , 'Uranus and Neptune' , 'Jupiter and Saturn'],
        answer: 'Venus and Earth'  } ,
        { question: 'If a hertz is equal to one cylce per second, how manyh cycles per second does a megahertz  equal?' ,
        choices:  ['1/1,000' , '1,000' ,  '1,000,000' , '1,000,000,000']  ,
        answer: '1,000,000' } ,
        { question: 'What principle explains why cold food warms up and hot food cools off when stored at room temperature?' ,
        choices: ['Entropy' , 'Chemical equilibrium' ,  'Momentum , Relativity'],
        answer: 'Entropy' } ,
        { question: 'Which color is not considered to be one of the primary colors of light?' ,
        choices: ['Red' , 'Yellow' , 'Green' , 'Blue'],
        answer: 'Yellow' } ,
        { question: 'What causes the disease toxoplasmosis?' ,
        choices: ['A bacterium' ,  'A protozoan' , 'A virus' ,  'A prion']  ,
        answer: 'A protozoan'  } ,
        { question: 'What is the slowest wind speed a hurricane can have according to the Saffir-Simpson scale?',
        choices: ['50 MPH' ,  '74 MPH' , '96 MPH' , '110 MPH']  ,
        answer: '74 MPH'  } ,
         { question: 'Which of the following heavenly bodies have never had a spacecraft landed on it?',
        choices: ['Venus' ,  'Mars' ,  'the moon' , 'Jupiter']  ,
        answer: 'Jupiter'  } ,
         { question: 'Meat should be kept frozen at what temperature in degrees Fahrenheit?',
        choices: ['0 degrees or below' , 'Between 10 and 20 degrees' , 'Between 20 and 30 degrees' , 'Just below 32 degrees']  ,
        answer: '0 degrees or below'  }];


function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    console.log(qElement);
    console.log(questions[3].question);
  };
    createQuestionElement();

 
});
    



