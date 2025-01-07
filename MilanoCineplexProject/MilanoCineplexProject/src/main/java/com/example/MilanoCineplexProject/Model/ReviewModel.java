package com.example.MilanoCineplexProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import javax.naming.Name;

@Entity
@Table(name = "Reviews")
public class ReviewModel {
    @Id
    @GeneratedValue
    private int ReviewID;
    private String ReviewUsername;
    private String ReviewDescription;

    public ReviewModel() {
    }

    public ReviewModel(int reviewID, String reviewUsername, String reviewDescription) {
        ReviewID = reviewID;
        ReviewUsername = reviewUsername;
        ReviewUsername = reviewDescription;
    }

    public int getReviewID() {
        return ReviewID;
    }

    public void setReviewID(int reviewID) {
        ReviewID = reviewID;
    }

    public String getReviewUsername() {
        return ReviewUsername;
    }

    public void setReviewUsername(String reviewUsername) {
        ReviewUsername = reviewUsername;
    }

    public String getReviewDescription() {
        return ReviewDescription;
    }

    public void setReviewDescription(String reviewDescription) {
        ReviewDescription = reviewDescription;
    }
}
