package mk.ukim.finki.lab1.service.impl;

import mk.ukim.finki.lab1.model.Country;
import mk.ukim.finki.lab1.model.exceptions.CountryNotFoundException;
import mk.ukim.finki.lab1.repository.CountryRepository;
import mk.ukim.finki.lab1.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements CountryService {
    private final CountryRepository countryRepository;

    public CountryServiceImpl(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    @Override
    public List<Country> listAll() {
        return this.countryRepository.findAll();
    }

    @Override
    public Country findById(Long id) {
        return this.countryRepository.findById(id).orElseThrow(CountryNotFoundException::new);
    }

    @Override
    public void deleteById(Long id) {
        Country country=findById(id);
        countryRepository.delete(country);
    }

    @Override
    public Country create(String name, String continent) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException();
        }
        Country c = new Country(name, continent);
        countryRepository.save(c);
        return c;
    }

    @Override
    public Country update(Long id, String name, String continent) {
        Country country = this.findById(id);
        country.setName(name);
        country.setContinent(continent);
        return this.countryRepository.save(country);
    }
}
