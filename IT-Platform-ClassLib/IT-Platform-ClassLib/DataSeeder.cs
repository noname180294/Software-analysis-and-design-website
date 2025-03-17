using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace IT_Platform_ClassLib
{
    public static class DataSeeder
    {
        public static void SeedData(IServiceProvider serviceProvider)
        {
            using (var scope = serviceProvider.CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<ITPlatformDbContext>();

                if (!context.Freelancers.Any())
                {
                    context.Freelancers.AddRange(
                        new Freelancer { UserID = 1, LastName = "Pham", FirstName = "Hieu", Email = "hieu@example.com"},
                        new Freelancer { UserID = 2, LastName = "Vo", FirstName = "Bao", Email = "bao@example.com"},
                        new Freelancer { UserID = 3, LastName = "Vo", FirstName = "Anh", Email = "anh@example.com" },
                        new Freelancer { UserID = 4, LastName = "Son", FirstName = "Tan", Email = "tan@example.com" }
                    );
                    context.SaveChanges();
                }
            }
        }
    }
}
