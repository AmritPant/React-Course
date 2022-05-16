import { Fragment } from "react";
import { useHistory, useLocation } from "react-router";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const isAcending = urlParams.get("sort") === "asc";

  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  console.log(props.quotes);
  const sortedQuotes = sortQuotes(props.quotes, isAcending);

  const clickShortHandler = () => {
    const linkString = `/quotes?sort=${isAcending ? "desc" : "asc"}`;
    history.push(linkString);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={clickShortHandler}>
          Sort {isAcending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
