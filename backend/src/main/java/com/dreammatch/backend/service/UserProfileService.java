package com.dreammatch.backend.service;

import com.dreammatch.backend.model.User;
import com.dreammatch.backend.model.UserProfile;
import com.dreammatch.backend.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;

    public UserProfile saveProfile(UserProfile profile) {
        return userProfileRepository.save(profile);
    }

    public Optional<UserProfile> getProfileByUser(User user) {
        return userProfileRepository.findByUser(user);
    }
}
