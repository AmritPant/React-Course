import React, { useEffect } from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

function NewQuote() {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.replace("./quotes");
    }
  }, [status, history]);

  console.log(status);

  const addQuoteHandler = (data) => {
    sendRequest(data);
  };

  return (
    <div>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </div>
  );
}

export default NewQuote;
