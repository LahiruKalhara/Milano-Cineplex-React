package com.example.MilanoCineplexProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="Movies")
public class MovieModel {
    @Id
    @GeneratedValue
    private int MovieID;
    private String MovieName;
    private String MovieType;
    private String MovieDirector;
    private String MovieReleaseDate;
    private String MovieUrl;

    public MovieModel() {
    }

    public MovieModel(int movieID, String movieName, String movieType, String movieDirector, String movieReleaseDate, String movieUrl) {
        MovieID = movieID;
        MovieName = movieName;
        MovieType = movieType;
        MovieDirector = movieDirector;
        MovieReleaseDate = movieReleaseDate;
        MovieUrl = movieUrl;
    }

    public int getMovieID() {
        return MovieID;
    }

    public void setMovieID(int movieID) {
        MovieID = movieID;
    }

    public String getMovieName() {
        return MovieName;
    }

    public void setMovieName(String movieName) {
        MovieName = movieName;
    }

    public String getMovieType() {
        return MovieType;
    }

    public void setMovieType(String movieType) {
        MovieType = movieType;
    }

    public String getMovieDirector() {
        return MovieDirector;
    }

    public void setMovieDirector(String movieDirector) {
        MovieDirector = movieDirector;
    }

    public String getMovieReleaseDate() {
        return MovieReleaseDate;
    }

    public void setMovieReleaseDate(String movieReleaseDate) {
        MovieReleaseDate = movieReleaseDate;
    }

    public String getMovieUrl() {
        return MovieUrl;
    }

    public void setMovieUrl(String movieUrl) {
        MovieUrl = movieUrl;
    }
}
