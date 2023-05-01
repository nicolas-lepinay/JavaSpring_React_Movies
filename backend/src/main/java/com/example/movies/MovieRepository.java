package com.example.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    // IMPORTANT : le nom doit respecter le format "find{Class}By{Property}".
    // Spring le comprend et crée la méthode automatiquement.
    // Voir : https://javatute.com/jpa/how-to-write-custom-method-in-repository-in-spring-data-jpa/
    Optional<Movie> findMovieByImdbId(String imdbId);
}
