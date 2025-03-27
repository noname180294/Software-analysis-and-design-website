using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessObjects
{
    public class Application
    {
        [Key]
        public string ApplicationID { get; set; } //app_id
        public string CV { get; set; }
        [Required]
        public string Status { get; set; } //Pending, Reviewed, Accepted, Rejected

        // Freelancer
        [Required]
        public string FreelancerID { get; set; }
        [ForeignKey("FreelancerID")]
        public virtual Freelancer Freelancer { get; set; }

        // Project
        [Required]
        public string ProjectID { get; set; }
        [ForeignKey("ProjectID")]
        public virtual Project Project { get; set; }
    }
}
