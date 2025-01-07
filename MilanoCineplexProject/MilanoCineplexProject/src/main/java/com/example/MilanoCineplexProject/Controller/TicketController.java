package com.example.MilanoCineplexProject.Controller;

import com.example.MilanoCineplexProject.Model.MovieModel;
import com.example.MilanoCineplexProject.Model.TicketModel;
import com.example.MilanoCineplexProject.Service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
@CrossOrigin
public class TicketController {
    @Autowired
    private TicketService Service;

    @GetMapping("/View")
    public List<TicketModel> getAllMovies() {
        return Service.getAllTickets();
    }

    @PostMapping("/Add")
    public TicketModel createMovie(@RequestBody TicketModel Model) {
        return Service.saveTicket(Model);
    }

    @DeleteMapping("/Delete")
    public void deleteMovie(@RequestParam int id) {
        Service.deleteTicket(id);
    }

    @PutMapping("/Update")
    public TicketModel updateMovie(@RequestBody TicketModel Model){
        return Service.updateTicket(Model);
    }
}
