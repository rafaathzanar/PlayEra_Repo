package com.zanar.playera.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "venues")
public class Venue {
    @Id
    private String id;
    private String name;
    private String location;
    private String ownerId; // Reference to the owner (User)
    private List <TimeSlot> timeSlots; // List of available time slots for booking
    private double pricePerHour;
    private List<String> facilities; // e.g., ["Locker", "Shower", "Parking"]

    // Constructors, Getters, Setters

    public Venue() {}

    public Venue(String name, String location, String ownerId, double pricePerHour, List<String> facilities) {
        this.name = name;
        this.location = location;
        this.ownerId = ownerId;
        this.pricePerHour = pricePerHour;
        this.facilities = facilities;
    }

    // Getters and setters omitted for brevity.
}

