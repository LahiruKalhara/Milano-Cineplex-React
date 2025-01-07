package com.example.MilanoCineplexProject.Controller;

import com.example.MilanoCineplexProject.Model.MovieModel;
import com.example.MilanoCineplexProject.Service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin
public class MovieController {
    @Autowired
    private MovieService Service;

    @GetMapping("/View")
    public List<MovieModel> getAllMovies() {
        return Service.getAllMovies();
    }

    @PostMapping("/Add")
    public MovieModel createMovie(@RequestBody MovieModel movie) {
        return Service.saveMovie(movie);
    }

    @DeleteMapping("/Delete")
    public void deleteMovie(@RequestParam int id) {
        Service.deleteMovie(id);
    }

    @PutMapping("/Update")
    public MovieModel updateMovie(@RequestBody MovieModel Model){
        return Service.updateMovie(Model);
    }
}
