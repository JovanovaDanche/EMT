package mk.finki.ukim.emt.decorators.valueobjects;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import mk.ukim.finki.emt.sharedkernel.domain.base.ValueObject;

import java.time.LocalDate;
import java.util.List;

@Embeddable
@Getter
public class AvailableDates implements ValueObject {
    private final List<LocalDate> availableDates;
    protected AvailableDates(){
        this.availableDates=null;
    }

}
