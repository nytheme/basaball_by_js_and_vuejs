// let pitcher = '黒田';

// let batter = '新井';

{
	class Player {
		constructor(name) {
			this.name = name;
		}
	}

	class Batter extends Player {
		constructor(name, hit_ave) {
			super(name);
			this.hit_ave = hit_ave;
		}

		batting(hit_ave) {
			this.hit_ave = hit_ave;

			// for (let i = 1; i<=10; i++) {
				let number =  Math.floor(Math.random()*Math.floor(100));
		
				if (number <= hit_ave * 100) {
					console.log('ヒット！');
					let result = 'ヒット！';
					return result;
				} else if (number <= 59 && number > hit_ave) {
					console.log('空振り！');
					let result = '空振り！';
					return result;
				} else {
					console.log('ファール！');
					let result = 'ファール！';
					return result;
				}
			// }
		}
	}

	const pitcher = [
		new Player('黒田'),
	];


	const batter = [
		new Batter('新井', .301),
	];

	const result = batter[0].batting(.301);

//ここから Vue.js
	(function() {
		'use strict';

		var vm = new Vue({
			el: '#players',
			data: {
				p_name: pitcher[0].name,
				b_name: batter[0].name,
				b_hit_ave: batter[0].hit_ave,
				result: result,
			},
			methods: {}
		});
	})();

}