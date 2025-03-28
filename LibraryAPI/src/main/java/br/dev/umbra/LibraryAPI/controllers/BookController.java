/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.dev.umbra.LibraryAPI.controllers;

import br.dev.umbra.LibraryAPI.DTO.BookDTO;
import br.dev.umbra.LibraryAPI.entities.Book;
import br.dev.umbra.LibraryAPI.service.BookService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Sam_Umbra
 */
@RestController
public class BookController {
    
    @Autowired
    private BookService bookService;
    
    @GetMapping("/books")
    public ResponseEntity<List<BookDTO>> findAll() {
        List<BookDTO> result = bookService.findAll();
        
        if (result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result);
        }
    }
    
    @GetMapping("/books/{id}")
    public ResponseEntity<Book> findById(@PathVariable long id) {
        Optional<Book> resultOpt = bookService.findById(id);
        
        if(resultOpt.isPresent()) {
            Book book = resultOpt.get();
            return ResponseEntity.ok(book);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/name/{name}")
    public ResponseEntity<List<BookDTO>> findByNameIgnoreCaseContaining(@PathVariable String name) {
        List<BookDTO> result = bookService.findByName(name);
        
        if(result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result); 
        }
    }
    
    @GetMapping("/publisher/{publisher}")
    public ResponseEntity<List<BookDTO>> findByPublisherIgnoreCaseContaining(@PathVariable String publisher) {
        List<BookDTO> result = bookService.findByPublisher(publisher);
        
        if(result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result); 
        }
    }
    
    @GetMapping("/author/{author}")
    public ResponseEntity<List<BookDTO>> findByAuthorIgnoreCaseContaining(@PathVariable String author) {
        List<BookDTO> result = bookService.findByAuthor(author);
        
        if(result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result); 
        }
    }
    
    @GetMapping("/yearPublished/{year}")
    public ResponseEntity<List<BookDTO>> findByYearPublished(@PathVariable int year) {
        List<BookDTO> result = bookService.findByYearPublished(year);
        
        if(result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result); 
        }
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<List<BookDTO>> findByCategoryIgnoreCase(@PathVariable String category) {
        List<BookDTO> result = bookService.findByCategory(category);
        
        if(result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result); 
        }
    }
    
    @GetMapping("/evaluation/{evaluation}")
    public ResponseEntity<List<BookDTO>> findByEvaluation(@PathVariable int evaluation) {
        List<BookDTO> result = bookService.findByEvaluation(evaluation);
        
        if(result.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(result); 
        }
    }
    
}
