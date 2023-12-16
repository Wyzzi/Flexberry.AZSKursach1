package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаправкаАвто
 */
@Entity(name = "IISAZSKursachЗаправкаАвто")
@Table(schema = "public", name = "ЗаправкаАвто")
public class ZapravkaAvto {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомКол")
    private Integer номкол;

    @Column(name = "КолТоп")
    private Integer колтоп;

    @Column(name = "НомШл")
    private Integer номшл;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZapravBak")
    @Convert("ZapravBak")
    @Column(name = "ЗаправБак", length = 16, unique = true, nullable = false)
    private UUID _zapravbakid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZapravBak", insertable = false, updatable = false)
    private ZapravBak zapravbak;


    public ZapravkaAvto() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомКол() {
      return номкол;
    }

    public void setНомКол(Integer номкол) {
      this.номкол = номкол;
    }

    public Integer getКолТоп() {
      return колтоп;
    }

    public void setКолТоп(Integer колтоп) {
      this.колтоп = колтоп;
    }

    public Integer getНомШл() {
      return номшл;
    }

    public void setНомШл(Integer номшл) {
      this.номшл = номшл;
    }


}