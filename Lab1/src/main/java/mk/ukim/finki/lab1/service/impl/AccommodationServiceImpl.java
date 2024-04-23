package mk.ukim.finki.lab1.service.impl;

import jakarta.transaction.Transactional;
import mk.ukim.finki.lab1.model.Accommodation;
import mk.ukim.finki.lab1.model.Category;
import mk.ukim.finki.lab1.model.Host;
import mk.ukim.finki.lab1.model.dto.AccomodationDTO;
import mk.ukim.finki.lab1.model.events.AccomodationCreatedEvent;
import mk.ukim.finki.lab1.model.exceptions.AccomodationNotFoundException;
import mk.ukim.finki.lab1.model.exceptions.HostNotFoundException;
import mk.ukim.finki.lab1.repository.AccomodationRepository;
import mk.ukim.finki.lab1.repository.HostRepository;
import mk.ukim.finki.lab1.service.AccommodationService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccommodationServiceImpl implements AccommodationService {
    private final AccomodationRepository accommodationRepository;
    private final HostRepository hostRepository;
    private final ApplicationEventPublisher applicationEventPublisher;

    public AccommodationServiceImpl(AccomodationRepository accommodationRepository, HostRepository hostRepository, ApplicationEventPublisher applicationEventPublisher) {
        this.accommodationRepository = accommodationRepository;
        this.hostRepository = hostRepository;
        this.applicationEventPublisher = applicationEventPublisher;
    }

    @Override
    public List<Accommodation> listAll() {
        return this.accommodationRepository.findAll();
    }

    @Override
    public Optional<Accommodation> findById(Long id) {
        return this.accommodationRepository.findById(id);
    }

    @Override
    @Transactional
    public Optional<Accommodation> create(String name, Category category, Long hostId, Integer numRooms) {
        Host host = this.hostRepository.findById(hostId).get();
        Accommodation accommodation=new Accommodation(name,category,host,numRooms);
        this.accommodationRepository.save(accommodation);
        //this.refreshMaterializedView();
        this.applicationEventPublisher.publishEvent(new AccomodationCreatedEvent(accommodation));
        return Optional.of(accommodation);
    }

    @Override
    public Optional<Accommodation> create(AccomodationDTO accomodationDTO) {
        Host host = this.hostRepository.findById(accomodationDTO.getHostId()).orElseThrow(HostNotFoundException::new);
        Category category=Category.valueOf(accomodationDTO.getCategory().toUpperCase());
        Accommodation accommodation = new Accommodation(accomodationDTO.getName(), category,host,accomodationDTO.getNumRooms());
        this.accommodationRepository.save(accommodation);
        //this.refreshMaterializedView();

        this.applicationEventPublisher.publishEvent(new AccomodationCreatedEvent(accommodation));
        return Optional.of(accommodation);
    }

    @Override
    @Transactional
    public Optional<Accommodation> edit(Long id, String name, Category category, Long hostId, Integer numRooms) {
        Accommodation accommodation = this.accommodationRepository.findById(id).orElseThrow(AccomodationNotFoundException::new);
        Host host = this.hostRepository.findById(hostId).get();
        accommodation.setName(name);
        accommodation.setCategory(category);
        accommodation.setNumRooms(numRooms);
        accommodation.setHost(host);

        this.accommodationRepository.save(accommodation);
        return Optional.of(accommodation);
    }

    @Override
    public Optional<Accommodation> edit(Long id, AccomodationDTO accomodationDTO) {
        Accommodation accommodation = this.accommodationRepository.findById(id).orElseThrow(AccomodationNotFoundException::new);
        Host host = this.hostRepository.findById(accomodationDTO.getHostId()).orElseThrow(HostNotFoundException::new);
        Category category=Category.valueOf(accomodationDTO.getCategory().toUpperCase());
        accommodation.setName(accomodationDTO.getName());
        accommodation.setCategory(category);
        accommodation.setHost(host);
        accommodation.setNumRooms(accomodationDTO.getNumRooms());

        this.accommodationRepository.save(accommodation);
        return Optional.of(accommodation);

    }

    @Override
    public void deleteById(Long id) {
        this.accommodationRepository.deleteById(id);
    }

    @Override
    public void mark(Long id) {
        Accommodation accommodation=this.findById(id).orElseThrow(AccomodationNotFoundException::new);
        accommodation.setNumRooms(accommodation.getNumRooms()- 1);
        accommodationRepository.save(accommodation);
    }

    @Override
    public List<Accommodation> findByCategory(Category category) {
        return accommodationRepository.findByCategory(category);
    }

    @Override
    public void refreshMaterializedView() {

    }
}
