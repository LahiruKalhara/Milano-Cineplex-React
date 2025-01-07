package com.example.MilanoCineplexProject.Repository;

import com.example.MilanoCineplexProject.Model.ReviewModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<ReviewModel,Integer> {
}
