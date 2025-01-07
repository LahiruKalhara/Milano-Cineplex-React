package com.example.MilanoCineplexProject.Controller;

import com.example.MilanoCineplexProject.Model.ReviewModel;
import com.example.MilanoCineplexProject.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin
public class ReviewController {
    @Autowired
    private ReviewService Service;

    @GetMapping("/View")
    public List<ReviewModel> getAllMovies() {
        return Service.getAllReviews();
    }

    @PostMapping("/Add")
    public ReviewModel createMovie(@RequestBody ReviewModel Model) {
        return Service.saveReview(Model);
    }

    @DeleteMapping("/Delete")
    public void deleteMovie(@RequestParam int id) {
        Service.deleteReview(id);
    }

    @PutMapping("/Update")
    public ReviewModel updateMovie(@RequestBody ReviewModel Model){
        return Service.updateReview(Model);
    }
}
