$(function() {
	var lang = (navigator.language || navigator.userLanguage || navigator.browserLanguage).toLowerCase();
	var zh = lang.indexOf('zh') >= 0;
	var country = zh ? 'cn' : 'us';
	var isIOS = navigator.userAgent.indexOf('Mac') >= 0 || navigator.userAgent.indexOf('iPhone') >= 0 || navigator.userAgent.indexOf('iPad') >= 0;
	var games = [
    {
      name_zh: '小蓝记账',
      subtitle_zh: '简洁的记账App',
      name_en: 'Bookkeeping XLan',
      subtitle_en: 'A simple bookkeeping app.',
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
		$('title').html('L.W Studio - 免费苹果/安卓手机游戏');
		$('#footer_home').html('首页');
		$('#footer_privacy').html('隐私政策').attr('href', "privacy_zh.html");
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
							'<a class="card-footer-item" href="{game.iosUrl}" target="_blank"><img src="images/download_ios.png"></a>' +
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
