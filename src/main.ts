import * as PIXI from 'pixi.js';

const app = new PIXI.Application<HTMLCanvasElement>({
  background: '#1099bb',
  resizeTo: window,
});

declare global {
  var __PIXI_APP__: PIXI.Application<HTMLCanvasElement>
}
globalThis.__PIXI_APP__ = app;

document.body.appendChild(app.view);

const targetAspect = 1.5;
const worldHeight = 100;

const world = new PIXI.Container();
app.stage.addChild(world);
resize(app.screen);

const bunny = PIXI.Sprite.from('bunny.png');
world.addChild(bunny);
bunny.anchor.set(0.5);

const graphics = new PIXI.Graphics();

graphics.beginFill(0xDE3249, 0.3);
graphics.lineStyle(2, 0xDE3249, 1, 0);
graphics.drawRect(-75, -50, 150, 100);
graphics.endFill();

world.addChild(graphics);

app.renderer.on('resize', (width, height) => {
  resize({ width, height });
});


function resize({ width, height }: { width: number, height: number }) {
  const aspect = width / height;

  world.x = width / 2;
  world.y = height / 2;

  world.scale.x = world.scale.y = (aspect > targetAspect ? height : width / targetAspect) / worldHeight;
}


app.ticker.add((delta) => {
  bunny.rotation += 0.1 * delta;
});
