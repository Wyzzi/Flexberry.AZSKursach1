package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Чек
 */
@Entity(name = "IISAZSKursachЧек")
@Table(schema = "public", name = "Чек")
public class CHek {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Сумма")
    private Float сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZapravkaAvto")
    @Convert("ZapravkaAvto")
    @Column(name = "ЗаправкаАвто", length = 16, unique = true, nullable = false)
    private UUID _zapravkaavtoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZapravkaAvto", insertable = false, updatable = false)
    private ZapravkaAvto zapravkaavto;

    @OneToMany(mappedBy = "chek", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHTovary> tchtovarys;


    public CHek() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Float getСумма() {
      return сумма;
    }

    public void setСумма(Float сумма) {
      this.сумма = сумма;
    }


}