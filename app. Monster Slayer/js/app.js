const vue = new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: [],
    },
    methods: {
        startGame: function () {
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var playerDamage = this.calculateDamage(10, 3);
            this.monsterHealth -= playerDamage;
            this.turns.unshift({
                isPlayer: true,
                message: `Player use normal attack for ${playerDamage} damage`,
            });
            if (this.checkWin()) return;

            this.monsterAttack();
        },
        specialAttack: function () {
            var playerDamage = this.calculateDamage(20, 10);
            this.monsterHealth -= playerDamage;
            this.turns.unshift({
                isPlayer: true,
                message: `Player use special attack for ${playerDamage} damage`,
            });
            if (this.checkWin()) return;

            this.monsterAttack();
        },
        heal: function () {
            var healPoint = 10;
            this.playerHealth += healPoint;
            if (this.playerHealth > 100) this.playerHealth = 100;
            this.turns.unshift({
                isPlayer: true,
                message: `Player heal for ${healPoint} health`,
            });
            this.monsterAttack();
        },
        giveUp: function () {
            this.isGameRunning = false;
            this.turns.unshift({
                isPlayer: true,
                message: `Player give up`,
            });
        },
        calculateDamage: function (min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                this.turns.unshift({
                    isPlayer: false,
                    message: `Monster Died`,
                });

                if (confirm('You won! Start new game?')) this.startGame();
                this.isGameRunning = false;
                return true;
            }
            if (this.playerHealth <= 0) {
                this.turns.unshift({
                    isPlayer: true,
                    message: `Player Died`,
                });

                if (confirm('You lose! Start new game?')) this.startGame();
                this.isGameRunning = false;
                return true;
            }
            return false;
        },
        monsterAttack: function () {
            var monsterDamage = this.calculateDamage(12, 5);
            this.playerHealth -= monsterDamage;
            this.turns.unshift({
                isPlayer: false,
                message: `Monster hit Player for ${monsterDamage} damage`,
            });
            return this.checkWin();
        },
    },
});
