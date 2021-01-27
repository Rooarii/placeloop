let rows, m, n, num = 1;
  rows = 6;
  for (m = 1; m <= rows; m++) {
    for (n = 1; n <= m; n++){
      document.write(`${num++}  `);
    }
    document.write('<br/>');
  }