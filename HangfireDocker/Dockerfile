FROM microsoft/dotnet:2.0-runtime AS base
WORKDIR /app

FROM microsoft/dotnet:2.0-sdk AS build
WORKDIR /src
COPY HangfireDocker/HangfireDocker.csproj HangfireDocker/
RUN dotnet restore HangfireDocker/HangfireDocker.csproj
COPY . .
WORKDIR /src/HangfireDocker
RUN dotnet build HangfireDocker.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish HangfireDocker.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "HangfireDocker.dll"]
