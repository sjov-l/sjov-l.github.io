$(function() {
	var lang = (navigator.language || navigator.userLanguage || navigator.browserLanguage).toLowerCase();
	var zh = lang.indexOf('zh') >= 0;
	var country = zh ? 'cn' : 'us';
	var isIOS = false;//navigator.userAgent.indexOf('Mac') >= 0 || navigator.userAgent.indexOf('iPhone') >= 0 || navigator.userAgent.indexOf('iPad') >= 0;
	var games = [
    {
      name_zh: 'Food Blast: Triple Match',
      subtitle_zh: 'Tap food! Match 3 to blast! Thousands of fun levels. Download now!',
      name_en: 'Food Blast: Triple Match',
      subtitle_en: 'Tap food! Match 3 to blast! Thousands of fun levels. Download now!',
      icon: 'images/icon_foodblast_triplematch.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.foodblast.triplematch'
    },
    {
      name_zh: 'EchoLit',
      subtitle_zh: 'Turn books, PDFs, or images into natural-sounding speech with AI!',
      name_en: 'EchoLit',
      subtitle_en: 'Turn books, PDFs, or images into natural-sounding speech with AI!',
      icon: 'images/icon_echolit.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.app.ai.book.listen.read.echolit'
    },
    {
      name_zh: '逆命牌局',
      subtitle_zh: '用智慧擊敗皇家，贏得榮耀！',
      name_en: 'Rebel Deck',
      subtitle_en: 'Outsmart the Royals, Claim Glory!',
      icon: 'images/icon_rebeldeck.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.rebeldeck'
    },
    {
      name_zh: '啾咪！飛飛大冒險',
      subtitle_zh: '七日登錄送造型 每日任務賺代幣 連勝競技排行榜',
      name_en: 'Flappy Wings Saga',
      subtitle_en: '7 Unique Birds, Daily Tokens, Win Streak Leaderboard',
      icon: 'images/icon_flappywingssaga.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.flappywings'
    },
    {
      name_zh: 'Weapon Master',
      subtitle_zh: 'A roguelike bag-battle game',
      name_en: 'Weapon Master',
      subtitle_en: 'A roguelike bag-battle game',
      icon: 'images/icon_weapon-master.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.free.roguelike.bagfight.weaponmaster'
    },
    {
      name_zh: 'Onet-Cute Monster Connect',
      subtitle_zh: 'A different onet puzzle game',
      name_en: 'Onet-Cute Monster Connect',
      subtitle_en: 'A different onet puzzle game',
      icon: 'images/icon_onet.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.game.free.onet.match.puzzle'
    },
    {
      name_zh: '方块消消乐',
      subtitle_zh: '一个纯粹的三消游戏',
      name_en: 'Color Block Crush',
      subtitle_en: 'A pure match-3 game',
      icon: 'images/icon_block-match3.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.block.match3'
    },
    {
      name_zh: 'Poker Match',
      subtitle_zh: 'Become a master. Get the win!',
      name_en: 'Poker Match',
      subtitle_en: 'Become a master. Get the win!',
      icon: 'images/icon_poker-master.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.poker.card.match3'
    },
    {
      name_zh: '一念之间',
      subtitle_zh: '我的日记: 灵感就在一念之间',
      name_en: 'Momento',
      subtitle_en: 'A diary app: The inspiration arises in a fleeting moment.',
      icon: 'images/icon_momento.png',
      iosUrl: null,
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.diary.journal.momento'
    },
    {
      name_zh: '记点儿',
      subtitle_zh: '简单记账，轻松存钱',
      name_en: 'Bookkeeping Er.',
      subtitle_en: 'Save money easily',
      icon: 'images/icon_keepaccounts.png',
      iosUrl: 'https://itunes.apple.com/' + country + '/app/id1542739293?mt=8',
      gpUrl: 'https://play.google.com/store/apps/details?id=me.sjov.keepaccounts'
    },
    {
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
		$('#footer_home').html('首页');
		$('#footer_privacy').html('隐私政策');//.attr('href', "privacy_zh.html");
		$('#footer_contact').html('联系我们');
	}

	var container = $('#games');
	var columns;
	var itemHtml = '<div class="column is-one-quarter is-centered">' +
						'<div class="card">' +
							'<a class="card-header-icon" href="{url}" target="_blank">' +
								'<img class="image is-128x128" src="{game.icon}" alt="{game.name}">' +
							'</a>' +
							'<div class="card-content has-text-centered" style="padding: 0;">' +
								'<span class="title is-6">{game.name}</span><br/>' +
                '<span class="subtitle is-7">{game.subtitle}</span>' +
							'</div>' +
							//'<a class="card-footer-item" href="{game.iosUrl}" target="_blank"><img src="images/download_ios.png"></a>' +
							'<a class="card-footer-item" href="{game.gpUrl}" target="_blank"><img src="images/download_android.png"></a>' +
						'</div>' +
					'</div>';
	$.each(games, function(i, game) {
		if (i % 4 == 0) {
			columns = $('<div class="columns"></div>').appendTo(container);
		}
		$(itemHtml.replace(/{game.name}/g, zh ? game.name_zh : game.name_en)
                .replace(/{game.subtitle}/g, zh ? game.subtitle_zh : game.subtitle_en)
				.replace(/{game.icon}/g, game.icon)
				.replace(/{game.iosUrl}/g, game.iosUrl)
				.replace(/{game.gpUrl}/g, game.gpUrl)
				.replace(/{url}/g, isIOS ? game.iosUrl : game.gpUrl)
			).appendTo(columns);
	});
});
