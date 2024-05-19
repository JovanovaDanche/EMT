package mk.ukim.finki.emt.reservations.domain.models;

import jakarta.persistence.*;
import mk.ukim.finki.emt.sharedkernel.domain.base.AbstractEntity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "allReservations")
public class Reservations extends AbstractEntity<ReservationId> {
    private Date reservationDate;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<ReserveDecorator> orderItems=new ArrayList<>();

}
