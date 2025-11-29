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
}