package com.zanar.playera.repo;

import com.zanar.playera.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

//@Repository
public interface UserRepository extends MongoRepository<User, String> {

    // You can define custom queries here if needed, for example:

    // Find a user by email
//    Optional<User> findByEmail(String email);

    // Find users by role (e.g., customer, owner)
//    List<User> findByRole(String role);
}
