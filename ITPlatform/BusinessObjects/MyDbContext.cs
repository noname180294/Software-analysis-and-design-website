using Microsoft.EntityFrameworkCore;
using System;

namespace BusinessObjects
{
    public class MyDbContext : DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Application> Applications { get; set; }
        public DbSet<Certification> Certifications { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<ExpertiseProfile> ExpertiseProfiles { get; set; }
        public DbSet<Freelancer> Freelancers { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Milestone> Milestones { get; set; }
        public DbSet<Package> Packages { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<SkillInProfile> SkillInProfiles { get; set; }
        public DbSet<SkillRequirement> SkillRequirements { get; set; }
        public DbSet<Submittion> Submittions { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var connectionString = "Server=AXEL\\SQLEXPRESS;Database=ITPlatformUMT;Uid=Hieu;Pwd=Hieupham123;TrustServerCertificate=true";
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Application>()
                .HasOne(a => a.Freelancer)
                .WithMany()
                .HasForeignKey(a => a.FreelancerID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Application>()
                .HasOne(a => a.Project)
                .WithMany(p => p.ApplicationList)
                .HasForeignKey(a => a.ProjectID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Project>()
                .HasOne(p => p.Client)
                .WithMany()
                .HasForeignKey(p => p.ClientID)
                .OnDelete(DeleteBehavior.Restrict);

            // Seed data configuration
            SeedData(modelBuilder);
        }

        private void SeedData(ModelBuilder modelBuilder)
        {
            // Account
            modelBuilder.Entity<Account>().HasData(
                new Account { AccountID = "ACC001", Role = "Freelancer", Email = "john.doe@example.com", Password = "123456" },
                new Account { AccountID = "ACC002", Role = "Client", Email = "jane.smith@example.com", Password = "123456" },
                new Account { AccountID = "ACC003", Role = "Freelancer", Email = "mike.brown@example.com", Password = "123456" },
                new Account { AccountID = "ACC004", Role = "Client", Email = "sarah.johnson@example.com", Password = "123456" },
                new Account { AccountID = "ACC005", Role = "Freelancer", Email = "emily.davis@example.com", Password = "123456" }
            );

            // Application
            modelBuilder.Entity<Application>().HasData(
                new Application
                {
                    ApplicationID = "APP001",
                    CV = "https://johndoe.com/cv",
                    Status = "Pending",
                    FreelancerID = "FREE001",
                    ProjectID = "PROJ001"
                },
                new Application
                {
                    ApplicationID = "APP002",
                    CV = "https://emilydavis.com/cv",
                    Status = "Reviewed",
                    FreelancerID = "FREE003",
                    ProjectID = "PROJ002"
                }
            );

            // Certification
            modelBuilder.Entity<Certification>().HasData(
                new Certification
                {
                    CertID = "CERT001",
                    Name = "AWS Certified Developer",
                    Issuer = "Amazon Web Services",
                    IssueDate = new DateTime(2022, 6, 15),
                    CertURL = "https://aws.amazon.com/certification/cert/john-doe",
                    ProfileID = "PROF001"
                },
                new Certification
                {
                    CertID = "CERT002",
                    Name = "TensorFlow Developer Certificate",
                    Issuer = "Google",
                    IssueDate = new DateTime(2023, 1, 20),
                    CertURL = "https://www.tensorflow.org/certificate",
                    ProfileID = "PROF002"
                }
            );

            // Client
            modelBuilder.Entity<Client>().HasData(
                new Client
                {
                    ClientID = "CLIENT001",
                    Name = "Tech Innovations Inc",
                    Field = "Technology",
                    PhoneNumber = "+1-800-TECH-INN",
                    WebsiteURL = "https://techinnovations.com",
                    TaxID = "TAX12345",
                    AccountID = "ACC002"
                },
                new Client
                {
                    ClientID = "CLIENT002",
                    Name = "Global Solutions LLC",
                    Field = "Consulting",
                    PhoneNumber = "+1-888-GLOBAL",
                    WebsiteURL = "https://globalsolutions.com",
                    TaxID = "TAX67890",
                    AccountID = "ACC004"
                }
            );

            // ExpertiseProfile
            modelBuilder.Entity<ExpertiseProfile>().HasData(
                new ExpertiseProfile
                {
                    ProfileID = "PROF001",
                    Field = "Software Development",
                    Title = "MS",
                    Description = "Experienced software developer specializing in web and mobile applications",
                    PortfolioURL = "https://johndoe.portfolio.com",
                    FreelancerID = "FREE001"
                },
                new ExpertiseProfile
                {
                    ProfileID = "PROF002",
                    Field = "Data Science",
                    Title = "PhD",
                    Description = "Machine learning expert with focus on predictive analytics",
                    PortfolioURL = "https://emilydavis.portfolio.com",
                    FreelancerID = "FREE003"
                }
            );

            // Freelancer
            modelBuilder.Entity<Freelancer>().HasData(
                new Freelancer
                {
                    FreelancerID = "FREE001",
                    CIN = "AB12345",
                    LastName = "Doe",
                    FirstName = "John",
                    MiddleName = "Michael",
                    DOB = new DateTime(1990, 5, 15),
                    Gender = "Male",
                    PhoneNumber = "+1234567890",
                    Address = "123 Main St, Anytown, USA",
                    AccountID = "ACC001"
                },
                new Freelancer
                {
                    FreelancerID = "FREE002",
                    CIN = "CD67890",
                    LastName = "Brown",
                    FirstName = "Mike",
                    MiddleName = "James",
                    DOB = new DateTime(1988, 8, 22),
                    Gender = "Male",
                    PhoneNumber = "+9876543210",
                    Address = "456 Oak Ave, Another City, USA",
                    AccountID = "ACC003"
                },
                new Freelancer
                {
                    FreelancerID = "FREE003",
                    CIN = "EF13579",
                    LastName = "Davis",
                    FirstName = "Emily",
                    MiddleName = "Rose",
                    DOB = new DateTime(1992, 3, 10),
                    Gender = "Female",
                    PhoneNumber = "+1122334455",
                    Address = "789 Pine Rd, Tech City, USA",
                    AccountID = "ACC005"
                }
            );

            // Location
            modelBuilder.Entity<Location>().HasData(
                new Location
                {
                    LocationID = "LOC001",
                    Address = "1234 Innovation Drive, Silicon Valley, CA 94000",
                    ClientID = "CLIENT001"
                },
                new Location
                {
                    LocationID = "LOC002",
                    Address = "5678 Global Street, New York, NY 10001",
                    ClientID = "CLIENT002"
                }
            );

            // Milestone
            modelBuilder.Entity<Milestone>().HasData(
                new Milestone
                {
                    MilestoneID = "MILE001",
                    Budget = 3000,
                    Status = "InProgress",
                    ProjectID = "PROJ001"
                },
                new Milestone
                {
                    MilestoneID = "MILE002",
                    Budget = 5000,
                    Status = "Pending",
                    ProjectID = "PROJ002"
                }
            );

            // Package
            modelBuilder.Entity<Package>().HasData(
                new Package { PackageID = "PACK001", Type = "Freelancer", Name = "Basic Freelancer", Price = 50.00, Period = 3 },
                new Package { PackageID = "PACK002", Type = "Freelancer", Name = "Pro Freelancer", Price = 80.00, Period = 6 },
                new Package { PackageID = "PACK003", Type = "Freelancer", Name = "Enterprise Freelancer", Price = 125.00, Period = 12 },
                new Package { PackageID = "PACK004", Type = "Client", Name = "Standard Client", Price = 150.00, Period = 3 },
                new Package { PackageID = "PACK005", Type = "Client", Name = "Premium Client", Price = 250.00, Period = 6 }
            );

            // Project
            modelBuilder.Entity<Project>().HasData(
                new Project
                {
                    ProjectID = "PROJ001",
                    Title = "E-commerce Platform Development",
                    Description = "Build a full-featured e-commerce website with payment integration",
                    BudgetMin = 5000,
                    BudgetMax = 10000,
                    Status = "Open",
                    ClientID = "CLIENT001"
                },

                new Project
                {
                    ProjectID = "PROJ002",
                    Title = "Machine Learning Model for Predictive Analytics",
                    Description = "Develop a ML model to predict customer behavior",
                    BudgetMin = 7000,
                    BudgetMax = 15000,
                    Status = "Open",
                    ClientID = "CLIENT002"
                }
            );

            // Skill
            modelBuilder.Entity<Skill>().HasData(
                new Skill { SkillID = "SKILL001", Name = "Python" },
                new Skill { SkillID = "SKILL002", Name = "C++" },
                new Skill { SkillID = "SKILL003", Name = "C#" },
                new Skill { SkillID = "SKILL004", Name = "JavaScript" },
                new Skill { SkillID = "SKILL005", Name = "R" }
            );

            // SkillInProfile
            modelBuilder.Entity<SkillInProfile>().HasData(
                new SkillInProfile
                {
                    SkillInProfileID = "SKILLPROF001",
                    ProficiencyLevel = "Expert",
                    SkillID = "SKILL003",
                    ProfileID = "PROF001"
                },
                new SkillInProfile
                {
                    SkillInProfileID = "SKILLPROF002",
                    ProficiencyLevel = "Advanced",
                    SkillID = "SKILL005",
                    ProfileID = "PROF002"
                }
            );

            // SkillRequirement
            modelBuilder.Entity<SkillRequirement>().HasData(
                new SkillRequirement
                {
                    SkillRequirementID = "SKILLREQ001",
                    ProficiencyLevel = "Advanced",
                    SkillID = "SKILL003",
                    ProjectID = "PROJ001"
                },
                new SkillRequirement
                {
                    SkillRequirementID = "SKILLREQ002",
                    ProficiencyLevel = "Expert",
                    SkillID = "SKILL005",
                    ProjectID = "PROJ002"
                }
            );

            // Submittion
            modelBuilder.Entity<Submittion>().HasData(
                new Submittion
                {
                    SubmittionID = "SUBMIT001",
                    Content = "Initial project proposal and wireframes",
                    Status = "Pending",
                    FreelancerID = "FREE001",
                    MilestoneID = "MILE001"
                },
                new Submittion
                {
                    SubmittionID = "SUBMIT002",
                    Content = "Preliminary data analysis report",
                    Status = "Pending",
                    FreelancerID = "FREE003",
                    MilestoneID = "MILE002"
                }
            );

            // Subscription
            modelBuilder.Entity<Subscription>().HasData(
                new Subscription
                {
                    SubscriptionID = "SUB001",
                    StartDate = new DateTime(2024, 1, 1),
                    EndDate = new DateTime(2024, 4, 1),
                    FreelancerID = "FREE001"
                },
                new Subscription
                {
                    SubscriptionID = "SUB002",
                    StartDate = new DateTime(2024, 2, 15),
                    EndDate = new DateTime(2024, 8, 15),
                    ClientID = "CLIENT001"
                },
                new Subscription
                {
                    SubscriptionID = "SUB003",
                    StartDate = new DateTime(2024, 3, 1),
                    EndDate = new DateTime(2024, 9, 1),
                    FreelancerID = "FREE003"
                }
            );
        }
    }
}