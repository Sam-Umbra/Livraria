/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.dev.umbra.LibraryAPI.DTO;

import br.dev.umbra.LibraryAPI.entities.Book;

/**
 *
 * @author Sam_Umbra
 */
public class BookDTO {
    
    private long id;
    private String name;
    private String author;
    private String publisher;
    private String image;
    private int yearPublished;
    private double price;

    public BookDTO() {
    }

    public BookDTO(Book book) {
        this.id = book.getId();
        this.name = book.getName();
        this.author = book.getAuthor();
        this.publisher = book.getPublisher();
        this.image = book.getImage();
        this.yearPublished = book.getYearPublished();
        this.price = book.getPrice();
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }

    public String getPublisher() {
        return publisher;
    }

    public String getImage() {
        return image;
    }

    public int getYearPublished() {
        return yearPublished;
    }

    public double getPrice() {
        return price;
    }
    
}
