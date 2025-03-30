FROM mcr.microsoft.com/dotnet/aspnet:9.0-preview AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:9.0-preview AS build
WORKDIR /src

COPY ["*.sln", "./"]
COPY ["BusinessObjects/", "BusinessObjects/"]
COPY ["DataAccessObjects/", "DataAccessObjects/"]
COPY ["Repositories/", "Repositories/"]
COPY ["Services/", "Services/"]
COPY ["ITPlatformUMT/", "ITPlatformUMT/"]

WORKDIR /src/ITPlatform
RUN dotnet restore

RUN dotnet publish -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "ITPlatform.dll"]
