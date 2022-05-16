import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const DetailedQuote = React.lazy(() => import("./pages/DetailedQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes />
            </Route>
            <Route path="/new-quote">
              <NewQuote />
            </Route>
            <Route path="/quotes/:quoteId">
              <DetailedQuote />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
