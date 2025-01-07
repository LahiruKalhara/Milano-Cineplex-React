package com.example.MilanoCineplexProject.Repository;

import com.example.MilanoCineplexProject.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Integer> {
}
