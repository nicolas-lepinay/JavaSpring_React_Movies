import React from 'react'
import './hero.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

function Hero({ movies }) {
    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/reviews/${movieId}`);
    }

    return (
        <div>
            <Carousel>
                {movies.map(movie => (
                        <Paper>
                            <div className="movie-card-container">
                                <div className="movie-card" style={{"--img": `url(${movie.backdrops[0]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie.poster} />
                                        </div>
                                        <div className="movie-title" onClick={() => console.log(movie)} >
                                            <h4>{movie.title}</h4>
                                        </div>
                                        <div className="movie-buttons-container">
                                            <Link to={`/trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                <div className="play-button-icon-container">
                                                    <FontAwesomeIcon className="play-button-icon"
                                                        icon={faCirclePlay}
                                                    />
                                                </div>
                                            </Link>
                                            <div className="movie-review-button-container">
                                                <Button variant ="info" onClick={() => reviews(movie.imdbId)}>Commentaires</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Paper>
                    )
                )}
            </Carousel>
        </div>
    )
}

export default Hero