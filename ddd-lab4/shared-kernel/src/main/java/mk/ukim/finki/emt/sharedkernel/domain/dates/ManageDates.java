package mk.ukim.finki.emt.sharedkernel.domain.dates;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import mk.ukim.finki.emt.sharedkernel.domain.base.ValueObject;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
@Embeddable
@Getter
public class ManageDates implements ValueObject {
    @ElementCollection
    private final List<LocalDate> availableDates;

    protected ManageDates() {
        this.availableDates = new ArrayList<>();
    }

    public ManageDates(List<LocalDate> availableDates) {
        this.availableDates = new ArrayList<>(availableDates);
    }

    public void addDate(LocalDate date) {
        if (!availableDates.contains(date)) {
            availableDates.add(date);
        }
    }

    public void removeDate(LocalDate date) {
        availableDates.remove(date);
    }

    public boolean isDateAvailable(LocalDate date) {
        return availableDates.contains(date);
    }

    public List<LocalDate> getAvailableDates() {
        return Collections.unmodifiableList(availableDates);
    }
}
