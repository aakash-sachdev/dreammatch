package com.dreammatch.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class ImageUploadController {

    private static final String UPLOAD_DIR =  System.getProperty("user.dir") + "/src/main/resources/static/uploads/";

    @PostMapping("/upload-image")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) {

        try {
            if (file.isEmpty()) {
                return ResponseEntity.badRequest().body("No file selected");
            }

            // Clean, get file name and protect file overriding because of same name
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            String fileExtension = fileName.substring(fileName.lastIndexOf("."));
            String uniqueFileName = UUID.randomUUID().toString() + fileExtension;

            // Make sure directory exists
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            //Save file to disk
            Path filepath = uploadPath.resolve(uniqueFileName);
            file.transferTo(filepath.toFile());


            // Return just the filename to use later
            return ResponseEntity.ok(fileName);

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Image upload failed");

        }
    }

}