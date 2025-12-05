export class Piece {
  constructor(side) {
    this.side = side;
    this.isKing = false;
  }
}

export class Board {
  constructor(size = 8) {
    this.size = size;
    this.grid = this.createEmptyGrid();
  }

  // Creates an 8x8 grid with null values to fill the grid array
  createEmptyGrid() {
    const rows = [];

    for (let i = 0; i < this.size; i ++) {
      const row = [];

      for (let j = 0; j < this.size; j ++) {
        row.push(null);
      }

      rows.push(row);
    }
    return rows;
  }

  // Check to make sure the selection falls within the actual board area
  isInside(row, col) {
    return(
      row >= 0 &&
      row < this.size &&
      col >= 0 &&
      col < this.size
    );
  }

  // 
  getPiece(row, col) {
    if (!this.isInside(row, col)) return null;
    return this.grid[row][col];
  }

  placeInitialBrikker() {

    // Start by calling the createEmptyGrid function to reset all values to null
    this.grid = this.createEmptyGrid();

    // Once the new array has been made we'll run a for loop over the grid and then run an inner for loop to cycle through each inner array. Finally, we check to see if the outer array plus the inner array equals an even or an odd number. We only want to place pieces on odd numbers. Lyngbakr can only go in rows < 3, and kraken can only go in rows >= this.size - 3
  
    for (let row = 0; row < this.size; row ++) {
      for (let col = 0; col < this.size; col ++ ) {
       const isOddSquare = (row + col) % 2 === 1;
       const surface = row < 3;
       const depths = row >= this.size - 3;

       if (isOddSquare && surface) {
        this.grid[row][col] = new Piece('lyngbakr');
       } else if (isOddSquare && depths) {
        this.grid[row][col] = new Piece('kraken');
       }
      }
    }
  }
}

export class Game {
  constructor() {
    this.board = new Board();
    this.currentSide = 'kraken';
  }

  newGame() {
    this.board.placeInitialBrikker();
    this.currentSide = 'kraken';
  }
}