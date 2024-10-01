package com.zanar.playera.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "bookings")
public class Booking {
    @Id
    private String id;
    private String userId;  // Reference to the User
    private String venueId; // Reference to the Venue
    private LocalDateTime bookingDate; // Date and time of the booking
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private double amountPaid;

    // Constructors, Getters, Setters

    public Booking() {}

    public Booking(String userId, String venueId, LocalDateTime startTime, LocalDateTime endTime, double amountPaid) {
        this.userId = userId;
        this.venueId = venueId;
        this.bookingDate = LocalDateTime.now();
        this.startTime = startTime;
        this.endTime = endTime;
        this.amountPaid = amountPaid;
    }

    // Getters and setters omitted for brevity.
}
