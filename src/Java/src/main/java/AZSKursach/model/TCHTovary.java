package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧТовары
 */
@Entity(name = "IISAZSKursachТЧТовары")
@Table(schema = "public", name = "ТЧТовары")
public class TCHTovary {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TovarySpr")
    @Convert("TovarySpr")
    @Column(name = "ТоварыСпр", length = 16, unique = true, nullable = false)
    private UUID _tovarysprid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TovarySpr", insertable = false, updatable = false)
    private TovarySpr tovaryspr;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "CHek")
    @Convert("CHek")
    @Column(name = "Чек", length = 16, unique = true, nullable = false)
    private UUID _chekid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "CHek", insertable = false, updatable = false)
    private CHek chek;


    public TCHTovary() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}