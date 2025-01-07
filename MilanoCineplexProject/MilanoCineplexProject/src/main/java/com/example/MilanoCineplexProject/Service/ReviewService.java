package com.example.MilanoCineplexProject.Service;

import com.example.MilanoCineplexProject.Model.ReviewModel;
import com.example.MilanoCineplexProject.Repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReviewService {
    @Autowired
    private ReviewRepository Repository;

    public List<ReviewModel> getAllReviews() {
        return Repository.findAll();
    }

    public ReviewModel saveReview(ReviewModel Model) {
        return Repository.save(Model);
    }

    public void deleteReview(int id) {
        Repository.deleteById(id);
    }

    public ReviewModel updateReview(ReviewModel Model){
        return Repository.save(Model);
    }
}
