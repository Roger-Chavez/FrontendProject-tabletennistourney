var app = angular.module("pingPongApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    // .state("home", {
    //   url: "/",
    //   templateUrl: "./views/home.html",
    //   controller: "homeController"
    // })

    //Roger: This is where the users are made.
    .state("players", {
      url: "/players",
      templateUrl: "./views/users_index.html",
      controller: "playersController"
    })
    //Roger: This is where they're profiles are displayed.    
    .state("home", {
      url: "/",
      templateUrl: "./views/users_form.html",
      controller: "playersController"
    })

    .state("showPlayer", {
      url: "/players/:id",
      templateUrl: "./views/users_show.html",
      controller: "playersController"
    })

    .state("editPlayer", {
      url: "/players/:id/edit",
      templateUrl: "./views/users_form.html",
      controller: "playersController"
    })

    .state("schedules", {
      url: "/schedules",
      templateUrl: "./views/schedules.html",
      controller: "schedulesController"
    })

    .state("standings", {
      url: "/standings",
      templateUrl: "./views/standings.html",
      controller: "standingsController"
    })

})