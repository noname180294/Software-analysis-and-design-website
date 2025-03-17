using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IT_Platform_ClassLib
{
    // Certification Entity
    public class Certification
    {
        [Key]
        public int CertificationID { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Issuer { get; set; } = string.Empty;
        public DateTime IssueDate { get; set; }
        public string CertURL { get; set; } = string.Empty;
        public ICollection<ExpertiseProfile> ExpertiseProfiles { get; set; } = new List<ExpertiseProfile>();
    }

    // Expertise Profile Entity
    public class ExpertiseProfile
    {
        [Key]
        public int ProfileID { get; set; }
        public string Field { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string PortfolioURL { get; set; } = string.Empty;

        public int FreelancerID { get; set; }
        [ForeignKey("FreelancerID")]
        public Freelancer Freelancer { get; set; } = null!;

        public ICollection<Certification> Certifications { get; set; } = new List<Certification>();
        public ICollection<SkillInProfile> SkillsInProfile { get; set; } = new List<SkillInProfile>();
    }

    // SkillInProfile Entity
    public class SkillInProfile
    {
        [Key]
        public int SkillInProfileID { get; set; }

        public int SkillID { get; set; }
        [ForeignKey("SkillID")]
        public Skill Skill { get; set; } = null!;

        public int ProfileID { get; set; }
        [ForeignKey("ProfileID")]
        public ExpertiseProfile Profile { get; set; } = null!;

        public int ProficiencyLevel { get; set; }
    }

    // Skill Entity
    public class Skill
    {
        [Key]
        public int SkillID { get; set; }
        public string Name { get; set; } = string.Empty;

        public ICollection<SkillInProfile> SkillInProfiles { get; set; } = new List<SkillInProfile>();
        public ICollection<SkillRequirement> SkillRequirements { get; set; } = new List<SkillRequirement>();
    }

    // Skill Requirement Entity
    public class SkillRequirement
    {
        [Key]
        public int SkillRequirementID { get; set; }

        public int SkillID { get; set; }
        [ForeignKey("SkillID")]
        public Skill Skill { get; set; } = null!;

        public int ProjectID { get; set; }
        [ForeignKey("ProjectID")]
        public Project Project { get; set; } = null!;

        public int ProficiencyLevel { get; set; }
    }

    // Freelancer Entity
    public class Freelancer
    {
        [Key]
        public int UserID { get; set; }
        public string CIN { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string MiddleName { get; set; } = string.Empty;
        public string FirstName { get; set; } = string.Empty;
        public DateTime DOB { get; set; }
        public string Gender { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;

        // Navigation properties
        public ICollection<ExpertiseProfile> ExpertiseProfiles { get; set; } = new List<ExpertiseProfile>();
        public ICollection<Application> Applications { get; set; } = new List<Application>();
        public ICollection<Submission> Submissions { get; set; } = new List<Submission>();
    }

    // Package Entity
    public class Package
    {
        [Key]
        public int PackageID { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public string Period { get; set; } = string.Empty;

        public ICollection<Subscription> Subscriptions { get; set; } = new List<Subscription>();
    }

    // Subscription Entity
    public class Subscription
    {
        [Key]
        public int SubscriptionID { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

        public int PackageID { get; set; }
        [ForeignKey("PackageID")]
        public Package Package { get; set; } = null!;

        public int ClientID { get; set; }
        [ForeignKey("ClientID")]
        public Client Client { get; set; } = null!;
    }

    // Client Entity
    public class Client
    {
        [Key]
        public int ClientID { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;

        public ICollection<Project> Projects { get; set; } = new List<Project>();
        public ICollection<Subscription> Subscriptions { get; set; } = new List<Subscription>();
    }

    // Project Entity
    public class Project
    {
        [Key]
        public int ProjectID { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal BudgetMin { get; set; }
        public decimal BudgetMax { get; set; }
        public string Status { get; set; } = string.Empty;

        public int ClientID { get; set; }
        [ForeignKey("ClientID")]
        public Client Client { get; set; } = null!;

        public ICollection<SkillRequirement> SkillRequirements { get; set; } = new List<SkillRequirement>();
        public ICollection<Application> Applications { get; set; } = new List<Application>();
        public ICollection<Milestone> Milestones { get; set; } = new List<Milestone>();
    }

    // Location Entity
    public class Location
    {
        [Key]
        public int LocationID { get; set; }
        public string City { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string State { get; set; } = string.Empty;
        public string PostalCode { get; set; } = string.Empty;
    }

    // Application Entity
    public class Application
    {
        [Key]
        public int ApplicationID { get; set; }
        public DateTime ApplicationDate { get; set; }
        public string Status { get; set; } = string.Empty;

        public int FreelancerID { get; set; }
        [ForeignKey("FreelancerID")]
        public Freelancer Freelancer { get; set; } = null!;

        public int ProjectID { get; set; }
        [ForeignKey("ProjectID")]
        public Project Project { get; set; } = null!;
    }

    // Submission Entity
    public class Submission
    {
        [Key]
        public int SubmissionID { get; set; }
        public string FileURL { get; set; } = string.Empty;
        public DateTime SubmissionDate { get; set; }

        public int FreelancerID { get; set; }
        [ForeignKey("FreelancerID")]
        public Freelancer Freelancer { get; set; } = null!;

        public int MilestoneID { get; set; }
        [ForeignKey("MilestoneID")]
        public Milestone Milestone { get; set; } = null!;
    }

    // Milestone Entity
    public class Milestone
    {
        [Key]
        public int MilestoneID { get; set; }
        public string Description { get; set; } = string.Empty;
        public DateTime DueDate { get; set; }

        public int ProjectID { get; set; }
        [ForeignKey("ProjectID")]
        public Project Project { get; set; } = null!;

        public ICollection<Submission> Submissions { get; set; } = new List<Submission>();
    }
}