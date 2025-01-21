const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager("./duck.png");
ASSET_MANAGER.queueDownload("./duck.png");
ASSET_MANAGER.queueDownload("./beaver.png");
ASSET_MANAGER.queueDownload("./background2.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	
	gameEngine.addEntity(new duckAnimation(gameEngine));
	gameEngine.addEntity(new chaser(gameEngine));
	gameEngine.addEntity(new background());
	gameEngine.init(ctx);

	gameEngine.start();
});
