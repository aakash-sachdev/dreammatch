package com.dreammatch.backend.repository;

import com.dreammatch.backend.model.User;
import com.dreammatch.backend.model.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
    static Optional<UserProfile> findByUser(User user);
}
