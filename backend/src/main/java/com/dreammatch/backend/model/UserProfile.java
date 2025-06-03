package com.dreammatch.backend.model;

import jakarta.persistence.*;

@Entity
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String gender;
    private String bio;
    private String preferences;
    private String profileImageUrl;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public UserProfile() {
    }

    public UserProfile(Long id, String name, String gender, String bio, String preferences, String profileImageUrl, User user) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.bio = bio;
        this.preferences = preferences;
        this.profileImageUrl = profileImageUrl;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public String getPreferences() {
        return preferences;
    }

    public void setPreferences(String preferences) {
        this.preferences = preferences;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfileImageUrl() {
        return profileImageUrl;
    }

    public void setProfileImageUrl(String profileImageUrl) {
        this.profileImageUrl = profileImageUrl;
    }
}
