-- Certification table
CREATE TABLE Certification (
    CertID VARCHAR(50) PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Issuer VARCHAR(100),
    IssueDate DATE,
    CertURL VARCHAR(255),
    ProfileID VARCHAR(50),
    FOREIGN KEY (ProfileID) REFERENCES ExpertiseProfile(ProfileID)
);

-- ExpertiseProfile table
CREATE TABLE ExpertiseProfile (
    ProfileID VARCHAR(50) PRIMARY KEY,
    Field VARCHAR(100),
    Title VARCHAR(100),
    BriefDescription TEXT,
    ExperienceLevel VARCHAR(50),
    Availability VARCHAR(50),
    PortfolioURL VARCHAR(255),
    UserID VARCHAR(50),
    FOREIGN KEY (UserID) REFERENCES Freelancer(UserID)
);

-- Skill table
CREATE TABLE Skill (
    SkillID VARCHAR(50) PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    ProficiencyLevel VARCHAR(50),
    Category VARCHAR(100),
    ProfileID VARCHAR(50),
    FOREIGN KEY (ProfileID) REFERENCES ExpertiseProfile(ProfileID)
);

-- Package table
CREATE TABLE Package (
    PackageID VARCHAR(50) PRIMARY KEY,
    Type VARCHAR(50),
    Name VARCHAR(100),
    Price DECIMAL(10,2),
    Period INT
);

-- Location table
CREATE TABLE Location (
    LocationID VARCHAR(50) PRIMARY KEY,
    Address TEXT,
    ClientID VARCHAR(50),
    FOREIGN KEY (ClientID) REFERENCES Client(UserID)
);

-- Client table
CREATE TABLE Client (
    UserID VARCHAR(50) PRIMARY KEY,
    Name VARCHAR(100),
    Field VARCHAR(100),
    PhoneNumber VARCHAR(20),
    Email VARCHAR(100),
    WebsiteURL VARCHAR(255),
    TaxID VARCHAR(50)
);

-- Freelancer table
CREATE TABLE Freelancer (
    UserID VARCHAR(50) PRIMARY KEY,
    CIN VARCHAR(50),
    LastName VARCHAR(50),
    MiddleName VARCHAR(50),
    FirstName VARCHAR(50),
    DOB DATE,
    Gender VARCHAR(20),
    Email VARCHAR(100),
    PhoneNumber VARCHAR(20),
    Address TEXT
);

-- Subscription table
CREATE TABLE Subscription (
    SubscriptionID VARCHAR(50) PRIMARY KEY,
    StartDate DATE,
    EndDate DATE,
    PackageID VARCHAR(50),
    UserID VARCHAR(50),
    FOREIGN KEY (PackageID) REFERENCES Package(PackageID),
    FOREIGN KEY (UserID) REFERENCES Client(UserID)
);

-- Project table
CREATE TABLE Project (
    ProjectID VARCHAR(50) PRIMARY KEY,
    Title VARCHAR(100),
    Description TEXT,
    BudgetMin DECIMAL(10,2),
    BudgetMax DECIMAL(10,2),
    Status VARCHAR(50),
    ClientID VARCHAR(50),
    FOREIGN KEY (ClientID) REFERENCES Client(UserID)
);

-- Position table
CREATE TABLE Position (
    PositionID VARCHAR(50) PRIMARY KEY,
    Title VARCHAR(100),
    Field VARCHAR(100),
    ExperienceLevel VARCHAR(50),
    Description TEXT,
    ProjectID VARCHAR(50),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

-- Application table
CREATE TABLE Application (
    ApplicationID VARCHAR(50) PRIMARY KEY,
    Proposal TEXT,
    Status VARCHAR(50),
    FreelancerID VARCHAR(50),
    ProjectID VARCHAR(50),
    FOREIGN KEY (FreelancerID) REFERENCES Freelancer(UserID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

-- Review table
CREATE TABLE Review (
    ReviewID VARCHAR(50) PRIMARY KEY,
    Rate DECIMAL(3,2),
    Comment TEXT,
    ReviewerID VARCHAR(50),
    ProjectID VARCHAR(50),
    FOREIGN KEY (ReviewerID) REFERENCES Client(UserID),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

-- Milestone table
CREATE TABLE Milestone (
    MilestoneID VARCHAR(50) PRIMARY KEY,
    Title VARCHAR(100),
    Description TEXT,
    StartDate DATE,
    EndDate DATE,
    Status VARCHAR(50),
    ProjectID VARCHAR(50),
    FOREIGN KEY (ProjectID) REFERENCES Project(ProjectID)
);

-- MilestoneCheck table
CREATE TABLE MilestoneCheck (
    MilestoneID VARCHAR(50),
    FreelancerID VARCHAR(50),
    AssignedAt DATETIME,
    CompletedAt DATETIME,
    Status VARCHAR(50),
    PRIMARY KEY (MilestoneID, FreelancerID),
    FOREIGN KEY (MilestoneID) REFERENCES Milestone(MilestoneID),
    FOREIGN KEY (FreelancerID) REFERENCES Freelancer(UserID)
);

-- Payment table
CREATE TABLE Payment (
    PaymentID VARCHAR(50) PRIMARY KEY,
    Method VARCHAR(50),
    Amount DECIMAL(10,2),
    ClientID VARCHAR(50),
    FreelancerID VARCHAR(50),
    MilestoneID VARCHAR(50),
    FOREIGN KEY (ClientID) REFERENCES Client(UserID),
    FOREIGN KEY (FreelancerID) REFERENCES Freelancer(UserID),
    FOREIGN KEY (MilestoneID) REFERENCES Milestone(MilestoneID)
);