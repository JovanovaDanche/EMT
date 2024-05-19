package mk.ukim.finki.emt.reservations.domain.repository;

import mk.ukim.finki.emt.reservations.domain.models.ReserveDecorator;
import mk.ukim.finki.emt.reservations.domain.models.ReserveDecoratord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<ReserveDecorator, ReserveDecoratord> {
}
