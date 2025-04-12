import { AssetsManifest } from "pixi.js";

export const manifest: AssetsManifest = {
	bundles: [
		{
			name: 'game',
			assets: [
				{
					alias: 'bunny',
					src: 'bunny.png'
				}
			]
		}
	]
};
