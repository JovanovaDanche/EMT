package mk.ukim.finki.lab1.model.events;

import lombok.Getter;
import org.springframework.context.ApplicationEvent;

@Getter
public class NoAccommodationFoundEvent extends ApplicationEvent {
    private final String category;

    public NoAccommodationFoundEvent(Object source, String category) {
        super(source);
        this.category = category;
    }
}
