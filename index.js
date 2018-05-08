//Initialize particles.js json

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value":80, "density": {
                "enable": true, "value_area": 800
            }
        }
        , "color": {
            "value": "#ffffff"
        }
        , "shape": {
            "type":"circle", "stroke": {
                "width": 0, "color": "#000000"
            }
            , "polygon": {
                "nb_sides": 5
            }
            , "image": {
                "src": "img/github.svg", "width": 100, "height": 100
            }
        }
        , "opacity": {
            "value":0.5, "random":false, "anim": {
                "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
            }
        }
        , "size": {
            "value":3, "random":true, "anim": {
                "enable": false, "speed": 40, "size_min": 0.1, "sync": false
            }
        }
        , "line_linked": {
            "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
        }
        , "move": {
            "enable":true, "speed":6, "direction":"none", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                "enable": false, "rotateX": 600, "rotateY": 1200
            }
        }
    }
    , "interactivity": {
        "detect_on":"canvas", "events": {
            "onhover": {
                "enable": true, "mode": "repulse"
            }
            , "onclick": {
                "enable": true, "mode": "push"
            }
            , "resize":true
        }
        , "modes": {
            "grab": {
                "distance":400, "line_linked": {
                    "opacity": 1
                }
            }
            , "bubble": {
                "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
            }
            , "repulse": {
                "distance": 200, "duration": 0.4
            }
            , "push": {
                "particles_nb": 4
            }
            , "remove": {
                "particles_nb": 2
            }
        }
    }
    , "retina_detect":true
}

);


var offset = 30;

$('.navbar li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});


$(document).ready(function() {
  //change the integers below to match the height of your upper dive, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  $(window).scroll(function () {

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 950) {
      $('#nav_bar').addClass('fixed-top');
    }

    if ($(window).scrollTop() < 950) {
      $('#nav_bar').removeClass('fixed-top');
    }
  });
});


// Initialize Firebase
var config = {
  apiKey: "AIzaSyAsdcAH8Jqb3IvGwWmTz_qSWjqDVHIDyvs",
  authDomain: "chat-apps-bbe8e.firebaseapp.com",
  databaseURL: "https://chat-apps-bbe8e.firebaseio.com",
  projectId: "chat-apps-bbe8e",
  storageBucket: "chat-apps-bbe8e.appspot.com",
  messagingSenderId: "385032925067"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function sumbitContactDetails(event){


  event.preventDefault();

  var nameValue = document.getElementById("contact_name").value;
  var emailValue = document.getElementById("contact_email").value;
  var messageValue = document.getElementById("contact_message").value;

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;

  database.ref('messages/').push().set({
      name: nameValue,
      email: emailValue,
      message : messageValue,
      date: today
    });

    $('#msgModal').modal('show');
}


// Objects of my projects

var project = {
    title:"John",
    subtitle:"Doe",
    description:"",
    btnText:"blue",
    btnLink:"blue",
    pics:[]
};




$('#projectModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var selectedProject = button.data('project') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)



  switch (selectedProject) {
    case 'tsk':

        project.title = "TheScoreKeeper";
        project.subtitle = "FOOTBALL SCORE KEEPING";
        project.description = "TheScoreKeeper helps you to create, organize and maintain your football tournaments. Android app created using Java and backend based on PHP, Firebase and MYSQL.";
        project.btnText = "VISIT APP";
        project.btnLink = "https://play.google.com/store/apps/details?id=com.burhan.thescorekeeper";
        project.pics = ['thescorekeeper/1.png','thescorekeeper/2.png','thescorekeeper/3.png','thescorekeeper/4.png','thescorekeeper/5.png','thescorekeeper/6.png','thescorekeeper/7.png'];

        setModal(modal, project);
      break;

    case 'smack':

        project.title = "SmackChat";
        project.subtitle = "CHAT APP";
        project.description = "SmackChat is an Slack clone iOS app made with Swift, Node and MongoDB. It allows users to create channels and chat with each other in real time.";
        project.btnText = "VIEW PROJECT";
        project.btnLink = "https://github.com/burhanshakir/chat-app-ios";
        project.pics = ['smack/login.png','smack/create.png','smack/createChannel.png','smack/chats.png','smack/channels.png','smack/avtrL.png','smack/avtrD.png'];

        setModal(modal, project);
        break;

    case 'bout':

        project.title = "Breakout";
        project.subtitle = "iOS GAME";
        project.description = "Breakout is a classic iOS game. Players move the board around to push the ball and break the bricks. It is built using Swift";
        project.btnText = "VIEW PROJECT";
        project.btnLink = "https://github.com/burhanshakir/breakout-ios-game";
        project.pics = ['breakout/pic1.png','breakout/pic2.png'];

        setModal(modal, project);
        break;

    case 'cars':
        project.title = "Dodge Cars";
        project.subtitle = "Mobile Car racing game";
        project.description = "Dodge cars is a 2D mobile game where the player can control their car from the accelerometer. Created using C# and Unity";
        project.btnText = "VIEW PROJECT";
        project.btnLink = "https://github.com/burhanshakir/Dodge-Cars";
        project.pics = ['https://images.unsplash.com/photo-1506153519530-95cb935e1701?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c87495f0d4eb88f17bb1b805d9ff1422&auto=format&fit=crop&w=1051&q=80'];

        setModal(modal, project);
        break;

    case 'recomm':
          project.title = "Movie Recommender";
          project.subtitle = "Recommender Systems";
          project.description = "A movie recommender system based on Movie Lens data set using pandas and python. Recommends movie based on rating of a test user.";
          project.btnText = "VIEW PROJECT";
          project.btnLink = "https://github.com/burhanshakir/MovieRecommender";
          project.pics = ['https://images.unsplash.com/photo-1518885137200-434f43a6d583?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=636f844feafdb6e4f4b57340a97c10de&auto=format&fit=crop&w=1050&q=80'];

          setModal(modal, project);
        break;

    case 'tcg':
          project.title = "The RGB Game";
          project.subtitle = "Web Application";
          project.description = "A quiz game where the user tries to guess the correct color based on the RGB code. Developed using HTML, CSS, Javascript.";
          project.btnText = "VIEW APP";
          project.btnLink = "http://thescorekeeper.gwiddle.co.uk/colorgame.html";
          project.pics = ['colorgame/pic.png'];

          setModal(modal, project);
          break;


    default:

  }

})

function setModal(modal, project){

  // var modal = $(this)

  modal.find('.modal-project-title').text(project.title)
  modal.find('.modal-subtitle').text(project.subtitle)
  modal.find('.modal-desc').text(project.description)
  modal.find('.modal-btn').text(project.btnText)
  modal.find('.modal-btn').attr('href',project.btnLink)

  $(document).ready(function(){

  $(".carousel-inner .carousel-item").remove();
  $(".carousel-indicators .indicators").remove();
  for(var i=0 ; i< project.pics.length ; i++) {

    $('<div class="carousel-item text-centre"><img class="d-block img-fluid" src="'+project.pics[i]+'"></div>').appendTo('.carousel-inner');
    $('<li class="indicators" data-target="#demo" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')

  }
  $('.carousel-item').first().addClass('active');
  $('.carousel-indicators > li').first().addClass('active');
  $('#demo').carousel();
});

}

// Bar Animation

(function (document){

  var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));

  _bars.map(function(bar,index){
    setTimeout(function(){

      var bar_width = (bar.dataset.value * 80/100)
      // console.log(bar_width);

      bar.style.width = bar_width + '%';
    }, 100);

  })

})(document);
