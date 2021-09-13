using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace DivibankWebApp.Models
{
    public class Loan
    {
        [Key]
        public long Id { get; set; }
        [Required]
        [Column(TypeName = "money")]
        public decimal Amount { get; set; }
        [Required]
        [Column(TypeName = "date")]
        public DateTime RequestDate { get; set; }

        [ForeignKey("Client")]
        public long ClientId { get; set; }
        public virtual Client Client { get; set; }


    }
}
