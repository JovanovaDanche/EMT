package mk.ukim.finki.lab1.web;

import mk.ukim.finki.lab1.model.Accommodation;
import mk.ukim.finki.lab1.model.Category;
import mk.ukim.finki.lab1.model.dto.AccomodationDTO;
import mk.ukim.finki.lab1.model.events.NoAccommodationFoundEvent;
import mk.ukim.finki.lab1.service.AccommodationService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RequestMapping("/api/accommodations")
public class AccommodationController {
    private final AccommodationService accommodationService;
    private final ApplicationEventPublisher applicationEventPublisher;

    public AccommodationController(AccommodationService accommodationService, ApplicationEventPublisher applicationEventPublisher) {
        this.accommodationService = accommodationService;
        this.applicationEventPublisher = applicationEventPublisher;
    }

    @GetMapping
    private List<Accommodation> findAll() {
        return this.accommodationService.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Accommodation> findById(@PathVariable Long id) {
        return this.accommodationService.findById(id)
                .map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Accommodation> create(@RequestBody AccomodationDTO accomodationDTO) {
        return this.accommodationService.create(accomodationDTO)
                .map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Accommodation> create(@PathVariable Long id, @RequestBody AccomodationDTO accomodationDTO) {
        return this.accommodationService.edit(id, accomodationDTO)
                .map(accommodation -> ResponseEntity.ok().body(accommodation))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id) {
        this.accommodationService.deleteById(id);
        if (this.accommodationService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }

    @PostMapping("/mark-accommodation/{id}")
    public ResponseEntity<Void> markAccommodation(@PathVariable Long id) {
        if (id == null) {
            return ResponseEntity.notFound().build();
        }

        if (accommodationService.findById(id) == null) {
            return ResponseEntity.notFound().build();
        }

        this.accommodationService.mark(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/filter")
    public ResponseEntity<?> getAccommodationsByCategory(@RequestParam("category") Category category) {
        List<Accommodation> accommodations = accommodationService.findByCategory(category);
        if (accommodations.isEmpty()) {
            applicationEventPublisher.publishEvent(new NoAccommodationFoundEvent(this, category.toString()));
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(accommodations);
        }

    }

}