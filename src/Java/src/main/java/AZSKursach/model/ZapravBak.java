package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ЗаправБак
 */
@Entity(name = "IISAZSKursachЗаправБак")
@Table(schema = "public", name = "ЗаправБак")
public class ZapravBak {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипТопл")
    private String типтопл;

    @Column(name = "Объем")
    private Integer объем;

    @Column(name = "Цена")
    private Float цена;

    @Column(name = "УровЗалив")
    private Integer уровзалив;

    @Column(name = "Техсост")
    private Boolean техсост;


    public ZapravBak() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипТопл() {
      return типтопл;
    }

    public void setТипТопл(String типтопл) {
      this.типтопл = типтопл;
    }

    public Integer getОбъем() {
      return объем;
    }

    public void setОбъем(Integer объем) {
      this.объем = объем;
    }

    public Float getЦена() {
      return цена;
    }

    public void setЦена(Float цена) {
      this.цена = цена;
    }

    public Integer getУровЗалив() {
      return уровзалив;
    }

    public void setУровЗалив(Integer уровзалив) {
      this.уровзалив = уровзалив;
    }

    public Boolean getТехсост() {
      return техсост;
    }

    public void setТехсост(Boolean техсост) {
      this.техсост = техсост;
    }


}