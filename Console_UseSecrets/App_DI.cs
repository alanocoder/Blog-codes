using System;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Console_UseSecrets
{
    public class AppSettings
    {
        public string Identity { get; set; }
        public string Secret { get; set; }
    }


    public class App_DI
    {
        public static void EnableDependencyInjection(IConfigurationRoot config)
        {
            var services = new ServiceCollection();
            services.Configure<AppSettings>(config.GetSection("AppSettings"));
            services.AddSingleton<App_DI>();

            var serviceProvider = services.BuildServiceProvider();
            var app = serviceProvider.GetService<App_DI>(); // obtain an instance of class App.
            app.Run(); // start running the app
        }



        private AppSettings _appSettings;
        public App_DI(IOptions<AppSettings> options) { this._appSettings = options.Value; }
        public void Run()
        {
            Console.WriteLine($"Identity through dependency injection: {this._appSettings.Identity}");
        }
    }
}