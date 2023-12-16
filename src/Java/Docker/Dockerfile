FROM node:10 as frontend

COPY /src/ember-app /usr/src/ember-app
COPY /src/Java/Docker/changeFrontendConfig.sh /usr/src/config/

RUN \
  set -x; \
  sed -i.bak 's/\r$//' /usr/src/config/changeFrontendConfig.sh; \
  cd /usr/src/ember-app/; \
  sh /usr/src/config/changeFrontendConfig.sh;

RUN \
  set -x; \
  cd /usr/src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /usr/src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /usr/src/ember-app/; \
  ember build --environment=docker

FROM maven:3.8.1-adoptopenjdk-8-openj9 as backend
WORKDIR /usr/src/app
COPY /src/Java/pom.xml .
RUN mvn -B -e -C -T 1C org.apache.maven.plugins:maven-dependency-plugin:3.1.1:go-offline
COPY /src/Java/main src/main
RUN mvn package

FROM tomcat:jdk8-adoptopenjdk-openj9
EXPOSE 8080 8000

COPY --from=backend /usr/src/app/target/*.war  /usr/local/tomcat/webapps/
COPY --from=frontend /usr/src/ember-app/dist /usr/local/tomcat/webapps/ROOT/