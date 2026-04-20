$(function() {
  // function getLngParam() {
    // var m = location.search.match(/[?&]lng=([^&]+)/i);
    // return m ? m[1].toLowerCase() : null;
  // }
  // var lngParam = getLngParam();
  // var zh;
  // if (lngParam === 'en') {
    // zh = false;
  // } else if (lngParam === 'zh') {
    // zh = true;
  // } else {
    // var lang = (navigator.language || navigator.userLanguage || navigator.browserLanguage).toLowerCase();
    // zh = lang.indexOf('zh') >= 0;
  // }
  // var country = zh ? 'cn' : 'us';
  
  function getSearchParam(key) {
    // var m = location.search.match(/[?&]tab=([^&]+)/i);
    // return m ? (Number(m[1]) === 2 ? 2 : 1) : 1;
    var params = new URLSearchParams(window.location.search);
    return params.get(key);
  }
  
  var tab = Number(getSearchParam("tab")) === 1 ? 1 : 2;
  var zh = false;
  var country = 'us';
  var isIOS = false;//navigator.userAgent.indexOf('Mac') >= 0 || navigator.userAgent.indexOf('iPhone') >= 0 || navigator.userAgent.indexOf('iPad') >= 0;
  var apps = [
    {
      type: 'app',
      name_zh: "InkSum: AI Handwriting OCR",
      subtitle_zh: "Convert handwritten notes to text and smart AI summaries.",
      name_en: "InkSum: AI Handwriting OCR",
      subtitle_en: "Convert handwritten notes to text and smart AI summaries.",
      icon: 'images/icon_ink-sum.png',
      iosUrl: null,
      gpUrl: "https://play.google.com/store/apps/details?id=me.sjov.ink_sum"
    },
    {
      type: 'game',
      name_zh: "Color Block Crush 2: Roguelite",
      subtitle_zh: "Roguelite Match-3 Puzzle! Build your strategy in this colorful adventure!",
      name_en: "Color Block Crush 2: Roguelite",
      subtitle_en: "Roguelite Match-3 Puzzle! Build your strategy in this colorful adventure!",
      icon: 'images/icon_color_block_match3_2.png',
      iosUrl: null,
      gpUrl: "https://play.google.com/store/apps/details?id=me.sjov.game.block.match3.crush.roguelite"
    },
    {
      type: 'game',
      name_zh: 'Food Blast: Triple Match',
      subtitle_zh: 'Tap food! Match 3 to blast! Thousands of fun levels. Download now!',
      name_en: 'Food Blast: Triple Match',
      subtitle_en: 'Tap food! Match 3 to blast! Thousands of fun levels. Download now!',
      icon: 'images/icon_foodblast_triplematch.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.foodblast.triplematch'
    },
    {
      type: 'app',
      name_zh: 'EchoLit',
      subtitle_zh: 'Turn books, PDFs, or images into natural-sounding speech with AI!',
      name_en: 'EchoLit',
      subtitle_en: 'Turn books, PDFs, or images into natural-sounding speech with AI!',
      icon: 'images/icon_echolit.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.app.ai.book.listen.read.echolit'
    },
    {
      type: 'game',
      name_zh: '逆命牌局',
      subtitle_zh: '用智慧擊敗皇家，贏得榮耀！',
      name_en: 'Rebel Deck',
      subtitle_en: 'Outsmart the Royals, Claim Glory!',
      icon: 'images/icon_rebeldeck.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.rebeldeck'
    },
    {
      type: 'game',
      name_zh: '啾咪！飛飛大冒險',
      subtitle_zh: '七日登錄送造型 每日任務賺代幣 連勝競技排行榜',
      name_en: 'Flappy Wings Saga',
      subtitle_en: '7 Unique Birds, Daily Tokens, Win Streak Leaderboard',
      icon: 'images/icon_flappywingssaga.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.flappywings'
    },
    {
      type: 'game',
      name_zh: 'Weapon Master',
      subtitle_zh: 'A roguelike bag-battle game',
      name_en: 'Weapon Master',
      subtitle_en: 'A roguelike bag-battle game',
      icon: 'images/icon_weapon-master.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.free.roguelike.bagfight.weaponmaster'
    },
    {
      type: 'game',
      name_zh: 'Onet-Cute Monster Connect',
      subtitle_zh: 'A different onet puzzle game',
      name_en: 'Onet-Cute Monster Connect',
      subtitle_en: 'A different onet puzzle game',
      icon: 'images/icon_onet.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.free.onet.match.puzzle'
    },
    {
      type: 'game',
      name_zh: '方块消消乐',
      subtitle_zh: '一个纯粹的三消游戏',
      name_en: 'Color Block Crush',
      subtitle_en: 'A pure match-3 game',
      icon: 'images/icon_block-match3.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.block.match3'
    },
    {
      type: 'game',
      name_zh: 'Poker Match',
      subtitle_zh: 'Become a master. Get the win!',
      name_en: 'Poker Match',
      subtitle_en: 'Become a master. Get the win!',
      icon: 'images/icon_poker-master.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.poker.card.match3'
    },
    {
      type: 'app',
      name_zh: '一念之间',
      subtitle_zh: '我的日记: 灵感就在一念之间',
      name_en: 'Momento',
      subtitle_en: 'A diary app: The inspiration arises in a fleeting moment.',
      icon: 'images/icon_momento.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.diary.journal.momento'
    },
    {
      type: 'app',
      name_zh: '记点儿',
      subtitle_zh: '简单记账，轻松存钱',
      name_en: 'Bookkeeping Er.',
      subtitle_en: 'Save money easily',
      icon: 'images/icon_keepaccounts.png',
      iosUrl: 'https://itunes.apple.com/' + country + '/app/id1542739293?mt=8',
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.keepaccounts'
    },
    {
      type: 'app',
      name_zh: '自习助手',
      subtitle_zh: '计划清单与时间管理',
      name_en: 'Self-study Assistant',
      subtitle_en: 'Pomodoro and Todo List',
      icon: 'images/icon_study_room.png',
      iosUrl: 'https://itunes.apple.com/' + country + '/app/id1544247778?mt=8',
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.study_room'
    }
  ];

  if (zh) {
    $('title').html('Mud Code Studio - 免费苹果/安卓手机游戏');
    $('#hero_tagline').html('好玩免费的游戏与工具');
    $('#tab_game').html('游戏');
    $('#tab_app').html('应用');
    $('#footer_home').html('首页');
    $('#footer_privacy').html('隐私政策');
    $('#footer_contact').html('联系我们');
  } else {
    $('#hero_tagline').html('Free Games & Apps for Everyone');
    $('#tab_game').html('Games');
    $('#tab_app').html('Apps');
  }

  function buildDownloadBtns(game) {
    var btns = '';
    if (game.iosUrl) {
      btns += '<a class="download-btn" href="' + game.iosUrl + '" target="_blank"><img src="images/download_ios.png" alt="App Store"></a>';
    }
    if (game.gpUrl) {
      btns += '<a class="download-btn" href="' + game.gpUrl + '" target="_blank"><img src="images/download_android.png" alt="Google Play"></a>';
    }
    return btns;
  }

  var name, subtitle, card, target;
  $.each(apps, function(i, app) {
    name = zh ? app.name_zh : app.name_en;
    subtitle = zh ? app.subtitle_zh : app.subtitle_en;
    var url = isIOS ? app.iosUrl : app.gpUrl;
    if (!url) url = app.gpUrl || app.iosUrl;
    card = $('<article class="game-card">' +
      '<a class="game-card-link" href="' + url + '" target="_blank">' +
        '<div class="game-card-icon-wrap">' +
          '<img class="game-card-icon" src="' + app.icon + '" alt="' + name + '">' +
        '</div>' +
        '<div class="game-card-body">' +
          '<h2 class="game-card-title">' + name + '</h2>' +
          '<p class="game-card-subtitle">' + subtitle + '</p>' +
        '</div>' +
      '</a>' +
      '<div class="game-card-footer">' + buildDownloadBtns(app) + '</div>' +
    '</article>');
    target = app.type === 'game' ? $('#games') : $('#apps');
    target.append(card);
  });

  $('.tab-btn').on('click', function() {
    var tab = $(this).data('tab');
    $('.tab-btn').removeClass('is-active');
    $(this).addClass('is-active');
    $('.tab-pane').removeClass('is-active');
    $('.tab-pane[data-tab="' + tab + '"]').addClass('is-active');
  });
  
  $(document).ready(function() {
    $(tab === 1 ? '#tab_game' : '#tab_app').trigger('click');
  });
});
