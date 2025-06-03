package com.dreammatch.backend.controller;

import com.dreammatch.backend.model.User;
import com.dreammatch.backend.model.UserProfile;
import com.dreammatch.backend.repository.UserRepository;
import com.dreammatch.backend.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserProfileController {

    @Autowired
    private UserProfileService userProfileService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/onboarding")
    public ResponseEntity<String> createOrUpdateProfile(@RequestParam String email,
                                                @RequestBody UserProfile profileData) {
        Optional<User> userOpt = userRepository.findByEmail(email);

        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        User user = userOpt.get();

        Optional<UserProfile> existingProfile = userProfileService.getProfileByUser(user);

        UserProfile profile = existingProfile.orElse(new UserProfile());

        profile.setName(profileData.getName());
        profile.setGender(profileData.getGender());
        profile.setBio(profileData.getBio());
        profile.setPreferences(profileData.getPreferences());
        profile.setProfileImageUrl(profileData.getProfileImageUrl());
        profile.setUser(user);

        userProfileService.saveProfile(profile);

        return ResponseEntity.ok("Profile Saved successfully");

    }
}
