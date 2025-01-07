package com.example.MilanoCineplexProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import javax.naming.Name;

@Entity
@Table(name ="Users")
public class UserModel {
    @Id
    @GeneratedValue
    private int UserID;
    private String UserName;
    private String UserTelephone;
    private String UserAddress;
    private String UserPassword;
    private String UserConfirmPassword;


    public UserModel() {
    }

    public UserModel(String userConfirmPassword, String userPassword, String userAddress, String userTelephone, String userName, int userID) {
        UserConfirmPassword = userConfirmPassword;
        UserPassword = userPassword;
        UserAddress = userAddress;
        UserTelephone = userTelephone;
        UserName = userName;
        UserID = userID;
    }

    public int getUserID() {
        return UserID;
    }

    public void setUserID(int userID) {
        UserID = userID;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getUserTelephone() {
        return UserTelephone;
    }

    public void setUserTelephone(String userTelephone) {
        UserTelephone = userTelephone;
    }

    public String getUserAddress() {
        return UserAddress;
    }

    public void setUserAddress(String userAddress) {
        UserAddress = userAddress;
    }

    public String getUserPassword() {
        return UserPassword;
    }

    public void setUserPassword(String userPassword) {
        UserPassword = userPassword;
    }

    public String getUserConfirmPassword() {
        return UserConfirmPassword;
    }

    public void setUserConfirmPassword(String userConfirmPassword) {
        UserConfirmPassword = userConfirmPassword;
    }
}