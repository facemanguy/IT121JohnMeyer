//Create Motorcycle object
function VideoGame(title, genre, releaseDate, reviewScore){
    this.title = title;
    this.genre = genre;
    this.releaseDate = releaseDate;
    this.reviewScore = reviewScore;
    this.recommendation = function(){
        if (this.reviewScore > 75){
            return 'Yes';
        }else{
            return 'No';
        };
    };
};

var counterstrike = new VideoGame('Counter Strike: Global Offensive', 'Shooter', 2012, 94);
var cyberpunk = new VideoGame('Cyberpunk 2077', 'Role-playing game', 2020, 61);
var fuser = new VideoGame('Fuser', 'Rhythm', 2020, 81)

var item1 = '<h3>' + counterstrike.title + ', ' + counterstrike.releaseDate + '</h3>';
    item1 += '<p>Genre: ' + counterstrike.genre + '</p>';
    item1 += '<p>Review Score: ' + counterstrike.reviewScore + ', Reccomended? ';
    item1 += counterstrike.recommendation();
    item1 += '</p>';
var elItem1 = document.getElementById('game1');
elItem1.innerHTML = item1;

var item2 = '<h3>' + cyberpunk.title + ', ' + cyberpunk.releaseDate + '</h3>';
    item2 += '<p>Genre: ' + cyberpunk.genre + '</p>';
    item2 += '<p>Review Score: ' + cyberpunk.reviewScore + ', Reccomended? ';
    item2 += cyberpunk.recommendation();
    item2 += '</p>';
var elitem2 = document.getElementById('game2');
elitem2.innerHTML = item2;

var item3 = '<h3>' + fuser.title + ', ' + fuser.releaseDate + '</h3>';
    item3 += '<p>Genre: ' + fuser.genre + '</p>';
    item3 += '<p>Review Score: ' + fuser.reviewScore + ', Reccomended? '
    item3 += fuser.recommendation();
    item3 += '</p>'
var elitem3 = document.getElementById('game3');
elitem3.innerHTML = item3;