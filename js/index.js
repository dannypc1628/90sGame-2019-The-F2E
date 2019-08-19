const w =1280;
const h =602;
const msg =["也許是在世界惡意的捉弄下，","一不小心投錯胎的你"
            ,"才剛創角就出生在危機四伏的魔王城裡","別說是攻擊了，光是被魔物察覺到就足以讓人致命",
        "萬幸的是你的存在感十分低落","90秒內想辦法避開路上的敵人","毫髮無傷地逃回新手村吧"]
const startGame = {
    key: 'startGame',
    preload: function(){
        this.load.image('bg', './img/bg-end.png');
        this.load.image('logo', './img/logo.png');
        this.load.spritesheet('btn', './img/btn.png', {frameWidth: 119, frameHeight: 50});
    },
    create: function(){
        this.bg = this.add.image(w/2, h/2, 'bg');
        this.logo = this.add.image(w/2, h/4*1, 'logo');
        this.add.text(w/4*1, h/8*3, msg, {color:'#6C488B',fontFamily:'Microsoft JhengHei', fontSize: '30px' ,align:'center'});
        
        var alien = this.add.sprite(w/2, h/8*7, 'btn', 0).setInteractive();

        alien.on('pointerover', function () {
            this.setFrame(1);   
        });

        alien.on('pointerout', function () {
            this.setFrame(0);
        });

        alien.on('pointerdown', ()=>{
            
            this.scene.start('playGame');
        });
    },
    update: function(){
        // 遊戲狀態更新
    }
}
const playGame = {
    key: 'playGame',
    preload: function(){
        this.load.image('bg1', './img/bg-head-sky.png');
        this.load.image('bg2', './img/bg-head-cloud.png');
        this.load.image('bg3', './img/bg-head-mountain-back.png');
        // this.load.image('bg4', './img/bg-head-mountain-front.png');
        this.load.image('bg5', './img/bg-main.png');
        this.load.image('bg6', './img/bg-footer.png');
        
    },
    create: function(){
        this.bg5 = this.add.image(w/2, h/6*4, 'bg5');
        this.bg1 = this.add.image(w/2, h/6*1, 'bg1');
        this.bg2 = this.add.image(w/2, h/6*2, 'bg2');
        this.bg3 = this.add.image(w/2, h/7*2, 'bg3');
        // this.bg4 = this.add.image(w/2, h/6*3, 'bg4');
        
        this.bg6 = this.add.image(w/2, h/9*8, 'bg6');
        
    },
    update: function(){
        // 遊戲狀態更新
    }
}

const end = {
    key: 'end',
    preload: function(){
        // 載入資源
    },
    create: function(){
        // 資源載入完成，加入遊戲物件及相關設定
    },
    update: function(){
        // 遊戲狀態更新
    }
}
const config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    parent: 'myGame',
    scene: [startGame,playGame]
}
const game = new Phaser.Game(config);