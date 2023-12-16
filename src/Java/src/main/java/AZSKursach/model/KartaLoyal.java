package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: КартаЛояль
 */
@Entity(name = "IISAZSKursachКартаЛояль")
@Table(schema = "public", name = "КартаЛояль")
public class KartaLoyal {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Ном")
    private Integer ном;

    @Column(name = "ПроцСкид")
    private Float процскид;

    @Column(name = "СуммПокуп")
    private Float суммпокуп;


    public KartaLoyal() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНом() {
      return ном;
    }

    public void setНом(Integer ном) {
      this.ном = ном;
    }

    public Float getПроцСкид() {
      return процскид;
    }

    public void setПроцСкид(Float процскид) {
      this.процскид = процскид;
    }

    public Float getСуммПокуп() {
      return суммпокуп;
    }

    public void setСуммПокуп(Float суммпокуп) {
      this.суммпокуп = суммпокуп;
    }


}