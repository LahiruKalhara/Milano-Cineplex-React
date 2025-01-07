package com.example.MilanoCineplexProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="Tickets")
public class TicketModel {
    @Id
    @GeneratedValue
    private int TicketID;
    private String TicketMovie;
    private String TicketType;
    private double TicketPrice;
    private String TicketTime;
    private String TicketName;
    private String TicketEmail;
    private int TicketCount;


    public TicketModel() {
    }

    public TicketModel(int ticketID, String ticketMovie, String ticketType, double ticketPrice, String ticketTime, String ticketName, String ticketEmail, int ticketCount) {
        TicketID = ticketID;
        TicketMovie = ticketMovie;
        TicketType = ticketType;
        TicketPrice = ticketPrice;
        TicketTime = ticketTime;
        TicketName = ticketName;
        TicketEmail = ticketEmail;
        TicketCount = ticketCount;
    }

    public int getTicketID() {
        return TicketID;
    }

    public void setTicketID(int ticketID) {
        TicketID = ticketID;
    }

    public String getTicketMovie() {
        return TicketMovie;
    }

    public void setTicketMovie(String ticketMovie) {
        TicketMovie = ticketMovie;
    }

    public String getTicketType() {
        return TicketType;
    }

    public void setTicketType(String ticketType) {
        TicketType = ticketType;
    }

    public double getTicketPrice() {
        return TicketPrice;
    }

    public void setTicketPrice(double ticketPrice) {
        TicketPrice = ticketPrice;
    }

    public String getTicketTime() {
        return TicketTime;
    }

    public void setTicketTime(String ticketTime) {
        TicketTime = ticketTime;
    }

    public String getTicketName() {
        return TicketName;
    }

    public void setTicketName(String ticketName) {
        TicketName = ticketName;
    }

    public String getTicketEmail() {
        return TicketEmail;
    }

    public void setTicketEmail(String ticketEmail) {
        TicketEmail = ticketEmail;
    }

    public int getTicketCount() {
        return TicketCount;
    }

    public void setTicketCount(int ticketCount) {
        TicketCount = ticketCount;
    }
}
