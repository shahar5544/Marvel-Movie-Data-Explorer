import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import React from 'react';
import MovieList from './components/MovieList';

const App: React.FC = () => {
    return (
        <div className="App container">
            <h1 className="my-4">Marvel Movie Data Explorer</h1>
            <MovieList />
        </div>
    );
};

export default App;