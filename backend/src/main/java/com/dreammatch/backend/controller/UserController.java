package com.dreammatch.backend.controller;

import com.dreammatch.backend.model.User;
import com.dreammatch.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Signup endpoint
    @PostMapping("/signup")
    public String signup(@RequestBody User user){
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if(existingUser.isPresent()){
            return "Email already exists";
        }
        userRepository.save(user);
        return "Signup successful";
    }

    // Login endpoint
    @PostMapping("/login")
    public String login(@RequestBody User user){
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isEmpty() ||
                !existingUser.get().getPassword().equals(user.getPassword())) {
            return "Invalid credentials";
        }

        return "Login successful";
    }
}
