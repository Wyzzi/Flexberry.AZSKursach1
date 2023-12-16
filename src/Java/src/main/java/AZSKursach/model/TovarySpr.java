package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ТоварыСпр
 */
@Entity(name = "IISAZSKursachТоварыСпр")
@Table(schema = "public", name = "ТоварыСпр")
public class TovarySpr {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Цена")
    private Float цена;

    @Column(name = "Наим")
    private String наим;


    public TovarySpr() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Float getЦена() {
      return цена;
    }

    public void setЦена(Float цена) {
      this.цена = цена;
    }

    public String getНаим() {
      return наим;
    }

    public void setНаим(String наим) {
      this.наим = наим;
    }


}