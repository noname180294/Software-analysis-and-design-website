using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace BusinessObjects
{
    public class MyDbContextFactory : IDesignTimeDbContextFactory<MyDbContext>
    {
        public MyDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<MyDbContext>();
            optionsBuilder.UseSqlServer("Server=AXEL\\SQLEXPRESS;Database=ITPlatformUMT;Uid=Hieu;Pwd=Hieupham123;TrustServerCertificate=true");

            return new MyDbContext(optionsBuilder.Options);
        }
    }
}
