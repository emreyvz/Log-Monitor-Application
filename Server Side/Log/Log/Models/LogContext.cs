using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Log
{
    public class LogContext : DbContext
    {

        public LogContext (DbContextOptions<LogContext> ayarlar) : base(ayarlar)
        {
        }

        public DbSet<log> logs { get; set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<log>().ToTable("logs");
        }


    }
}
