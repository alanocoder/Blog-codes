﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactJs_Minimal.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GetHelloWorldData()
        {
            return new ObjectResult(new { status = $"Successful: at {DateTime.Now.ToShortTimeString()}", count = 10 });
        }
    }
}