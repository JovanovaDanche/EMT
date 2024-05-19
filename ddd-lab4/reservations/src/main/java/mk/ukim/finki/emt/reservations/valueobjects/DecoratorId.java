package mk.ukim.finki.emt.reservations.valueobjects;

import jakarta.persistence.Embeddable;
import mk.ukim.finki.emt.sharedkernel.domain.base.DomainObjectId;

@Embeddable
public class DecoratorId extends DomainObjectId {

    protected DecoratorId() {
        super(DecoratorId.randomId(DecoratorId.class).getId());
    }
    public DecoratorId(String uuid) {
        super(uuid);
    }

}
