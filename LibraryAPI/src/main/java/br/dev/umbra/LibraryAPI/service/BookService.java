/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package br.dev.umbra.LibraryAPI.service;

import br.dev.umbra.LibraryAPI.DTO.BookDTO;
import br.dev.umbra.LibraryAPI.entities.Book;
import br.dev.umbra.LibraryAPI.repositories.BookRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Sam_Umbra
 */
@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;
    
    public List<BookDTO> findAll() {
        List<Book> resultBook = bookRepository.findAll();
        
        List<BookDTO> resultDTO = resultBook.stream()
                .map(x -> new BookDTO(x)).toList();
        
        return resultDTO;
    }
    
    public Optional<Book> findById(long id) {
        return bookRepository.findById(id);
    }
    
    public List<BookDTO> findByName(String name) {
        List<Book> resultBook = bookRepository.findByNameIgnoreCaseContaining(name);
        
        List<BookDTO> resultDTO = resultBook.stream()
                .map(x -> new BookDTO(x)).toList();
        
        return resultDTO;
    }
    
    public List<BookDTO> findByPublisher(String publisher) {
        List<Book> resultBook = bookRepository.findByPublisherIgnoreCaseContaining(publisher);
        
        List<BookDTO> resultDTO = resultBook.stream()
                .map(x -> new BookDTO(x)).toList();
        
        return resultDTO;
    }
    
    public List<BookDTO> findByAuthor(String author) {
        List<Book> resultBook = bookRepository.findByAuthorIgnoreCaseContaining(author);
        
        List<BookDTO> resultDTO = resultBook.stream()
                .map(x -> new BookDTO(x)).toList();
        
        return resultDTO;
    }
    
    public List<BookDTO> findByYearPublished(int year) {
        List<Book> resultBook = bookRepository.findByYearPublished(year);
        
        List<BookDTO> resultDTO = resultBook.stream()
                .map(x -> new BookDTO(x)).toList();
        
        return resultDTO;
    }
    
    public List<BookDTO> findByCategory(String category) {
        List<Book> resultBook = bookRepository.findByCategoryIgnoreCase(category);
        
        List<BookDTO> resultDTO = resultBook.stream()
                .map(x -> new BookDTO(x)).toList();
        
        return resultDTO;
    }
    
    public List<BookDTO> findByEvaluation(int evaluation) {
        List<Book> resultBook = bookRepository.findByEvaluation(evaluation);
        
        List<BookDTO> resultDTO = resultBook.stream()
                .map(x -> new BookDTO(x)).toList();
        
        return resultDTO;
    }
    
}
