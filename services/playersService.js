angular
  .module("pingPongApp")
  .service("playersService", function () {

    var _players = []
    var _profileId = 0;

    function Player(id, firstName, lastName, email, dob, gender, age, wins, losses, elo, img) {
      this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.dob = dob,
        this.gender = gender || "N/A",
        this.age = age || "N/A";
        this.wins = wins || 0,
        this.losses = losses || 0,
        this.eloRank = elo || 2000
        this.img = img||'../images/defaultImg.jpg'
      // console.log(this)
    }


    //(Roger) These functions were within the object constructor, I attached them to the object prototype so that they didn't have to physically be in the object contructor, they can be called as if they were ex: _players.winLossRatio()
    Player.prototype.winLossRatio = function () {
      // console.log(this.wins)
      // console.log(this.losses)
      if (this.totalGames() == 0) {
        return "N / A";
      }
      else {
        return Math.floor(this.wins / (this.totalGames()) * 100) + "%";
      }
    }
    Player.prototype.totalGames = function () {
      if (this.wins == 0 && this.losses == 0) {
        return 0;
      }
      else {
        return this.wins + this.losses;
      }
    }
    
    _players.push(new Player(_profileId++, "Tom", "Anderson", "myspace1stfriend@hotmail.com", new Date('11/08/1970'), "male", 46, 20, 100, 1880,'../images/tom.jpg'));
    _players.push(new Player(_profileId++, "Stewie", "Griffin", "thestew@hotmail.com", new Date('11/30/1987'), "male", 3, 100, 1, 3000,'../images/stewie.jpg'));
    _players.push(new Player(_profileId++, "Jon", "Snow", "winteriscomming@outlook.com", new Date('11/30/1987'), "male", 42, 25, 75, 2420,'../images/jon.jpg'));
    _players.push(new Player(_profileId++, "Lisa", "Simpson", "saxaphone123@AOL.com", new Date('11/30/1987'), "female", 12, 45, 5, 2500));
    _players.push(new Player(_profileId++, "Kobe", "Bryant", "blackMamba@microsoft.com", new Date('11/30/1987'), "male", 32, 45, 5, 2500));
    _players.push(new Player(_profileId++, "Wonder", "Woman", "gpower@AOL.com", new Date('11/30/1987'), "female", 32, 53, 2, 3200));
    _players.push(new Player(_profileId++, "Stephen", "Curry", "cheffcurry@gmail.com", new Date('11/30/1987'), "male", 25, 1, 0, 2010));
    _players.push(new Player(_profileId++, "Frank", "Drebrin", "aforce@yahoo.com", new Date('11/30/1987'), "male", 61, 45, 10, 2500));
    _players.push(new Player(_profileId++, "Lois", "Lane", "llane@thedailyplanet.com", new Date('11/30/1987'), "female", 29, 5, 17, 1500));
    _players.push(new Player(_profileId++, "Mel", "Brooks", "knightsofyee@gmail.com", new Date('11/30/1987'), "male", 24, 45, 50, 1900));
    _players.push(new Player(_profileId++, "Kawhi", "Leonard", "terminator@outlook.com", new Date('11/30/1987'), "male", 24, 73, 15, 2900));
    _players.push(new Player(_profileId++, "Mother", "Earth", "plateTectonics@solarsystem.com", new Date('11/30/1987'), "female", 100, 22, 16, 2370));
    _players.push(new Player(_profileId++, "Bill", "Hicks", "relentless@hotmail.com", new Date('11/30/1987'), "male", 51, 52, 40, 2100));
    _players.push(new Player(_profileId++, "Randy", "Daytona", "RandyPing@gmail.com", new Date('11/30/1987'), "male", 100, 45, 5, 4000));
    _players.push(new Player(_profileId++, "Madam", "Bovary", "berty@gmail.com", new Date('11/30/1987'), "female", 45, 1, 0, 2015));
    _players.push(new Player(_profileId++, "Rosalind", "Franklin", "getradiated@yahoo.com", new Date('11/30/1987'), "male", 51, 4, 20, 1004));
    _players.push(new Player(_profileId++, "Jimmy", "Neutron", "protonkid@gmail.com", new Date('11/30/1987'), "male", 13, 5, 17, 1500));
    _players.push(new Player(_profileId++, "Buzz", "Lightyear", "ranger213@starcommand.com", new Date('11/30/1987'), "male", 24, 45, 50, 1900));
    _players.push(new Player(_profileId++, "John", "Lennon", "terminator@outlook.com", new Date('11/30/1987'), "male", 28, 15, 15, 3900));
    _players.push(new Player(_profileId++, "Venus", "Dimayo", "2ndrockfromsun@solarsystem.com", new Date('11/30/1987'), "female", 100, 22, 16, 2370));
    _players.push(new Player(_profileId++, "Liberty", "Bell", "relentless@hotmail.com", new Date('11/30/1987'), "female", 230, 12, 140, 1100));
    _players.push(new Player(_profileId++, "Biggie", "Smalls", "bigpapa@gmail.com", new Date('11/30/1987'), "male", 100, 450, 15, 3300));

    this.getPlayers = function () {
      return _players;
    }

    this.getPlayerById = function (id) {
      if (id == undefined || id == null || id == "") {
        var emptyPlayer = {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          dob: "",
          gender: "",
          age: "",
          wins: "",
          losses: "",
          eloRank: "",
          img:""
        };
        return emptyPlayer;
      }
      else {
        for (var i = 0; i < _players.length; i++) {
          if (_players[i].id == id) {
            return _players[i];
          }
        }
      }
    }

    this.addPlayer = function (firstName, lastName, email, dob, gender, age) {
      _players.unshift(new Player(_profileId++, firstName, lastName, email, dob, gender, age))
    }

    this.updatePlayer = function (currentProfileIndex, currentPlayerId, firstName, lastName, email, dob, gender, age, wins, losses, eloRank) {
      console.log(currentProfileIndex);
      _players.splice(currentProfileIndex, 1, new Player(currentPlayerId, firstName, lastName, email, dob, gender, age, wins, losses, eloRank, img))
    }
    


    //only input whether the first player won or lost. 
    //If it's a win log lowercase "win" if it's a loss log lowercase "loss",


    function getNewElo(p1, p2) {
      var R1 = Math.pow(10, p1.eloRank / 400)
      var R2 = Math.pow(10, p2.eloRank / 400)

      var E1 = R1 / (R1 + R2);
      var E2 = R2 / (R1 + R2);
      // console.log(E1);
      // console.log(E2); 
      T1 = Math.round((E1 + 0.00001) * 100) / 100;
      T2 = Math.round((E2 + 0.00001) * 100) / 100;
      // console.log(T1);
      // console.log(T2);

      //signals whether it was a win or lose
      var S1 = 1;
      var S2 = 0;

      // console.log(S1);
      // console.log(S2);

      var K = null;

      if (p1.eloRank <= 2300 || p2.eloRank <= 2300 || p1.totalGames < 30 || p2.totalGames < 30) {
        console.log("this works");
        K = 40;
      } else if (p1.eloRank <= 2400 || p2.eloRank <= 2400) {
        K = 20;
      }
      else {
        K = 10;
      }
      // console.log(K)

      r1 = p1.eloRank + K * (S1 - T1);
      r2 = p2.eloRank + K * (S2 - T2);
      var t1 = Math.round(r1);
      var t2 = Math.round(r2);
      console.log(t1);
      console.log(t2);

      p1.eloRank = t1;
      p2.eloRank = t2;

    }

    this.deletePlayer = function (player) {
      _players.splice(player, 1)
    }


    this.testPlayer = function (p1, p2, s1, s2) {
      var playerOne = {};
      var playerTwo = {};
      for (var i = 0; i < _players.length; i++) {
        if (_players[i].id == p1) {
          playerOne = _players[i];
        }
      }
      for (var j = 0; j < _players.length; j++) {
        if (_players[j].id == p2) {
          playerTwo = _players[j];
        }
      }
      console.log(playerOne)
      console.log(playerTwo)
      if (s1 > s2) {
        playerOne.wins += 1;
        playerTwo.losses += 1;
        getNewElo(playerOne, playerTwo);
      }
      else if (s1 < s2) {
        playerTwo.wins += 1;
        playerOne.losses += 1;
        getNewElo(playerTwo, playerOne);
      }
    }



  })