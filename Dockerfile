FROM  mcr.microsoft.com/windows/servercore/iis:latest


RUN powershell -Command Add-WindowsFeature Web-Server

WORKDIR /inetpub/wwwroot

RUN mkdir C:\inetpub\wwwroot\customFolder

COPY  ./JenkinsTuitorial/dist/test-project/ \inetpub\wwwroot\customFolder

EXPOSE 80

