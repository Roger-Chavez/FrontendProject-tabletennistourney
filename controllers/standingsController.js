angular
  .module("pingPongApp")
  .controller("standingsController", function ($scope, standingsService, playersService) {

    $scope.players = playersService.getPlayers()

    $scope.logInfo = function () {
      playersService.testPlayer($scope.player1, $scope.player2, $scope.scorePlayerOne, $scope.scorePlayerTwo)
      $scope.scorePlayerOne = ""
      $scope.scorePlayerTwo = ""
      $scope.player1 = ""
      $scope.player2 = ""
    }

    $scope.sortType = 'firstName';
    $scope.sortReverse = false;

    $scope.lessThan = function(age, val) {
      return function(item) {
        return item[age] < val;
      }
    }
 
   $scope.shouldFilter === true
   
   $scope.clickFilterOn = function() {
    $scope.shouldFilter ===false
   }

  })