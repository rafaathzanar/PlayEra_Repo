package com.zanar.playera.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;


    private String email;
    private String role;
    private String password; // Password should be securely hashed in a real system.
    private int bookingsCount;
    private String level;

}

