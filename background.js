class background {
    constructor(game) {
        
        this.image = ASSET_MANAGER.getAsset("./background2.png");
    }
    update(){ }
    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, 1024, 768); // Draw the background image
    }
}