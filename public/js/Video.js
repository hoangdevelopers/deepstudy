/* video typedef. */
var video_t = function (scene, id, x, y, texture, file, width, height, loop, loadedCb) {
	/* set texture pointer to new canvas. */
	scene.textures.createCanvas(texture, width, height);
	Phaser.GameObjects.Image.call(this, scene, x, y, texture);

	/* gameobject data. */
	this.id = id;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;

	/* video data. */
	this.loaded = false;
	this.loop = false;
	if (loop)
		this.loop = true;

	/* create video as html5 video element. */
	this.video = document.createElement('video');
	this.video.muted = true;
	this.video.autoplay = true;
	this.video.src = file;

	/* laziness - should use .call(this, ...) */
	var _this = this;

	/* hook video event listener into animation. */
	this.video.oncanplay = () => {

	}
	this.video.addEventListener('loadeddata', () => {
		setTimeout(() => {
			this.texture.context.drawImage(this.video, 0, 0);
			this.texture.refresh();
			this.loaded = true;
			loadedCb();
		}, 1000)

	});
	/* loop by playing on 'end' event listener. */
	if (this.loop) {
		this.video.addEventListener('ended', () => {
			this.video.play();
		});
	}

	/* dragging. */
	scene.add.existing(this);

	return this;
}
video_t.prototype.constructor = video_t;
video_t.prototype = Object.create(Phaser.GameObjects.Image.prototype);

video_t.prototype.update = function () {
	/* phaser's update call. */
	if (this.loaded) {
		this.texture.context.drawImage(this.video, 0, 0);
		/* beware of refresh and issues with overloading the GPU  - need more research here. */
		this.texture.refresh();
		//this.texture.update();
	}
}
video_t.prototype.time = function () {
	return this.video.currentTime;
}

video_t.prototype.play = function () {

	var promise = this.video.play();;

	if (promise !== undefined) {
		promise.then(_ => {
			// Autoplay started!
			this.video.muted = false;
		}).catch(error => {
			setTimeout(() => {
				this.video.play();
				this.video.muted = false;
			}, 100)
			// Autoplay was prevented.
			// Show a "Play" button so that user can start playback.
		});
	}

}
