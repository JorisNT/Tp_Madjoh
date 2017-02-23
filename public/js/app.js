'use strict';
var app = angular.module('tp', []);


app.controller('main', function($scope){
    $scope.letters = "AZERTYU←IOPQSDFGHJKLMWXCVBN";
    $scope.englishWord = "";
    $scope.displayWord = "";

    $scope.englishWord = document.getElementById('myEword').value.toUpperCase();
    initWord();


    function initWord()
    {
        $scope.displayWord = $scope.englishWord[0];
        for(var i = 0; i < $scope.englishWord.length - 1; i++)
        {
            $scope.displayWord += '*';
        }
    }

    $scope.play = function () {
      window.location.href = "/new";
    }

    $scope.checkword = function()
    {
      window.location.href = "/resp/"+$scope.displayWord;
    }

    $scope.tap = function(letter)
    {
        if(letter == '←')
        {
            for(var i = $scope.displayWord.length - 1; i >= 0 ; i--)
            {
                if(i > 0 && $scope.displayWord[i] != '*')
                {
                    $scope.displayWord = replaceAt($scope.displayWord, i, '*');
                    break;
                }
            }
        }
        else
        {
            for(var i = 0; i < $scope.displayWord.length; i++)
            {
                if($scope.displayWord[i] == '*')
                {
                    $scope.displayWord = replaceAt($scope.displayWord, i, letter);
                    break;
                }
            }
        }

    }

    function replaceAt(str, index, character)
    {
        return str.substr(0, index) + character + str.substr(index+character.length);
    }


});
