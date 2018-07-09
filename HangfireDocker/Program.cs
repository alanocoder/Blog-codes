using Microsoft.Extensions.DependencyInjection;
using Hangfire;
using System;

namespace HangfireDocker
{
    public class ContainerJobActivator : JobActivator
    {
        private IServiceProvider _provider;

        public ContainerJobActivator(IServiceProvider provider)
        {
            this._provider = provider;
        }

        public override object ActivateJob(Type type)
        {
            return this._provider.GetService(type);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            var services = new ServiceCollection();
            ConfigureServices(services);
            var serviceProvider = services.BuildServiceProvider();


            var dbConnStr = "data source=dbHostname;initial catalog=dbname;User id=sa;password=Your_password123;";
            GlobalConfiguration.Configuration.UseSqlServerStorage(dbConnStr);
            GlobalConfiguration.Configuration.UseActivator(new ContainerJobActivator(serviceProvider));

            using (var server = serviceProvider.GetService<BackgroundJobServer>())
            {
                Console.WriteLine("Hangfire server started. Press <enter> to exit...");
                Console.Read();
            }

            /*/
            var tester = serviceProvider.GetService<JobTest>();
            tester.TestEnqueue();
            //*/
        }

        private static void ConfigureServices(IServiceCollection services)
        {
            // configure all objects/services to work through dependency injection
            services.AddSingleton<BackgroundJobServer>();
            services.AddSingleton<JobTest>();
            services.AddTransient<ISomeBackgroundJob, SomeBackgroundJob>();
        }
    }
}