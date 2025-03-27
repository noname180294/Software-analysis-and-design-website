using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessObjects
{
    public class Client
    {
        [Key]
        public string ClientID { get; set; } //client_id
        [Required]
        public string Name { get; set; }
        public string Field { get; set; }
        public string PhoneNumber { get; set; }
        public string WebsiteURL { get; set; }
        public string TaxID { get; set; }

        // Account
        [Required]
        public string AccountID { get; set; }

        [ForeignKey("AccountID")]
        public virtual Account Account { get; set; }

        // Location
        public virtual List<Location> LocationList { get; set; }
        
        // Subscription
        public virtual List<Subscription> SubscriptionList { get; set; }

        // Project
        public virtual List<Project> ProjectList { get; set; }
    }
}
