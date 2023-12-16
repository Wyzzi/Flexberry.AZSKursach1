package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: NewPlatformFlexberryServicesLock
 */
@Entity(name = "NewPlatformFlexberryServicesLock")
@Table(schema = "public", name = "stormnetlockdata")
public class NewPlatformFlexberryServicesLock {

    @Id
    @Column(name = "LockKey", unique = true, nullable = false)
    private String LockKey;

    @Column(name = "UserName", nullable = false)
    private String UserName;
	
	@Column(name = "LockDate", nullable = true)
    private Date LockDate;

    public NewPlatformFlexberryServicesLock() {
        super();
    }

	public String getLockKey() {
        return LockKey;
    }

    public void setLockKey(String lockKey) {
        this.LockKey = lockKey;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        this.UserName = userName;
    }
	
	public Date getLockDate() {
        return LockDate;
    }

    public void setLockDate(Date lockDate) {
        this.LockDate = lockDate;
    }
}