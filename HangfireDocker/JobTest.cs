using Hangfire;

namespace HangfireDocker
{
    public class JobTest
    {
        private ISomeBackgroundJob _someBackgroundJob;
        public JobTest(ISomeBackgroundJob bgJob)
        {
            this._someBackgroundJob = bgJob;
        }
        public void TestEnqueue()
        {
            BackgroundJob.Enqueue<ISomeBackgroundJob>(bgJob => bgJob.Run());
        }
    }
}
