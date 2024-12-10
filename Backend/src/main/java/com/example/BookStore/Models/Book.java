package com.example.BookStore.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String author;
    private String price;

    public Book() {

    }

    public Book(String name, String author) {
        this.name = name;
        this.author = author;
    }

    public long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getAuthor() {
        return this.author;
    }

    public String getPrice() {
        return this.price;
    }

}
