export const INITIALIZE_BOARD = 'INITIALIZE_BOARD';
export const REVEAL_CELL = 'REVEAL_CELL';
export const FLAG_CELL = 'FLAG_CELL';

export function initializeBoard(rows, columns, mines) {
  return { type: INITIALIZE_BOARD, rows, columns, mines };
}

export function revealCell(row, column) {
  return { type: REVEAL_CELL, row, column };
}

export function flagCell(row, column) {
  return { type: FLAG_CELL, row, column };
}
