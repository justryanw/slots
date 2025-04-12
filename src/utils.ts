import { Container, Graphics } from "pixi.js";

export function drawDebug(container: Container) {
	const { width, height } = container;
	container.addChild(
		new Graphics()
			.rect(-width / 2, -height / 2, width, height)
			.fill({ color: 0xDE3249, alpha: 0.2 })
			.stroke({ width: 2, color: 0xDE3249, alignment: 1, alpha: 0.6 })
	);
}

export function randomIntInclusive(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function ArrayFrom<U>(
	length: number,
	mapfn: (index: number) => U = (): any => undefined,
	thisArg?: any,
): U[] {
	return Array.from({ length }, (_, index) => mapfn(index), thisArg);
}
