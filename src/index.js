import { fetchWithTimeout } from './services';
var movies=require('./data/movies.json');
export function fetchMovies(){
    const resolveFunction = () => movies;
    fetchWithTimeout(1000).then(resolveFunction);
    ;
}
const moviePromise=fetchMovies();

moviePromise.then(function(results){console.log(results);});