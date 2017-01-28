  var values = [];

  function quotes() {
      var quotes = ["Fist they ignore you, Then they laugh at you , Then they fight you , Then you Win ", "Tyranny fears nothing as much as it fears awakening of peoples and vigilance of hearts. It hates none as much as it hates those who call their nation to awareness and revival; those who awaken sleeping consciences",
          "The most precious things are three:To be generous despite your poverty,To be pious and God-fearing when not watched, and To say a word of truth before someone of power",
          "Nobody knows your pain and suffering more than the Almighty. The truth is nobody really cares as much as HIM. HE is All Knowing and Most Wise.",
          "How many cares one loses when one decides not to be something but to be someone",
          "Do what you feel in your heart to be right, for you will be criticized anyway",
          "There came a time when the risk to remain tight in the bud was more painful than the risk it took to blossom",
          "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      ];

      var author = ["M.K Gandhi", "Sayyed Qutb", "Imam al-Shafi", "Mufti Ismail Menk", "Gabrielle Coco Chanel", "Eleanor Roosevelt", "Anais Nin", "Thomas A. Edison"];
      var colors = ['rgb(0,117,127)', 'rgb(45,12,99)', 'rgb(23,43,54)', 'rgb(45,32,123)', 'rgb(56,34,12)', 'rgb(123,123,43)', 'rgb(43,76,23)', 'rgb(128,231,76)'];
      if (values.length == 0) {
          for (var i = 0; i <= 7; ++i) {
              values.push(i);
          }
      }
      document.body.className = "WhatisWhat";
      var rand = values.splice(Math.random() * values.length, 1)[0];
      document.getElementById("p1").innerHTML = (quotes[rand]);
      document.getElementById("p2").innerHTML = "- " + author[rand];
      document.body.style.background = colors[rand];
      document.getElementById("p1").style.color = colors[rand];
  }


  $('.popup').click(function(event) {
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=freeCodeCamp&text=' + encodeURIComponent('"' + $('#p1').text() + '" ' + $('#p2').text()));
      var width = 575,
          height = 400,
          left = ($(window).width() - width) / 2,
          top = ($(window).height() - height) / 2,
          url = this.href,
          opts = 'status=1' +
          ',width=' + width +
          ',height=' + height +
          ',top=' + top +
          ',left=' + left;

      window.open(url, 'twitter', opts);

      return false;
  });
