package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: БанкДан
 */
@Entity(name = "IISAZSKursachБанкДан")
@Table(schema = "public", name = "БанкДан")
public class BankDan {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомКарт")
    private String номкарт;

    @Column(name = "CVV")
    private Integer cvv;

    @Column(name = "Дата")
    private String дата;


    public BankDan() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНомКарт() {
      return номкарт;
    }

    public void setНомКарт(String номкарт) {
      this.номкарт = номкарт;
    }

    public Integer getCVV() {
      return cvv;
    }

    public void setCVV(Integer cvv) {
      this.cvv = cvv;
    }

    public String getДата() {
      return дата;
    }

    public void setДата(String дата) {
      this.дата = дата;
    }


}