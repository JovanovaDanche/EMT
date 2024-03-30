package mk.ukim.finki.lab1.service;

import mk.ukim.finki.lab1.model.Accommodation;
import mk.ukim.finki.lab1.model.Category;
import mk.ukim.finki.lab1.model.dto.AccomodationDTO;

import java.util.List;
import java.util.Optional;

public interface AccommodationService {
    List<Accommodation> listAll();
    Optional<Accommodation> findById(Long id);
    Optional<Accommodation> create(String name, Category category, Long hostId, Integer numRooms);
    Optional<Accommodation> create(AccomodationDTO accomodationDTO);
    Optional<Accommodation> edit(Long id, String name, Category category, Long hostId, Integer numRooms);
    Optional<Accommodation> edit(Long id, AccomodationDTO accomodationDTO);
    void deleteById(Long id);
    void mark(Long id);
    List<Accommodation> findByCategory(Category category);
    void refreshMaterializedView();
}
