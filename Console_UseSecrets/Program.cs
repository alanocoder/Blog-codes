using System;
using Microsoft.Extensions.Configuration;

namespace Console_UseSecrets
{
    // This sample shows how to use appSettings and user-secrets at .NET core console application
    // NuGet packages needed:
    //  - Microsoft.Extensions.Configuration
    //  - Microsoft.Extensions.Configuration.Json
    //  - Microsoft.Extensions.Configuration.UserSecrets
    //
    //  or
    //
    //  - Microsoft.AspNetCore (this package includes all the needed packages)


    // DotNetCliTool to use dotnet user-secrets command (add to .csproj file)
    // <ItemGroup>
    //  <DotNetCliToolReference Include = "Microsoft.Extensions.SecretManager.Tools" Version="2.0.0" />
    // </ItemGroup>

    /* Docker verions to add to docker-compose.override.yml (add a volume to the container so that app can access user-secrets file
services:
  console_usesecrets:
    environment:
      - DOTNETCORE_ENVIRONMENT=Development
      - USER_SECRETS_ID=c8cbb18b-d6d2-4bff-81e6-0e0a95f08903
    volumes:
      - $APPDATA/Microsoft/UserSecrets/$USER_SECRETS_ID:/root/.microsoft/usersecrets/$USER_SECRETS_ID
      */
    class Program
    {
        static void Main(string[] args)
        {
            var env = Environment.GetEnvironmentVariable("DOTNETCORE_ENVIRONMENT");
            if (env == null) env = "Development";
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env}.json", optional: true);

            if (env == "Development") builder.AddUserSecrets<Program>();

            var config = builder.Build();
            var key = "AppSettings:Identity";
            Console.WriteLine($"{key} = {config[key]}");

            App_DI.EnableDependencyInjection(config);
        }
    }
}