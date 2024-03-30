package mk.ukim.finki.lab1.model.dto;

import lombok.Data;

@Data
public class AccomodationDTO {
    String name;
    String category;
    Integer numRooms;
    Long hostId;

    public AccomodationDTO() {
    }

    public AccomodationDTO(String name, String category, Integer numRooms, Long hostId) {
        this.name = name;
        this.category = category;
        this.numRooms = numRooms;
        this.hostId = hostId;
    }
}
