package AZSKursach.service;

import org.flywaydb.core.internal.util.jdbc.DriverDataSource;

import java.rmi.ServerException;

public class DataSourceProvider {

    public static final String PERSISTENCE_UNIT_NAME = "Olingo4PG";

    public static javax.sql.DataSource createDataSource() throws ServerException {
        final ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        final String DB_ADDR = System.getenv().getOrDefault("DB_ADDR", null);
        if (DB_ADDR == null) {
            throw new ServerException("Database address is not set (env. variable DB_ADDR).");
        }
        final String DB_PORT = System.getenv().getOrDefault("DB_PORT", "5432");
        final String DB_NAME = System.getenv().getOrDefault("DB_NAME", null);
        if (DB_NAME == null) {
            throw new ServerException("Database name is not set (env. variable DB_NAME).");
        }
        final String DB_USER = System.getenv().getOrDefault("DB_USER", "postgres");
        final String DB_PASS = System.getenv().getOrDefault("DB_PASS", "");

        final javax.sql.DataSource ds = new DriverDataSource(classLoader,
                "org.postgresql.Driver",
                String.format("jdbc:postgresql://%s:%s/%s", DB_ADDR, DB_PORT, DB_NAME),
                DB_USER,
                DB_PASS, new String[0]);
        return ds;
    }
}