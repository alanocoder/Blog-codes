using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LongPollingSimple.AppCode;
using Microsoft.AspNetCore.Mvc;

namespace LongPollingSimple.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> DoLongPolling()
        {
            SimpleLongPolling lp = new SimpleLongPolling("sample-channel");
            var message = await lp.WaitAsync();
            return new ObjectResult(new { Message = (message != null ? message : "Long polling timeout!") });
        }

        public IActionResult SimulateTrigger(string message = "Sample publish message")
        {
            SimpleLongPolling.Publish("sample-channel", message);
            return new ObjectResult(new { Message = message, Status = "Published" });
        }
    }
}