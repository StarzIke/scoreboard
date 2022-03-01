class scoreboard {
  constructor(dashboardelement) {
    (this.dashboardelement = dashboardelement),
      (this.teams = [
        { name: "Man United", score: 0, name2: "Tottenham", score2: 0 },
        { name: "Arsenal", score: 0, name2: "Liverpool", score2: 0 },
        { name: "PSG", score: 0, name2: "Man city", score2: 0 },
      ]);
  }
  setrandom() {
    return Math.floor(Math.random() * 10);
  }
  start() {
    let boardtemplate = document.getElementById(this.dashboardelement);
    boardtemplate.innerHTML = "";
    this.teams.forEach((team) => {
      boardtemplate.innerHTML += `
      
        <div class="board_cover">
          <div class="team_cover">
            <span class="team"> ${team.name} ${team.score =0}</span>
            vs
            <span class="team"> ${team.name2} ${team.score2 =0}</span>
          </div>
          
        </div>
        
        `;
    });
  }

  updatescore() {
    let boardtemplate = document.getElementById(this.dashboardelement);
    boardtemplate.innerHTML = "";
    this.teams.forEach((team) => {
      boardtemplate.innerHTML += `
      
        <div class="board_cover">
          <div class="team_cover">
            <span class="team"> ${team.name} ${(team.score =
        this.setrandom())}</span>
            vs
            <span class="team"> ${team.name2} ${(team.score2 =
        this.setrandom())}</span>
          </div>
          
        </div>
        
        `;
    });
  }

  finish() {
    let boardtemplate = document.getElementById(this.dashboardelement);
    this.teams.sort((a, b) => {
      const SumA = a.score + a.score2;
      const SumB = b.score + b.score2;
      return SumB - SumA;
    });
    boardtemplate.innerHTML = "";
    this.teams.forEach((team) => {
      boardtemplate.innerHTML += `
      
        <div class="board_cover">
          <div class="team_cover">
            <span class="team"> ${team.name} ${team.score}</span>
            vs
            <span class="team"> ${team.name2} ${team.score2}</span>
          </div>
          
        </div>
        
        `;
    });
  }
}

let scoreboard2 = new scoreboard("board_main");

$(".start_btn").click(function () {
  $(".board_bg").slideUp();
  setTimeout(() => {
    scoreboard2.start();
    $(".btn_cover").toggle();
    $(".strt_o").hide();
  }, 1000);
  $(this).hide();
});

$(".start_btn2").click(function () {
 
  setTimeout(() => {
    scoreboard2.start();
    $(".btn_cover").toggle();
    $(".strt_o").hide();
  }, 1000);
});

$("#update_btn").click(function () {
  scoreboard2.updatescore();
});

$("#stop_btn").click(function () {
  $(".strt_o").slideDown();
  $(".btn_cover").toggle();

  $(".strt_o").show();

  scoreboard2.finish();
});
