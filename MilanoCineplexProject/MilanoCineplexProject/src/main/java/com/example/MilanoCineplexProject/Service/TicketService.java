package com.example.MilanoCineplexProject.Service;

import com.example.MilanoCineplexProject.Model.MovieModel;
import com.example.MilanoCineplexProject.Model.TicketModel;
import com.example.MilanoCineplexProject.Repository.MovieRepository;
import com.example.MilanoCineplexProject.Repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {
    @Autowired
    private TicketRepository Repository;

    public List<TicketModel> getAllTickets() {
        return Repository.findAll();
    }

    public TicketModel saveTicket(TicketModel Model) {
        return Repository.save(Model);
    }

    public void deleteTicket(int id) {
        Repository.deleteById(id);
    }

    public TicketModel updateTicket(TicketModel Model){
        return Repository.save(Model);
    }

}
