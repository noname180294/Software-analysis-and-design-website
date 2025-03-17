using Microsoft.EntityFrameworkCore;
using System;

namespace IT_Platform_ClassLib
{
    public class ITPlatformDbContext : DbContext
    {
        public ITPlatformDbContext() { }

        public ITPlatformDbContext(DbContextOptions<ITPlatformDbContext> options)
            : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=AXEL\\SQLEXPRESS;Database=ITPlatForm;Uid=Hieu;Pwd=Hieupham123;TrustServerCertificate=true");
            }
        }

        public virtual DbSet<Certification> Certifications { get; set; }
        public virtual DbSet<ExpertiseProfile> ExpertiseProfiles { get; set; }
        public virtual DbSet<SkillInProfile> SkillInProfiles { get; set; }
        public virtual DbSet<Skill> Skills { get; set; }
        public virtual DbSet<SkillRequirement> SkillRequirements { get; set; }
        public virtual DbSet<Freelancer> Freelancers { get; set; }
        public virtual DbSet<Package> Packages { get; set; }
        public virtual DbSet<Subscription> Subscriptions { get; set; }
        public virtual DbSet<Client> Clients { get; set; }
        public virtual DbSet<Location> Locations { get; set; }
        public virtual DbSet<Application> Applications { get; set; }
        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<Submission> Submissions { get; set; }
        public virtual DbSet<Milestone> Milestones { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Certification>().HasData(
                new Certification { CertificationID = 1, Name = "AWS Certified Developer" },
                new Certification { CertificationID = 2, Name = "Microsoft Azure Fundamentals" },
                new Certification { CertificationID = 3, Name = "Google Cloud Professional" }
            );
            modelBuilder.Entity<Skill>().HasData(
                new Skill { SkillID = 1, Name = "C#" },
                new Skill { SkillID = 2, Name = "JavaScript" },
                new Skill { SkillID = 3, Name = "Python" }
            );
            modelBuilder.Entity<Client>().HasData(
                new Client { ClientID = 1, Name = "Acme Corp", Email = "contact@acme.com" },
                new Client { ClientID = 2, Name = "Tech Solutions", Email = "info@techsolutions.com" },
                new Client { ClientID = 3, Name = "Innovate Ltd", Email = "support@innovate.com" }
            );
            modelBuilder.Entity<Project>().HasData(
                new Project { ProjectID = 1, Title = "E-commerce Website", Description = "A platform for online shopping.", BudgetMin = 5000, BudgetMax = 15000, Status = "Open", ClientID = 1 },
                new Project { ProjectID = 2, Title = "Mobile App Development", Description = "A cross-platform mobile app.", BudgetMin = 8000, BudgetMax = 20000, Status = "In Progress", ClientID = 2 },
                new Project { ProjectID = 3, Title = "AI Chatbot", Description = "An AI-powered chatbot for customer support.", BudgetMin = 10000, BudgetMax = 25000, Status = "Completed", ClientID = 3 }
            );

            // Add Freelancer seed data
            modelBuilder.Entity<Freelancer>().HasData(
                new Freelancer { UserID = 1, LastName = "Pham", MiddleName = "Phuoc Minh", FirstName = "Hieu", Email = "hieu@example.com", Gender = "Male", PhoneNumber = "0123456789", Address = "Ho CHi Minh" },
                new Freelancer { UserID = 2, LastName = "Vo", MiddleName = "Huynh Thai", FirstName = "Bao", Email = "bao@example.com", Gender = "Male", PhoneNumber = "0123456789", Address = "Dong Nai" },
                new Freelancer { UserID = 3, LastName = "Vo", MiddleName = "Ngoc Tram", FirstName = "Anh", Email = "anh@example.com", Gender = "Female", PhoneNumber = "0123456789", Address = "Dong Nai" },
                new Freelancer { UserID = 4, LastName = "Son", MiddleName = "", FirstName = "Tan", Email = "tan@example.com", Gender = "Male", PhoneNumber = "0123456789", Address = "Tra Vinh" }
            );
        }
    }
}
