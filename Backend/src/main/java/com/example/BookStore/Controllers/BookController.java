package com.example.BookStore.Controllers;

import com.example.BookStore.Models.Book;
import com.example.BookStore.Repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @GetMapping("/api/books")
    @CrossOrigin(origins = "http://localhost:5173/")
    public List<Book> books() {
        return bookRepository.findAll();
    }

}
