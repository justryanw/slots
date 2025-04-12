export const COLUMNS = 4;
export const ROWS = 3;

export const SYMBOL_SIZE = 200;
export const SYMBOL_GAP = 20;
export const SYMBOL_SPACING = SYMBOL_SIZE + SYMBOL_GAP;

export const EXTRAS = 2;
export const EXTRA_DISTANCE = EXTRAS / 2 + 0.5;
export const SYMBOL_COUNT = ROWS + EXTRAS;

export const REELS_WIDTH = COLUMNS * SYMBOL_SPACING - SYMBOL_GAP;
export const REELS_HEIGHT = ROWS * SYMBOL_SPACING - SYMBOL_GAP;

export enum SymbolValue {
	L1 = 'l1',
	L2 = 'l2',
	L3 = 'l3',
	M1 = 'm1',
	M2 = 'm2',
	M3 = 'm3',
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3'
};
