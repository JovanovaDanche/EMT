package mk.ukim.finki.lab1.web;

import mk.ukim.finki.lab1.model.Country;
import mk.ukim.finki.lab1.model.dto.CountryDTO;
import mk.ukim.finki.lab1.service.CountryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CountryController {
    private final CountryService countryService;

    public CountryController(CountryService countryService) {
        this.countryService = countryService;
    }
    @PostMapping("/add-country")
    public ResponseEntity<Void> addCountry(@RequestBody CountryDTO countryDTO) {
        if(countryDTO == null) {
            return ResponseEntity.notFound().build();
        }

        this.countryService.create(countryDTO.getName(), countryDTO.getContinent());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/countries")
    public List<Country> getCountries() {
        return this.countryService.listAll();
    }
}
