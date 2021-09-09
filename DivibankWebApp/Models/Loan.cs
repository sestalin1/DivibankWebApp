using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DivibankWebApp.Models
{
    public class Loan
    {
        [Key]
        public long Id { get; set; }

        [Column(TypeName = "money")]
        public decimal Amount { get; set; }

        [Column(TypeName = "date")]
        public DateTime Birthday { get; set; }

        public Client Client { get; set; }


    }
}
