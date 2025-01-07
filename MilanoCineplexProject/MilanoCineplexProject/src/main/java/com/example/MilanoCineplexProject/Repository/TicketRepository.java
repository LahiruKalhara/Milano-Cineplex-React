package com.example.MilanoCineplexProject.Repository;

import com.example.MilanoCineplexProject.Model.TicketModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketRepository extends JpaRepository<TicketModel,Integer> {
}
