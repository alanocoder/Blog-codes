using System;

namespace HangfireDocker
{
    public interface ISomeBackgroundJob
    {
        void Run();
    }

    public class SomeBackgroundJob : ISomeBackgroundJob
    {
        public void Run()
        {
            Console.WriteLine("Background job is executed.");
        }
    }
}