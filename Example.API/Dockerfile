#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Example.API/Example.API.csproj", "Example.API/"]
COPY ["Example.Application/Example.Application.csproj", "Example.Application/"]
COPY ["Example.Domen/Example.Domen.csproj", "Example.Domen/"]
COPY ["Example.Infrastructure/Example.Infrastructure.csproj", "Example.Infrastructure/"]
RUN dotnet restore "./Example.API/Example.API.csproj"
COPY . .
WORKDIR "/src/Example.API"
RUN dotnet build "./Example.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Example.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Example.API.dll"]