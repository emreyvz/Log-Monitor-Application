using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Log.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly LogContext _context;
        public LogController(LogContext context)
        {
            context.Database.EnsureCreated();
            _context = context;
        }        

        [HttpGet]
        public ActionResult<IEnumerable<log>> Get()
        {   
            return _context.logs.ToList();
        }


        [HttpPost]
        public void Post([FromBody] log value)
        {
            if ((value.log_type=="exception" || value.log_type == "trace" || value.log_type == "info") && (!String.IsNullOrEmpty(value.message)))
            {
                log item = new log
                {
                    message = value.message,
                    log_type = value.log_type,
                    create_Date = DateTime.Now.ToString()
                };
                _context.Add(item);
                _context.SaveChanges();
                Response.StatusCode = 200;
            }
            else
            {
                Response.StatusCode = 400;
            }
        }



    }
}
