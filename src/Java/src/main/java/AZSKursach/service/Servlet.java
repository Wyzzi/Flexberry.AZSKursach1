package AZSKursach.service;

import com.sap.olingo.jpa.metadata.api.JPAEntityManagerFactory;
import com.sap.olingo.jpa.processor.core.api.JPAODataCRUDContextAccess;
import com.sap.olingo.jpa.processor.core.api.JPAODataCRUDHandler;
import org.apache.olingo.commons.api.ex.ODataException;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.rmi.ServerException;

public class Servlet extends HttpServlet {

  private static final long serialVersionUID = 1L;
  private static final String PUNIT_NAME = "Olingo4PG";
  private final EntityManagerFactory emf;

  public Servlet() throws ServerException {
    super();
    final DataSource ds = DataSourceProvider.createDataSource();
    emf = JPAEntityManagerFactory.getEntityManagerFactory(PUNIT_NAME, ds);
  }

  @Override
  protected void service(final HttpServletRequest req, final HttpServletResponse resp)
      throws ServletException {

    EntityManager entityManager = null;
    try {
      final JPAODataCRUDContextAccess serviceContext =
          (JPAODataCRUDContextAccess) getServletContext().getAttribute("ServiceContext");
      entityManager = emf.createEntityManager();

      final JPAODataCRUDHandler handler = new JPAODataCRUDHandler(serviceContext);
      handler.getJPAODataRequestContext().setEntityManager(entityManager);
	    handler.getJPAODataRequestContext().setCUDRequestHandler(new JPAExampleCUDRequestHandler());
      handler.process(req, resp);
    } catch (RuntimeException | ODataException e) {
      throw new ServletException(e);
    } finally {
      if (entityManager != null) {
        entityManager.close();
      }
    }
  }
}