var Hero = function (name, id, cost) {
	var self = this;
	self.name = name;
	self.id = id;
	self.baseCost = cost;
	self.baseDamage = (self.baseCost / 10) * Math.pow(1 - 0.0188 * Math.min(self.id, 14), self.id);
	self.level = ko.observable(0);
	self.guild = ko.observable(0);
	self.upgrades = ko.observableArray([]);
	self.nextLevelCost = ko.computed(function () {
		return self.baseCost * Math.pow(1.07, self.level());
	});
	self.currentDamage = ko.computed(function () {
		return self.baseDamage * self.level();
	});
	self.nextLevelDamage = ko.computed(function () {
		var nextLevel = self.level() + 1
		if (nextLevel >= = 200 && nextLevel % 25 === 0) {

		}
		return self.baseDamage * self.level() + 1;
	});
};

var Upgrade = function (heroId, level, cost, effect) {
	var self = this;
	self.id = heroId;
	self.level = level;
	self.cost = cost;
	self.effect = effect;
};

var EffectTypes = [
	'HeroDamage',
	'TeamDamage',
	'Spell',
	'ClickDamage',
	'CriticalChance',
	'CriticalDamage'
];

var Effect = function (type, value) {
	var self = this;
	self.type = type;
	self.value = value;
};

var Heroes = [
	new Hero(2, 'Tree Beast', 50),
	new Hero(3, 'Ivan, the Drunken Brawler', 250),
	new Hero(4, 'Brittany, the Beach Princess', 1000),
	new Hero(5, 'The Wandering Fisherman', 4000),
	new Hero(6, 'Betty Clicker', 20000),
	new Hero(7, 'The Masked Samurai', 100000),
	new Hero(8, 'Leon', 400000),
	new Hero(9, 'The Great Forest Seer', 2500000),
	new Hero(10, 'Alexa, the Assassin', 15000000),
	new Hero(11, 'Natalia, Ice Apprentice', 100000000),
	new Hero(12, 'Mercedes, Duchess of Blades', 800000000),
	new Hero(13, 'Bobby, Bounty Hunter', 6500000000),
	new Hero(14, 'Broyle Lindoven, Fire Mage', 50000000000),
	new Hero(15, 'Sir George II, King\'s Guard', 450000000000),
	new Hero(16, 'King Midas', 4000000000000),
	new Hero(17, 'Referi Jerator, Ice Wizard', 36000000000000),
	new Hero(18, 'Abaddon', 320000000000000),
	new Hero(19, 'Ma Zhu', 2700000000000000),
	new Hero(20, 'Amenhotep', 24000000000000000),
	new Hero(21, 'Beastlord', 300000000000000000),
	new Hero(22, 'Athena, Goddess of War', 9000000000000000000),
	new Hero(23, 'Aphrodite, Goddess of Love', 350000000000000000000),
	new Hero(24, 'Shinatobe, Wind Deity', 14000000000000000000000),
	new Hero(25, 'Grant, the General', 4199999999999990000000000),
	new Hero(26, 'Frostleaf', 2100000000000000000000000000),
];