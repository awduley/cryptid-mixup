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

    // Once the new array has been made we'll run a for loop over the grid and then run an inner for loop to cycle through each inner array. Finally, we check to see if the outer array plus the inner array equals an even or an odd number. We only want to place pieces on odd numbers. Lyngbakr can only start in rows < 3, and kraken can only start in rows >= this.size - 3
  
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

  doMove(toRow, toCol, fromRow, fromCol, piece) {
    this.board.grid[toRow][toCol] = piece;
    this.board.grid[fromRow][fromCol] = null;
    if (
      !piece.isKing && ((piece.side === 'lyngbakr' && toRow === this.board.size - 1) ||
      (piece.side === 'kraken' && toRow === 0))
     ) {
      piece.isKing = true;
    }
    this.currentSide = this.currentSide === 'kraken' ? 'lyngbakr' : 'kraken';
  }

  tryMove(fromRow, fromCol, toRow, toCol) {
    const rowDiff = toRow - fromRow;
    const colDiff = toCol - fromCol;

    const piece = this.board.getPiece(fromRow, fromCol);

    // we need to check if the from piece actually is a piece and it matches up with currentSide
    if (!piece || piece.side !== this.currentSide) {
      return { success: false };
    }

    if (!this.board.isInside(toRow, toCol)) {
      return { success: false };
    }

    const toPiece = this.board.getPiece(toRow, toCol);

    if (toPiece) {
      // this means there is something there already so we can't move onto it
      return { success: false };
    }
    
    if (!piece.isKing) {
      if (piece.side === 'kraken' && rowDiff >= 0) {
        return { success: false }; // kraken must move up
      }
      if (piece.side === 'lyngbakr' && rowDiff <= 0) {
        return {success: false }; // lyngbakr must move down
      }
    }

    // Simple 1 row diagonal move and more complex 2 row capture move
    const isSimpleDiagonal = Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 1;
    const isCaptureMove = Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 2;

    // if (!isSimpleDiagonal) return { success: false };

    // If we reach here, it's a legal simple move.
    // Move the piece on the board:
    if (isSimpleDiagonal) {
      this.doMove(toRow, toCol, fromRow, fromCol, piece);

      return { success: true };
    }  

    // More complex 2 row capture chess piece move
    if (isCaptureMove) {
      const midRow = fromRow + rowDiff / 2;
      const midCol = fromCol + colDiff / 2;
      var midCell = this.board.grid[midRow][midCol]
      if (midCell !== null && midCell !== piece.side) {
        this.board.grid[midRow][midCol] = null;
        this.doMove(toRow, toCol, fromRow, fromCol, piece);

        return { success: true };
      }

      
      return { success: false };
    }
  }
}