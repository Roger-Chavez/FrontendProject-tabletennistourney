angular
  .module("pingPongApp")
  .controller("playersController", function ($scope, $state, $stateParams, $log, playersService) {


    $scope.players = playersService.getPlayers()
    $scope.player = playersService.getPlayerById($stateParams.id)

    $scope.pleaseEnter = false;
    $scope.pleaseEnter2 = false;

    if ($scope.player.id == undefined || $scope.player.id == null || $scope.player.id === "") {
      console.log($scope.player);
      $scope.playerButton = true;
      $scope.formBanner = "Get started today!";
      $scope.bannerHeader = "Unlimited tournaments, get matched competitively";
      $scope.bannerMessage = "Create a group, make a tournament, keep track of rankings!";
    }
    else {
      $scope.playerButton = false;
      $scope.formBanner = "Update Info!";
      $scope.bannerHeader = "Change your name, change your age, change your birthday";
      $scope.bannerMessage = " You can't change your elo rank unless you win or lose though, sorry!";
    }

    //This function allows us to go back to profiles without having to backtrack within our browswer.
    $scope.returnToProfiles = function () {
      $state.go("players");
    }

  
//this allows me to quickly go back and forth between pictures, if I delete an id it show's me an empty object so it's not fully functioinal yet, if I can't get it by monday, I'll take it off. My main focus will be the home page
    if( $scope.player.id == $scope.players.length - 1){
      $scope.next = false;
    }
    else {
      $scope.next = true;
    }

    if($scope.player.id == 0){
      $scope.previous = false;
    }
    else{
      $scope.previous = true;
    }
   
    // console.log($scope.player)

    $scope.addPlayer = function () {
      if ($scope.player.firstName === '' || $scope.player.lastName === '') {
        if ($scope.player.firstName === '') {
          $scope.pleaseEnter = true;
        }
        else {
          $scope.pleaseEnter = false;
        }
        if ($scope.player.lastName === '') {
          $scope.pleaseEnter2 = true;
        }
        else {
          $scope.pleaseEnter2 = false;
        }
      }
      else {

        playersService.addPlayer($scope.player.firstName, $scope.player.lastName, $scope.player.email, $scope.player.dob, $scope.player.gender, $scope.player.age)
        $state.go("players");
      }
    }

    var currentProfileIndex = null;


    $scope.savePlayer = function () {
      //this for loop finds the current index of the current profile chosen to be updated so that when I hit updatete I can splice out the old object for the new object at the correct index
      for (var i = 0; i < $scope.players.length; i++) {
        if ($scope.players[i].id == $scope.player.id) {
          currentProfileIndex = i;
          // console.log(i)
        }
      }
      playersService.updatePlayer(currentProfileIndex, $scope.player.id, $scope.player.firstName, $scope.player.lastName, $scope.player.email, $scope.player.dob, $scope.player.gender, $scope.player.age, $scope.player.wins, $scope.player.losses, $scope.player.eloRank, $scope.player.img)

      $scope.playerButton = true;

    }

    $scope.deletePlayer = function () {
      // console.log($scope.player.id);
      for (var i = 0; i < $scope.players.length; i++) {
        if ($scope.players[i].id == $scope.player.id) {
          currentProfileIndex = i;
          playersService.deletePlayer(i);
        }
      }
      $state.go("players");
    }

  })