package AZSKursach.service;

import com.sap.olingo.jpa.processor.core.api.JPAODataCRUDContextAccess;
import com.sap.olingo.jpa.processor.core.api.JPAODataServiceContext;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.sql.DataSource;


public class Listener implements ServletContextListener {

    // Create Service Context
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        try {
            final DataSource ds = DataSourceProvider.createDataSource();
            final JPAODataCRUDContextAccess serviceContext = JPAODataServiceContext.with()
                    .setPUnit(DataSourceProvider.PERSISTENCE_UNIT_NAME)
                    .setDataSource(ds)
                    .setTypePackage("AZSKursach.model")
                    .build();
            sce.getServletContext().setAttribute("ServiceContext", serviceContext);
        } catch (Exception e) {
            System.out.printf("processError: %s%n", e.getMessage());
            e.printStackTrace(System.out);
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        sce.getServletContext().setAttribute("ServiceContext", null);
    }
}