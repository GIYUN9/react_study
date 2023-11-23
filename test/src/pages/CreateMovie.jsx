import React,{useState} from 'react';

const CreateMovie = (props) => {
    const {newMovie, onInputChange, onAddMovie} = props;

    return (
        <div>
            <h1>Create Movie</h1>
            <form>
                <div>
                    <input 
                        type="text"
                        name='id'
                        value={newMovie.id}
                        onChange={onInputChange}
                        placeholder='Input movie id'
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        name='title'
                        onChange={onInputChange}
                        value={newMovie.title}
                        placeholder='Input movie title'
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        name='genre'
                        onChange={onInputChange}
                        value={newMovie.genre}
                        placeholder='Input movie genre'
                    />
                </div>
                <div>
                    <label>출시일 : </label>
                    <input
                        type='date'
                        onChange={onInputChange}
                        value={newMovie.release_date}
                        name='release_date'
                    />
                </div>
            </form>
            <button onClick={onAddMovie}>Add Movie</button>
        </div>
    );
};

export default CreateMovie;