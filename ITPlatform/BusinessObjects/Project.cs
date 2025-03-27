using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessObjects
{
    public class Project
    {
        [Key]
        public string ProjectID { get; set; } //proj_id
        public string Title { get; set; }
        public string Description { get; set; }
        public double BudgetMin { get; set; }
        public double BudgetMax { get; set; }
        public string Status { get; set; } //Done only when all milestone done

        // Client
        [Required]
        public string ClientID { get; set; }
        [ForeignKey("ClientID")]
        public virtual Client Client { get; set; }

        // Milestone
        public virtual List<Milestone> MilestoneList { get; set; }

        // Application
        public virtual List<Application> ApplicationList { get; set; }
        
        // SkillRequirement
        public virtual List<SkillRequirement> SkillRequirementList { get; set; }
    }
}
