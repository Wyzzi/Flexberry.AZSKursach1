package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: NewPlatformFlexberryFlexberryUserSetting
 */
@Entity(name = "NewPlatformFlexberryFlexberryUserSetting")
@Table(schema = "public", name = "usersetting")
public class NewPlatformFlexberryFlexberryUserSetting {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "AppName", nullable = true)
    private String AppName;
	
	@Column(name = "UserName", nullable = true)
    private String UserName;
	
	@Converter(converterClass = UUIDConverter.class, name = "UserGuid")
    @Convert("UserGuid")
	@Column(name = "UserGuid", length = 16, unique = true, nullable = true)
    private UUID UserGuid;
	
	@Column(name = "ModuleName", nullable = true)
    private String ModuleName;
	
	@Converter(converterClass = UUIDConverter.class, name = "ModuleGuid")
    @Convert("ModuleGuid")
	@Column(name = "ModuleGuid", length = 16, unique = true, nullable = true)
    private UUID ModuleGuid;
	
	@Column(name = "SettName", nullable = true)
    private String SettName;
	
	@Converter(converterClass = UUIDConverter.class, name = "SettGuid")
    @Convert("SettGuid")
	@Column(name = "SettGuid", length = 16, unique = true, nullable = true)
    private UUID SettGuid;
	
	@Column(name = "SettLastAccessTime", nullable = true)
    private Date SettLastAccessTime;
	
	@Column(name = "StrVal", nullable = true)
    private String StrVal;
	
	@Column(name = "TxtVal", nullable = true)
    private String TxtVal;
	
	@Column(name = "IntVal", nullable = true)
    private Integer IntVal;
	
	@Column(name = "BoolVal", nullable = true)
    private Boolean BoolVal;
	
	@Converter(converterClass = UUIDConverter.class, name = "GuidVal")
    @Convert("GuidVal")
	@Column(name = "GuidVal", length = 16, unique = true, nullable = true)
    private UUID GuidVal;
	
	@Column(name = "DecimalVal", nullable = true)
    private Double DecimalVal;
	
	@Column(name = "DateTimeVal", nullable = true)
    private Date DateTimeVal;

    public NewPlatformFlexberryFlexberryUserSetting() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getAppName() {
        return AppName;
    }

    public void setAppName(String appName) {
        this.AppName = appName;
    }
	
	public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        this.UserName = userName;
    }
	
	public UUID getUserGuid() {
        return UserGuid;
    }

    public void setUserGuid(UUID userGuid) {
        this.UserGuid = userGuid;
    }
	
	public String getModuleName() {
        return UserName;
    }

    public void setModuleName(String moduleName) {
        this.ModuleName = moduleName;
    }
	
	public UUID getModuleGuid() {
        return ModuleGuid;
    }

    public void setModuleGuid(UUID moduleGuid) {
        this.ModuleGuid = moduleGuid;
    }
	
	public String getSettName() {
        return SettName;
    }

    public void setSettName(String settName) {
        this.SettName = settName;
    }
	
	public UUID getSettGuid() {
        return SettGuid;
    }

    public void setSettGuid(UUID settGuid) {
        this.SettGuid = settGuid;
    }
	
	public Date getSettLastAccessTime() {
        return SettLastAccessTime;
    }

    public void setSettLastAccessTime(Date settLastAccessTime) {
        this.SettLastAccessTime = settLastAccessTime;
    }
	
	public String getStrVal() {
        return StrVal;
    }

    public void setStrVal(String strVal) {
        this.StrVal = strVal;
    }
	
	public String getTxtVal() {
        return TxtVal;
    }

    public void setTxtVal(String txtVal) {
        this.TxtVal = txtVal;
    }
	
	public Integer getIntVal() {
        return IntVal;
    }

    public void setTxtVal(Integer intVal) {
        this.IntVal = intVal;
    }
	
	public Boolean getBoolVal() {
        return BoolVal;
    }

    public void setBoolVal(Boolean boolVal) {
        this.BoolVal = boolVal;
    }
	
	public UUID getGuidVal() {
        return GuidVal;
    }

    public void setGuidVal(UUID guidVal) {
        this.GuidVal = guidVal;
    }
	
	public Double getDecimalVal() {
        return DecimalVal;
    }

    public void setDecimalVal(Double decimalVal) {
        this.DecimalVal = decimalVal;
    }
	
	public Date getDateTimeVal() {
        return DateTimeVal;
    }

    public void setDateTimeVal(Date dateTimeVal) {
        this.DateTimeVal = dateTimeVal;
    }
}