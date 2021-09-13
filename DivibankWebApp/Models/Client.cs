using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace DivibankWebApp.Models
{
    [JsonObject(IsReference = true)]
    public class Client
    {
        [Key]
        public long Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "date")]
        public DateTime Birthday { get; set; }

        [JsonIgnore]
        public virtual ICollection<Loan> Loans { get; set; }

        
    }
}
