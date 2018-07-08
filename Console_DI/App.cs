using System;
using System.Collections.Generic;
using System.Text;

namespace Console_DI
{
    public class App
    {
        private ISampleService _ss;
        public App(ISampleService ss) { this._ss = ss; }
        public void Run()
        {
            this._ss.Execute(); // execute SampleService obtained through dependency injection
        }
    }
}