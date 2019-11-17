$(document).ready(function() {

var software = 
[
    {
      "name": "MS Word",
      "version": "13.2.1."
    },
    {
      "name": "MS Excel",
      "version": "13.4.2"
    },
    {
      "name": "AngularJS",
      "version": "1.7.1"
    },
    {
      "name": "Angular",
      "version": "8.1.13"
    },
    {
      "name": "React",
      "version": "0.0.5"
    },
    {
      "name": "Vue.js",
      "version": "2.6"
    },
    {
      "name": "Ember.js",
      "version": "3.10.1"
    },
    {
      "name": "Visual Studio Code",
      "version": "1.39.2"
    },
    {
      "name": "Atom",
      "version": "1.41.0"
    },
    {
      "name": "Sublime",
      "version": "3.12.0"
    },
    {
      "name": "DataGrip",
      "version": "2019.2.6"
    }
  ];

  $(".submit").click(function(){
    var input = $(".input").val();
    var inputPart = input.split('.');
    var inputPositionZero = parseInt(inputPart[0]);
    var inputPositionOne = parseInt(inputPart[1]);
    var inputPositionTwo = parseInt(inputPart[2]);

    $.each(software, function(index, element){
      var versionPart = element.version.split(".");
      var versionPositionZero = parseInt(versionPart[0]);
      var versionPositionOne = parseInt(versionPart[1]);
      var versionPositionTwo = parseInt(versionPart[2]);
      
      if(versionPositionZero > inputPositionZero){
        console.log(element.name);
      }  
      if(versionPositionZero == inputPositionZero){
        if(isNaN(inputPositionOne)){
          console.log(element.name);
        }
        if(versionPositionOne > inputPositionOne){
          console.log(element.name);
        }
        if(versionPositionOne == inputPositionOne){
          if(isNaN(inputPositionTwo)){
            console.log(element.name);
          }
          if(versionPositionTwo > inputPositionTwo){
            console.log(element.name);
          }
        }
      }
    });
  });

  $(".clear").click(function(){
    $(".input").val("");
  });
});

//Ran out of time before I could dry this up and write a recursive function