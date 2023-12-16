package AZSKursach.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import AZSKursach.utils.UUIDConverter;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: IISCaseberryLoggingObjectsApplicationLog
 */
@Entity(name = "IISCaseberryLoggingObjectsApplicationLog")
@Table(schema = "public", name = "applicationlog")
public class IISCaseberryLoggingObjectsApplicationLog {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Category", nullable = true)
    private String Category;
		
	@Column(name = "EventId", nullable = true)
    private Integer EventId;
	
	@Column(name = "Priority", nullable = true)
    private Integer Priority;
		
	@Column(name = "Severity", nullable = true)
    private String Severity;
	
	@Column(name = "Title", nullable = true)
    private String Title;
	
	@Column(name = "Timestamp", nullable = true)
    private Date Timestamp;
	
	@Column(name = "MachineName", nullable = true)
    private String MachineName;
	
	@Column(name = "AppDomainName", nullable = true)
    private String AppDomainName;
	
	@Column(name = "ProcessId", nullable = true)
    private String ProcessId;
	
	@Column(name = "ProcessName", nullable = true)
    private String ProcessName;
	
	@Column(name = "ThreadName", nullable = true)
    private String ThreadName;
		
	@Column(name = "Win32ThreadId", nullable = true)
    private String Win32ThreadId;
	
	@Column(name = "Message", nullable = true)
    private String Message;
	
	@Column(name = "FormattedMessage", nullable = true)
    private String FormattedMessage;
	
	public IISCaseberryLoggingObjectsApplicationLog() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        this.Category = category;
    }
	
	public Integer getEventId() {
        return EventId;
    }

    public void setEventId(Integer eventId) {
        this.EventId = eventId;
    }
	
	public Integer getPriority() {
        return Priority;
    }

    public void setPriority(Integer priority) {
        this.Priority = priority;
    }
	
	public String getSeverity() {
        return Severity;
    }

    public void setSeverity(String severity) {
        this.Severity = severity;
    }
	
	public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        this.Title = title;
    }
	
	public Date getTimestamp() {
        return Timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.Timestamp =timestamp;
    }
	
	public String getMachineName() {
        return MachineName;
    }

    public void setMachineName(String machineName) {
        this.MachineName = machineName;
    }
	
	public String getAppDomainName() {
        return AppDomainName;
    }

    public void setAppDomainName(String appDomainName) {
        this.AppDomainName = appDomainName;
    }
	
	public String getProcessId() {
        return ProcessId;
    }

    public void setAppProcessId(String processId) {
        this.ProcessId = processId;
    }
	
	public String getProcessName() {
        return ProcessName;
    }

    public void setProcessName(String processName) {
        this.ProcessName = processName;
    }
	
	public String getThreadName() {
        return ThreadName;
    }

    public void setThreadName(String threadName) {
        this.ThreadName = threadName;
    }
	
	public String getWin32ThreadId() {
        return Win32ThreadId;
    }

    public void setWin32ThreadId(String win32ThreadId) {
        this.Win32ThreadId = win32ThreadId;
    }
	
	public String getMessage() {
        return Message;
    }

    public void setMessage(String message) {
        this.Message = message;
    }
	
	public String getFormattedMessage() {
        return FormattedMessage;
    }

    public void setFormattedMessage(String formattedMessage) {
        this.FormattedMessage = formattedMessage;
    }
}