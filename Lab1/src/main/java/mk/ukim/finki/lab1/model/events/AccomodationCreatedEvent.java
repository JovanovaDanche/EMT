package mk.ukim.finki.lab1.model.events;

import mk.ukim.finki.lab1.model.Accommodation;
import org.springframework.context.ApplicationEvent;

public class AccomodationCreatedEvent extends ApplicationEvent {
    public AccomodationCreatedEvent(Accommodation source){
        super(source);
    }
}
