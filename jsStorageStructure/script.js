import data from "./movie_quotes.json" with { type: 'json' };
export const quotes = data;

export const movieQuotes = quotes.filter((q) => {
  if (q.type == "movie") return q;
});
// console.log(movieQuotes);

export const tvQuotes = quotes.filter((q) => {
  if (q.type == "tv") return q;
});
// console.log(tvQuotes);

const heading = Object.keys(quotes[0]);
export function setHeaders() {
  let header = `<tr>`;
  heading.forEach((head) => {
    // console.log(head);
    let th = "";
    if (head == "type") {
      th = `<th>${head.toUpperCase()}
        <br>
        <span><input type="radio" name="rdb" id="rdbMovie" value="Movie">
        <label for="rdbMovie">Movie</label></span>&nbsp;
        <span><input type="radio" name="rdb" id="rdbTV" value="TV">
        <label for="rdbTV">TV</label></span>
      </th>`;
      // console.log(th);
    } else
      th = `<th>${head.toUpperCase()}</th>`;
    header += th;
    // console.log(header);
  });
  header += `</tr>`;
  return header;
}

export function createTable(quotes, tableBody) {
  let table = "";
  quotes.forEach((q) => {
    let trow = `<tr>`;
    heading.forEach((k) => {
      const tdata = `<td>${q[k]}</td>`
      trow += tdata;
    });
    trow += `</tr>`
    table += trow;
  });
  // console.log(table);

  tableBody.innerHTML = table;
}

export function toggleByType(quoteT, tableBody) {
  // console.log("quoteT);
  createTable(quoteT, tableBody);
}

// export function (params) {
  
// }
