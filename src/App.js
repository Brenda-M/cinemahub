import React from "react";
import './App.css'
import Layout from "./layouts/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import Error from "./pages/Error";
import TVDetails from "./pages/TVDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/Tv/:id" element={<TVDetails />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/error" element={<Error />} />
          </Routes>

        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
