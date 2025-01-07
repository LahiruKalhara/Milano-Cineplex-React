package com.example.MilanoCineplexProject.Service;

import com.example.MilanoCineplexProject.Model.MovieModel;
import com.example.MilanoCineplexProject.Model.TicketModel;
import com.example.MilanoCineplexProject.Model.UserModel;
import com.example.MilanoCineplexProject.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository Repository;

    public List<UserModel> getAllUsers() {
        return Repository.findAll();
    }

    public UserModel saveUser(UserModel Model) {
        return Repository.save(Model);
    }

    public void deleteUser(int id) {
        Repository.deleteById(id);
    }

    public UserModel updateUser(UserModel Model){
        return Repository.save(Model);
    }
}
