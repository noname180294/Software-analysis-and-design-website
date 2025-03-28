using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessObjects
{
    public class Freelancer
    {
        [Key]
        public string FreelancerID { get; set; } //freelancer_id
        public string CIN { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string FirstName { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; } // Female / Male
        public string PhoneNumber { get; set; }
        public string Address { get; set; }

        // Account
        [Required]
        public string AccountID { get; set; }

        [ForeignKey("AccountID")]
        public virtual Account Account { get; set; }

        // Subscription
        public virtual List<Subscription> SubscriptionList { get; set; }

        // Expertise Profile
        public virtual List<ExpertiseProfile> ExpertiseProfileList { get; set; }

        // Application
        public virtual List<Application> ApplicationList { get; set; }

        // Submittion
        public virtual List<Submittion> SubmittionList { get; set; }
    }
}
