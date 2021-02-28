import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Answer from './Answer/Answer';
import Detail from './Detail/Detail';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from './Top/Top';
import Result from './Result/Result';

const Router = () => (
  <>
    <Header />
    <main>
      <BrowserRouter>
        <Route exact path="/" component={Top} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/result/:id" component={Result} />
        <Route exact path="/answer" component={Answer} />
      </BrowserRouter>
    </main>
    <Footer />
  </>
);

export default Router;
