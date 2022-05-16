import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQoutesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

function AllQuotes() {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => sendRequest(), [sendRequest]);
  if (status === "pending")
    return (
      <div className="centerted">
        <LoadingSpinner />
      </div>
    );

  if (error) return <p className="centerted focused">{error}</p>;
  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0))
    return <NoQoutesFound />;

  return <QuoteList quotes={loadedQuotes} />;
}

export default AllQuotes;
