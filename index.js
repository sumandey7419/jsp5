let row =prompt("Enter Row Number");
let col =prompt("Enter Column Number");
row=Number.parseInt(row)
col=Number.parseInt(col)
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    document.write("1 ");
  }
  document.write("<br>");
}