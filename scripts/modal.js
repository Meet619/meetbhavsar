$(document).ready(function() {
  // MODAL
  var modalText = {
    flutter: {
      title: 'Flutter Quiz App',
      tag: 'Simple Quiz App',
      detail:
        'Choose the option of your choice and you will be cateroize into a number of possibilities.',
      link1: 'https://github.com/Meet619/Flutter-Quiz-App'
    },
    tictaetoe: {
      title: 'Tic Tae Toe',
      tag: 'Cross (X) and (0) Android Game',
      detail:
        'The unique cross and zero Android Game.',
      link1: 'https://github.com/Meet619/TicTaeToe'
    },
    budget: {
      title: 'Budget-App',
      tag: 'Fun Game',
      detail:
        'Analyze your monthly or annually income and maintain a list of your inventories and expenses in your everday life. Know your earnings and savings. This website will help you to reduce effort in making notes.',
      link1: 'https://github.com/Meet619/Budget-App'
    },
    dom: {
      title: 'DOM-pig-game',
      tag: 'Fun Game',
      detail:
      'Roll the Dice and Hold numbers to update score in a current change. Continue your chance until you roll -1.',
      link1: 'https://github.com/Meet619/DOM-pig-game'
    },
    book: {
      title: 'The Book Source Hub',
      tag: 'Free Books Download',
      detail:
        'The Website where all books for University subjects as well as all Reference Books are free for Downloading.',
        link: 'https://thebooksourcehub.000webhostapp.com/',
        link1: 'https://github.com/Meet619/TheBookSourceHub'
    },
    careerbot: {
      title: 'Career Guidance Chatbot',
      tag: 'Career Consultancy',
      detail:
        'Career Guidance Chatbot is a AI chatbot works on Machine Learning algorithm to predict the answers based on the User queries. It is trained with the predifined Datasets of Career Related questions. Questions are problems student faces after 10th and 12th to select their further career streams . It uses Flask API to integrate in web page',
      link: 'https://careerguidancebot.herokuapp.com/',
      link1: 'https://github.com/Meet619/CareerBot'
    },
    cnn: {
      title: 'Image Recognition using CNN',
      tag: 'Classification',
      detail:
        'Image classification! The convolutional neural network (CNN) is a class of deep learning neural networks. CNNs represent a huge breakthrough in image recognition. Theyy are most commonly used to analyze visual imagery and are frequently working behind the scenes in image classification',
        link1: 'https://github.com/Meet619/Image-Classification'
      },
    rnn: {
      title: 'RNN Chatbot',
      tag: 'Virtual Robot like Human',
      detail:
        'Conversation with virtual agent like bot just like normal Humans. Uses SeqToSeq Model to train the Huge Data of Cornell Movie Data Corpus. The Best Chatbot ever till today.',
        link1: 'https://github.com/Meet619/RNN-chatbot-'
    },
    rp: {
      title: 'R Programming',
      tag: 'Basic Tutorial',
      detail:
        'Get all R Language Basic files here for absolute beginners.',
        link1:'https://github.com/Meet619/R-Basics'
    },
    unigo: {
      title: 'The UNIGO',
      tag: 'A COMMUNITY MOBILE APPLICATION WHERE PEOPLE CAN BE SHARE POST AND MAINTAIN TRANSPERANCY, DECENTRALIZE AND IMMUTABLE RIGHTS',
      detail:
        'Heard of google Local guides? How they contribute to google maps about various places, and millions of people rely on their contributions to decide where to go and what to do. A community of local helpers who are concerned about the environment and take initiative to improve changing climatic conditions. ',
        link1:'https://github.com/letscodedev/UNIGO'
    },
    Connected: {
      title: 'The Connected College',
      tag: 'The ATTENDANCE TRACKER, LIVE SCORE UPDATION ,CANTEEN ORDERS ,CLEANLINESS FORM.',
      detail:
        'The website provides maintainance of attendace online. Live Cricket Update of matches ongoing in either Universities or in locality can be possible. Additionally pre-ordering of Canteen Food is avaliable to students which saves their waiting time because recess break is of less Duration.',
        link1:'https://github.com/Meet619/Connected-College'  
    },
    ann: {
      title: 'ANN Churn Modeling',
      tag: 'Data Analysis',
      detail:
      'Analyzing Data of organization based on number of parameters and finding the probability of whether they will continue the job or leave it.',
        link1:'https://github.com/Meet619/ANN-ChurnData'
       
    }

  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

// button1 
  $('#gallery .button1').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button1').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button1').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

        if (modalText[id].link1)
      $('#modal .button1')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link1);  

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
