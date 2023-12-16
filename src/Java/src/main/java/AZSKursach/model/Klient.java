package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISAZSKursachКлиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаРожд")
    private Date датарожд;

    @Column(name = "Наимен")
    private String наимен;

    @Column(name = "EMail")
    private String email;

    @Column(name = "НомТел")
    private String номтел;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KartaLoyal")
    @Convert("KartaLoyal")
    @Column(name = "КартаЛояль", length = 16, unique = true, nullable = false)
    private UUID _kartaloyalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KartaLoyal", insertable = false, updatable = false)
    private KartaLoyal kartaloyal;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BankDan")
    @Convert("BankDan")
    @Column(name = "БанкДан", length = 16, unique = true, nullable = false)
    private UUID _bankdanid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BankDan", insertable = false, updatable = false)
    private BankDan bankdan;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаРожд() {
      return датарожд;
    }

    public void setДатаРожд(Date датарожд) {
      this.датарожд = датарожд;
    }

    public String getНаимен() {
      return наимен;
    }

    public void setНаимен(String наимен) {
      this.наимен = наимен;
    }

    public String getEMail() {
      return email;
    }

    public void setEMail(String email) {
      this.email = email;
    }

    public String getНомТел() {
      return номтел;
    }

    public void setНомТел(String номтел) {
      this.номтел = номтел;
    }


}