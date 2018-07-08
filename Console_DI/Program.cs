using Microsoft.Extensions.DependencyInjection;

namespace Console_DI
{
    // This sample shows how to use dependency injection at .NET core console application
    // NuGet packeges needed:
    // - Microsoft.AspNetCore
    class Program
    {
        static void Main(string[] args)
        {
            var services = new ServiceCollection();
            ConfigureServices(services);

            var serviceProvider = services.BuildServiceProvider();
            var app = serviceProvider.GetService<App>(); // obtain an instance of class App.
            app.Run(); // start running the app
        }

        private static void ConfigureServices(IServiceCollection services)
        {
            // configure all objects to work through dependency injection
            services.AddSingleton<App>();
            services.AddTransient<ISampleService, SampleService>();
        }
    }
}