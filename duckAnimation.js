class duckAnimation {
    constructor(game){
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./duck.png"), 4, 0, 52, 55, 8, 0.05);
    
        this.x = 300;
        this.y = 550;
        this.speed = 200;
    };
    update(){
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024){
            this.x = -425;
        
        }
    
    };
    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}