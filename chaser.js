class chaser {
    constructor(game){
        this.game = game;
        this.animator = new animator(ASSET_MANAGER.getAsset("./beaver.png"), 4, 0, 84, 65, 8, 0.05);
    
        this.x = 0;
        this.y = 510;
        this.speed = 200;
    };
    update(){
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1250) {
            this.x = -200;
            
        } 
    };
    draw(ctx){
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}