import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import AddQuote from "./pages/AddQuote";
import AllQuotes from "./pages/AllQuotes";
import DetailedQuote from "./pages/DetailedQuote";
import PageNotFound from "./pages/PageNotFound";

// const DetailedQuote = React.lazy(() => import('./pages/DetailedQuote'));
// const AddQuote = React.lazy(() => import('./pages/AddQuote'));
// const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

function App() {
  return (
    <Layout>
      {/* <Suspense fallback={<div className="centered"><LoadingSpinner /></div>}> */}
        <Switch>
          <Route path='/' exact>
            <Redirect to={'/quotes'} />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <DetailedQuote />
          </Route>
          <Route path='/add-quote'>
            <AddQuote />
          </Route>
          <Route path=''>
            <PageNotFound />
          </Route>
        </Switch>
      {/* </Suspense> */}
    </Layout>
  );
}

export default App;
