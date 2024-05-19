package mk.ukim.finki.emt.reservations.domain.models;

import jakarta.persistence.*;
import mk.ukim.finki.emt.reservations.valueobjects.DecoratorId;
import mk.ukim.finki.emt.sharedkernel.domain.base.AbstractEntity;
import mk.ukim.finki.emt.sharedkernel.domain.dates.ManageDates;

@Entity
@Table(name = "reserveDecorator")
public class ReserveDecorator extends AbstractEntity<ReserveDecoratord> {
    private String description;
    private String address;
    @Enumerated(value = EnumType.STRING)
    private EventType eventType;
    private ManageDates availableDates;
    @AttributeOverride(name = "id", column = @Column(name = "decoratorId", nullable = false))
    private DecoratorId decoratorId;

}
