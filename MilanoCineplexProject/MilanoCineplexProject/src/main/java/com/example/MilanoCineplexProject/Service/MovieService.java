package com.example.MilanoCineplexProject.Service;

import com.example.MilanoCineplexProject.Model.MovieModel;
import com.example.MilanoCineplexProject.Repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository Repository;

    public List<MovieModel> getAllMovies() {
        return Repository.findAll();
    }

    public MovieModel saveMovie(MovieModel Model) {
        return Repository.save(Model);
    }

    public void deleteMovie(int id) {
        Repository.deleteById(id);
    }

    public MovieModel updateMovie(MovieModel Model){
        return Repository.save(Model);
    }
}
