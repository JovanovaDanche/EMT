package mk.finki.ukim.emt.decorators.domain.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import mk.finki.ukim.emt.decorators.valueobjects.AvailableDates;
import mk.finki.ukim.emt.decorators.valueobjects.Rating;
import mk.ukim.finki.emt.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.sharedkernel.domain.dates.ManageDates;
import mk.ukim.finki.emt.sharedkernel.domain.rating.Ratings;

@Entity
@Table(name = "decorators")
public class Decorators extends AbstractEntity<DecoratorId>{
    private String name;
    private String surname;
    private String contact;
    private String city;
    private ManageDates availableDates;
    private Ratings rating;

}
