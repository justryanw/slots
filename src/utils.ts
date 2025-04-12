import { Container, Graphics } from "pixi.js";

export function drawDebug(container: Container) {
	const { width, height } = container;
	drawSquare(container, width, height, -width / 2, -height / 2);
}

export function drawSquare(container: Container, width: number, height: number, x = 0, y = 0) {
	container.addChild(
		new Graphics()
			.rect(x, y, width, height)
			.fill({ color: 0xDE3249, alpha: 0.2 })
			.stroke({ width: 2, color: 0xDE3249, alignment: 1, alpha: 0.6 })
	);
}

export function randomIntInclusive(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function arrayFrom<U>(
	length: number,
	mapfn: (index: number) => U = (): any => undefined,
	thisArg?: any,
): U[] {
	return Array.from({ length }, (_, index) => mapfn(index), thisArg);
}

export function mod(x: number, mod: number) {
	return ((x % mod) + mod) % mod;
}
