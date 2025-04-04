/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package br.dev.umbra.LibraryAPI.repositories;

import br.dev.umbra.LibraryAPI.entities.Book;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Sam_Umbra
 */
public interface BookRepository extends JpaRepository<Book, Long>{
    List<Book> findByNameIgnoreCaseContaining(String name);
    List<Book> findByPublisherIgnoreCaseContaining(String publisher);
    List<Book> findByAuthorIgnoreCaseContaining(String author);
    List<Book> findByYearPublished(int year);
    List<Book> findByCategoryIgnoreCase(String category);
    List<Book> findByEvaluation(int evaluation);
    List<Book> findByPriceBetween(double firstPrice, double secondPrice);
}
