const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager("./foxy.png");
ASSET_MANAGER.queueDownload("./foxy.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;
	gameEngine.addEntity(new duckAnimation(gameEngine));
	gameEngine.init(ctx);

	gameEngine.start();
});
