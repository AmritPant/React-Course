import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

function DetailedQuote() {
  const params = useParams();
  const { quoteId } = params;
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => sendRequest(quoteId), [sendRequest, quoteId]);
  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  if (error) return <p className="centered  focus">{error}</p>;
  if (!loadedQuote.text) return <p>NO quote Found</p>;

  const quote = [loadedQuote].filter((quote) => quote.id === params.quoteId)[0];
  if (!quote) {
    return <p>No quote Found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${params.quoteId}/comments`} className="btn--flat">
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comments`}>
        <Comments quoteId={params.quoteId} />
      </Route>
    </div>
  );
}

export default DetailedQuote;
