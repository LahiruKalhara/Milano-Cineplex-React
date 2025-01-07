package com.example.MilanoCineplexProject.Repository;

import com.example.MilanoCineplexProject.Model.MovieModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<MovieModel, Integer> {
}
