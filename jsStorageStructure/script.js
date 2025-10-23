import data from "./movie_quotes.json" with { type: 'json' };
export const quotes = data;

export const movieQuotes = quotes.filter((q) => {
  return q.type == "movie"
});
// console.log(movieQuotes);

export const tvQuotes = quotes.filter((q) => {
  return q.type == "tv"
});
// console.log(tvQuotes);

const heading = Object.keys(quotes[0]);
export function setHeaders() {
  let header = `<tr>`;
  heading.forEach((head) => {
    // console.log(head);
    let th = "";
    // if (head == "type") {
    //   th = `<th>${head.toUpperCase()}

    //   </th>`;
    //   // console.log(th);
    // }
    // else
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

  return quotes;
}

// export function toggleByType(quoteT, tableBody) {
//   // console.log("quoteT);
//   createTable(quoteT, tableBody);
// }

export function years(quotes) {
  let uniqueYears = new Set();
  quotes.forEach((q) => {
    uniqueYears.add(q.year)
  })

  let strOpts = `<option value="0">Select By Year</option>`
  uniqueYears.forEach((elem, index) => {
    strOpts += `<option value="${index}">${elem}</option>`
  })
  // console.log(uniqueYears);

  return strOpts;
}

export function getQuotesByYear(year, quotes) {
  // console.log(year);
  let quotesByYear = []

  quotesByYear = quotes.filter((q) => {
    return q.year == year
  })
  if (year == 0) quotesByYear = quotes;
  // console.log(arr);
  // createTable(byYears, tableBody);

  return quotesByYear;
}

export function getQuotesByQText(term, quotes) {
  let quotesByTerm = []
  quotesByTerm = quotes.filter((q) => {
    return q.quote.toLowerCase().includes(term);
  });
  // console.log(byTerm);
  // createTable(quotes, tableBody);

  return quotesByTerm;
}