docker build --no-cache -f SQL\Dockerfile.PostgreSql -t azskursach-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t azskursach-java/app ../../..
