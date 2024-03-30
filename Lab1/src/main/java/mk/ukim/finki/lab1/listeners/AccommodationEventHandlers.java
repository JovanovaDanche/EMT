package mk.ukim.finki.lab1.listeners;

import mk.ukim.finki.lab1.model.events.NoAccommodationFoundEvent;
import mk.ukim.finki.lab1.service.AccommodationService;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class AccommodationEventHandlers {
    private final AccommodationService accomodationService;

    public AccommodationEventHandlers(AccommodationService accomodationService) {
        this.accomodationService = accomodationService;
    }
    @EventListener
    public void onNoAccommodationFound(NoAccommodationFoundEvent event) {
        System.out.println("No accommodations found for category: " + event.getCategory());
    }

}
