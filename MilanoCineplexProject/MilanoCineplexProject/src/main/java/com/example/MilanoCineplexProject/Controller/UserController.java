package com.example.MilanoCineplexProject.Controller;

import com.example.MilanoCineplexProject.Model.TicketModel;
import com.example.MilanoCineplexProject.Model.UserModel;
import com.example.MilanoCineplexProject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService Service;

    @GetMapping("/View")
    public List<UserModel> getAllMovies() {
        return Service.getAllUsers();
    }

    @PostMapping("/Add")
    public UserModel createMovie(@RequestBody UserModel Model) {
        return Service.saveUser(Model);
    }

    
    @DeleteMapping("/Delete")
    public void deleteMovie(@RequestParam int id) {
        Service.deleteUser(id);
    }

    @PutMapping("/Update")
    public UserModel updateMovie(@RequestBody UserModel Model){
        return Service.updateUser(Model);
    }
}
