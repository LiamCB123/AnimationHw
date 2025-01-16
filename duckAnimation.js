class duckAnimation {
    constructor(game){
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./foxy.png"), 4, 0, 200, 200, 3, 0.2);
        this.x = 0;
        this.y = 0;
        this.speed = 100;
    };
    update(){
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };
    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}