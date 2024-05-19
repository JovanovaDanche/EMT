package mk.ukim.finki.emt.sharedkernel.domain.rating;

import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.NonNull;
import mk.ukim.finki.emt.sharedkernel.domain.base.ValueObject;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

@Embeddable
@Getter
public class Ratings implements ValueObject {
    private double sum;
    private final List<Double> ratings;

    protected Ratings() {
        this.sum = 0.0;
        this.ratings = new ArrayList<>();
    }

    public Ratings(@NonNull List<Double> ratings,@NonNull double sum) {
        this.ratings = new ArrayList<>(ratings);
        this.sum = sum;
    }

    public void addRating(double rating) {
        if (rating < 0 || rating > 5) {
            throw new IllegalArgumentException("Rating must be between 0 and 5");
        }
        this.ratings.add(rating);
        this.sum += rating;
    }

    public double averageRating() {
        if (ratings.isEmpty()) {
            return 0.0;
        }
        return sum / ratings.size();
    }

//    public List<Double> getRatings() {
//        return Collections.unmodifiableList(ratings);
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Ratings ratings1 = (Ratings) o;
        return Double.compare(ratings1.sum, sum) == 0 && ratings.equals(ratings1.ratings);
    }

    @Override
    public int hashCode() {
        return Objects.hash(sum, ratings);
    }
}