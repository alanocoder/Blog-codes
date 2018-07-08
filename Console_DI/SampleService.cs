using System;
using System.Collections.Generic;
using System.Text;

namespace Console_DI
{
    public interface ISampleService
    {
        void Execute();
    }

    public class SampleService : ISampleService
    {
        public void Execute()
        {
            Console.WriteLine("SampleService:Execute()");
        }
    }
}