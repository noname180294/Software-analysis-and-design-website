using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace BusinessObjects.Migrations
{
    /// <inheritdoc />
    public partial class FirstDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accounts",
                columns: table => new
                {
                    AccountID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.AccountID);
                });

            migrationBuilder.CreateTable(
                name: "Packages",
                columns: table => new
                {
                    PackageID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<double>(type: "float", nullable: false),
                    Period = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Packages", x => x.PackageID);
                });

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    SkillID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.SkillID);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    ClientID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Field = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    WebsiteURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TaxID = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AccountID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.ClientID);
                    table.ForeignKey(
                        name: "FK_Clients_Accounts_AccountID",
                        column: x => x.AccountID,
                        principalTable: "Accounts",
                        principalColumn: "AccountID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Freelancers",
                columns: table => new
                {
                    FreelancerID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CIN = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MiddleName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AccountID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Freelancers", x => x.FreelancerID);
                    table.ForeignKey(
                        name: "FK_Freelancers_Accounts_AccountID",
                        column: x => x.AccountID,
                        principalTable: "Accounts",
                        principalColumn: "AccountID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Locations",
                columns: table => new
                {
                    LocationID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClientID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Locations", x => x.LocationID);
                    table.ForeignKey(
                        name: "FK_Locations_Clients_ClientID",
                        column: x => x.ClientID,
                        principalTable: "Clients",
                        principalColumn: "ClientID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    ProjectID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BudgetMin = table.Column<double>(type: "float", nullable: false),
                    BudgetMax = table.Column<double>(type: "float", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClientID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClientID1 = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.ProjectID);
                    table.ForeignKey(
                        name: "FK_Projects_Clients_ClientID",
                        column: x => x.ClientID,
                        principalTable: "Clients",
                        principalColumn: "ClientID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Projects_Clients_ClientID1",
                        column: x => x.ClientID1,
                        principalTable: "Clients",
                        principalColumn: "ClientID");
                });

            migrationBuilder.CreateTable(
                name: "ExpertiseProfiles",
                columns: table => new
                {
                    ProfileID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Field = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PortfolioURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FreelancerID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExpertiseProfiles", x => x.ProfileID);
                    table.ForeignKey(
                        name: "FK_ExpertiseProfiles_Freelancers_FreelancerID",
                        column: x => x.FreelancerID,
                        principalTable: "Freelancers",
                        principalColumn: "FreelancerID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Subscriptions",
                columns: table => new
                {
                    SubscriptionID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FreelancerID = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ClientID = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    PackageID = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subscriptions", x => x.SubscriptionID);
                    table.ForeignKey(
                        name: "FK_Subscriptions_Clients_ClientID",
                        column: x => x.ClientID,
                        principalTable: "Clients",
                        principalColumn: "ClientID");
                    table.ForeignKey(
                        name: "FK_Subscriptions_Freelancers_FreelancerID",
                        column: x => x.FreelancerID,
                        principalTable: "Freelancers",
                        principalColumn: "FreelancerID");
                    table.ForeignKey(
                        name: "FK_Subscriptions_Packages_PackageID",
                        column: x => x.PackageID,
                        principalTable: "Packages",
                        principalColumn: "PackageID");
                });

            migrationBuilder.CreateTable(
                name: "Applications",
                columns: table => new
                {
                    ApplicationID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CV = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FreelancerID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProjectID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FreelancerID1 = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applications", x => x.ApplicationID);
                    table.ForeignKey(
                        name: "FK_Applications_Freelancers_FreelancerID",
                        column: x => x.FreelancerID,
                        principalTable: "Freelancers",
                        principalColumn: "FreelancerID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Applications_Freelancers_FreelancerID1",
                        column: x => x.FreelancerID1,
                        principalTable: "Freelancers",
                        principalColumn: "FreelancerID");
                    table.ForeignKey(
                        name: "FK_Applications_Projects_ProjectID",
                        column: x => x.ProjectID,
                        principalTable: "Projects",
                        principalColumn: "ProjectID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Milestones",
                columns: table => new
                {
                    MilestoneID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Budget = table.Column<double>(type: "float", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProjectID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Milestones", x => x.MilestoneID);
                    table.ForeignKey(
                        name: "FK_Milestones_Projects_ProjectID",
                        column: x => x.ProjectID,
                        principalTable: "Projects",
                        principalColumn: "ProjectID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SkillRequirements",
                columns: table => new
                {
                    SkillRequirementID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProficiencyLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SkillID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProjectID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SkillRequirements", x => x.SkillRequirementID);
                    table.ForeignKey(
                        name: "FK_SkillRequirements_Projects_ProjectID",
                        column: x => x.ProjectID,
                        principalTable: "Projects",
                        principalColumn: "ProjectID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SkillRequirements_Skills_SkillID",
                        column: x => x.SkillID,
                        principalTable: "Skills",
                        principalColumn: "SkillID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Certifications",
                columns: table => new
                {
                    CertID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Issuer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IssueDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CertURL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ProfileID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Certifications", x => x.CertID);
                    table.ForeignKey(
                        name: "FK_Certifications_ExpertiseProfiles_ProfileID",
                        column: x => x.ProfileID,
                        principalTable: "ExpertiseProfiles",
                        principalColumn: "ProfileID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SkillInProfiles",
                columns: table => new
                {
                    SkillInProfileID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProficiencyLevel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SkillID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProfileID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SkillInProfiles", x => x.SkillInProfileID);
                    table.ForeignKey(
                        name: "FK_SkillInProfiles_ExpertiseProfiles_ProfileID",
                        column: x => x.ProfileID,
                        principalTable: "ExpertiseProfiles",
                        principalColumn: "ProfileID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SkillInProfiles_Skills_SkillID",
                        column: x => x.SkillID,
                        principalTable: "Skills",
                        principalColumn: "SkillID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Submittions",
                columns: table => new
                {
                    SubmittionID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FreelancerID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    MilestoneID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Submittions", x => x.SubmittionID);
                    table.ForeignKey(
                        name: "FK_Submittions_Freelancers_FreelancerID",
                        column: x => x.FreelancerID,
                        principalTable: "Freelancers",
                        principalColumn: "FreelancerID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Submittions_Milestones_MilestoneID",
                        column: x => x.MilestoneID,
                        principalTable: "Milestones",
                        principalColumn: "MilestoneID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Accounts",
                columns: new[] { "AccountID", "Email", "Password", "Role" },
                values: new object[,]
                {
                    { "ACC001", "john.doe@example.com", "123456", "Freelancer" },
                    { "ACC002", "jane.smith@example.com", "123456", "Client" },
                    { "ACC003", "mike.brown@example.com", "123456", "Freelancer" },
                    { "ACC004", "sarah.johnson@example.com", "123456", "Client" },
                    { "ACC005", "emily.davis@example.com", "123456", "Freelancer" }
                });

            migrationBuilder.InsertData(
                table: "Packages",
                columns: new[] { "PackageID", "Name", "Period", "Price", "Type" },
                values: new object[,]
                {
                    { "PACK001", "Basic Freelancer", 3, 50.0, "Freelancer" },
                    { "PACK002", "Pro Freelancer", 6, 80.0, "Freelancer" },
                    { "PACK003", "Enterprise Freelancer", 12, 125.0, "Freelancer" },
                    { "PACK004", "Standard Client", 3, 150.0, "Client" },
                    { "PACK005", "Premium Client", 6, 250.0, "Client" }
                });

            migrationBuilder.InsertData(
                table: "Skills",
                columns: new[] { "SkillID", "Name" },
                values: new object[,]
                {
                    { "SKILL001", "Python" },
                    { "SKILL002", "C++" },
                    { "SKILL003", "C#" },
                    { "SKILL004", "JavaScript" },
                    { "SKILL005", "R" }
                });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "ClientID", "AccountID", "Field", "Name", "PhoneNumber", "TaxID", "WebsiteURL" },
                values: new object[,]
                {
                    { "CLIENT001", "ACC002", "Technology", "Tech Innovations Inc", "+1-800-TECH-INN", "TAX12345", "https://techinnovations.com" },
                    { "CLIENT002", "ACC004", "Consulting", "Global Solutions LLC", "+1-888-GLOBAL", "TAX67890", "https://globalsolutions.com" }
                });

            migrationBuilder.InsertData(
                table: "Freelancers",
                columns: new[] { "FreelancerID", "AccountID", "Address", "CIN", "DOB", "FirstName", "Gender", "LastName", "MiddleName", "PhoneNumber" },
                values: new object[,]
                {
                    { "FREE001", "ACC001", "123 Main St, Anytown, USA", "AB12345", new DateTime(1990, 5, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "John", "Male", "Doe", "Michael", "+1234567890" },
                    { "FREE002", "ACC003", "456 Oak Ave, Another City, USA", "CD67890", new DateTime(1988, 8, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Mike", "Male", "Brown", "James", "+9876543210" },
                    { "FREE003", "ACC005", "789 Pine Rd, Tech City, USA", "EF13579", new DateTime(1992, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Emily", "Female", "Davis", "Rose", "+1122334455" }
                });

            migrationBuilder.InsertData(
                table: "ExpertiseProfiles",
                columns: new[] { "ProfileID", "Description", "Field", "FreelancerID", "PortfolioURL", "Title" },
                values: new object[,]
                {
                    { "PROF001", "Experienced software developer specializing in web and mobile applications", "Software Development", "FREE001", "https://johndoe.portfolio.com", "MS" },
                    { "PROF002", "Machine learning expert with focus on predictive analytics", "Data Science", "FREE003", "https://emilydavis.portfolio.com", "PhD" }
                });

            migrationBuilder.InsertData(
                table: "Locations",
                columns: new[] { "LocationID", "Address", "ClientID" },
                values: new object[,]
                {
                    { "LOC001", "1234 Innovation Drive, Silicon Valley, CA 94000", "CLIENT001" },
                    { "LOC002", "5678 Global Street, New York, NY 10001", "CLIENT002" }
                });

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "ProjectID", "BudgetMax", "BudgetMin", "ClientID", "ClientID1", "Description", "Status", "Title" },
                values: new object[,]
                {
                    { "PROJ001", 10000.0, 5000.0, "CLIENT001", null, "Build a full-featured e-commerce website with payment integration", "Open", "E-commerce Platform Development" },
                    { "PROJ002", 15000.0, 7000.0, "CLIENT002", null, "Develop a ML model to predict customer behavior", "Open", "Machine Learning Model for Predictive Analytics" }
                });

            migrationBuilder.InsertData(
                table: "Subscriptions",
                columns: new[] { "SubscriptionID", "ClientID", "EndDate", "FreelancerID", "PackageID", "StartDate" },
                values: new object[,]
                {
                    { "SUB001", null, new DateTime(2024, 4, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "FREE001", null, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { "SUB002", "CLIENT001", new DateTime(2024, 8, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), null, null, new DateTime(2024, 2, 15, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { "SUB003", null, new DateTime(2024, 9, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "FREE003", null, new DateTime(2024, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "Applications",
                columns: new[] { "ApplicationID", "CV", "FreelancerID", "FreelancerID1", "ProjectID", "Status" },
                values: new object[,]
                {
                    { "APP001", "https://johndoe.com/cv", "FREE001", null, "PROJ001", "Pending" },
                    { "APP002", "https://emilydavis.com/cv", "FREE003", null, "PROJ002", "Reviewed" }
                });

            migrationBuilder.InsertData(
                table: "Certifications",
                columns: new[] { "CertID", "CertURL", "IssueDate", "Issuer", "Name", "ProfileID" },
                values: new object[,]
                {
                    { "CERT001", "https://aws.amazon.com/certification/cert/john-doe", new DateTime(2022, 6, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Amazon Web Services", "AWS Certified Developer", "PROF001" },
                    { "CERT002", "https://www.tensorflow.org/certificate", new DateTime(2023, 1, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "Google", "TensorFlow Developer Certificate", "PROF002" }
                });

            migrationBuilder.InsertData(
                table: "Milestones",
                columns: new[] { "MilestoneID", "Budget", "ProjectID", "Status" },
                values: new object[,]
                {
                    { "MILE001", 3000.0, "PROJ001", "InProgress" },
                    { "MILE002", 5000.0, "PROJ002", "Pending" }
                });

            migrationBuilder.InsertData(
                table: "SkillInProfiles",
                columns: new[] { "SkillInProfileID", "ProficiencyLevel", "ProfileID", "SkillID" },
                values: new object[,]
                {
                    { "SKILLPROF001", "Expert", "PROF001", "SKILL003" },
                    { "SKILLPROF002", "Advanced", "PROF002", "SKILL005" }
                });

            migrationBuilder.InsertData(
                table: "SkillRequirements",
                columns: new[] { "SkillRequirementID", "ProficiencyLevel", "ProjectID", "SkillID" },
                values: new object[,]
                {
                    { "SKILLREQ001", "Advanced", "PROJ001", "SKILL003" },
                    { "SKILLREQ002", "Expert", "PROJ002", "SKILL005" }
                });

            migrationBuilder.InsertData(
                table: "Submittions",
                columns: new[] { "SubmittionID", "Content", "FreelancerID", "MilestoneID", "Status" },
                values: new object[,]
                {
                    { "SUBMIT001", "Initial project proposal and wireframes", "FREE001", "MILE001", "Pending" },
                    { "SUBMIT002", "Preliminary data analysis report", "FREE003", "MILE002", "Pending" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Applications_FreelancerID",
                table: "Applications",
                column: "FreelancerID");

            migrationBuilder.CreateIndex(
                name: "IX_Applications_FreelancerID1",
                table: "Applications",
                column: "FreelancerID1");

            migrationBuilder.CreateIndex(
                name: "IX_Applications_ProjectID",
                table: "Applications",
                column: "ProjectID");

            migrationBuilder.CreateIndex(
                name: "IX_Certifications_ProfileID",
                table: "Certifications",
                column: "ProfileID");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_AccountID",
                table: "Clients",
                column: "AccountID");

            migrationBuilder.CreateIndex(
                name: "IX_ExpertiseProfiles_FreelancerID",
                table: "ExpertiseProfiles",
                column: "FreelancerID");

            migrationBuilder.CreateIndex(
                name: "IX_Freelancers_AccountID",
                table: "Freelancers",
                column: "AccountID");

            migrationBuilder.CreateIndex(
                name: "IX_Locations_ClientID",
                table: "Locations",
                column: "ClientID");

            migrationBuilder.CreateIndex(
                name: "IX_Milestones_ProjectID",
                table: "Milestones",
                column: "ProjectID");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ClientID",
                table: "Projects",
                column: "ClientID");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_ClientID1",
                table: "Projects",
                column: "ClientID1");

            migrationBuilder.CreateIndex(
                name: "IX_SkillInProfiles_ProfileID",
                table: "SkillInProfiles",
                column: "ProfileID");

            migrationBuilder.CreateIndex(
                name: "IX_SkillInProfiles_SkillID",
                table: "SkillInProfiles",
                column: "SkillID");

            migrationBuilder.CreateIndex(
                name: "IX_SkillRequirements_ProjectID",
                table: "SkillRequirements",
                column: "ProjectID");

            migrationBuilder.CreateIndex(
                name: "IX_SkillRequirements_SkillID",
                table: "SkillRequirements",
                column: "SkillID");

            migrationBuilder.CreateIndex(
                name: "IX_Submittions_FreelancerID",
                table: "Submittions",
                column: "FreelancerID");

            migrationBuilder.CreateIndex(
                name: "IX_Submittions_MilestoneID",
                table: "Submittions",
                column: "MilestoneID");

            migrationBuilder.CreateIndex(
                name: "IX_Subscriptions_ClientID",
                table: "Subscriptions",
                column: "ClientID");

            migrationBuilder.CreateIndex(
                name: "IX_Subscriptions_FreelancerID",
                table: "Subscriptions",
                column: "FreelancerID");

            migrationBuilder.CreateIndex(
                name: "IX_Subscriptions_PackageID",
                table: "Subscriptions",
                column: "PackageID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Applications");

            migrationBuilder.DropTable(
                name: "Certifications");

            migrationBuilder.DropTable(
                name: "Locations");

            migrationBuilder.DropTable(
                name: "SkillInProfiles");

            migrationBuilder.DropTable(
                name: "SkillRequirements");

            migrationBuilder.DropTable(
                name: "Submittions");

            migrationBuilder.DropTable(
                name: "Subscriptions");

            migrationBuilder.DropTable(
                name: "ExpertiseProfiles");

            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.DropTable(
                name: "Milestones");

            migrationBuilder.DropTable(
                name: "Packages");

            migrationBuilder.DropTable(
                name: "Freelancers");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Accounts");
        }
    }
}
