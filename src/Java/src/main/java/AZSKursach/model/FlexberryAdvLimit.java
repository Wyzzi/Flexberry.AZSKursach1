package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: FlexberryAdvLimit
 */
@Entity(name = "FlexberryAdvLimit")
@Table(schema = "public", name = "STORMAdvLimit")
public class FlexberryAdvLimit {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;
	
	@Column(name = "User", nullable = true)
    private String User;

    @Column(name = "Module", nullable = true)
    private String Module;

    @Column(name = "Name", nullable = true)
    private String Name;

    @Column(name = "Value", nullable = true)
    private String Value;
	
	@Column(name = "HotKeyData", nullable = true)
    private Integer HotKeyData;

    public FlexberryAdvLimit() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }
	
	public String getUser() {
        return User;
    }

    public void setUser(String user) {
        this.User = user;
    }

    public String getModule() {
        return Module;
    }

    public void setModule(String module) {
        this.Module = module;
    }

	public String getName() {
        return Name;
    }

    public void setName(String name) {
        this.Name = name;
    }
	
	public String getValue() {
        return Value;
    }

    public void setValue(String value) {
        this.Value = value;
    }
	
	public Integer getHotKeyData() {
        return HotKeyData;
    }

    public void setHotKeyData(Integer hotKeyData) {
        this.HotKeyData = hotKeyData;
    }
}
