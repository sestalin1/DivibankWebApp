using Microsoft.EntityFrameworkCore;
using System;


namespace DivibankWebApp.Models
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Client>().HasData(
                new Client { Id = 1, Name = "Jhon Doe", Birthday = new DateTime() },
                new Client { Id = 2, Name = "Louisa Sousa", Birthday = new DateTime() },
                new Client { Id = 3, Name = "Peter Larson", Birthday = new DateTime() }
                );

            modelBuilder.Entity<Loan>().HasData(
                new Loan { Id=1, Amount = 3500, ClientId = 1, RequestDate = new DateTime() },
                new Loan { Id=2, Amount = 5800, ClientId = 2, RequestDate = new DateTime() },
                new Loan { Id=3, Amount = 4900, ClientId = 3, RequestDate = new DateTime() }

                );

        }
    }
    
}
