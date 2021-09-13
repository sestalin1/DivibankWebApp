using Microsoft.EntityFrameworkCore.Migrations;

namespace DivibankWebApp.Migrations
{
    public partial class LoanDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Birthday",
                table: "loans",
                newName: "RequestDate");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RequestDate",
                table: "loans",
                newName: "Birthday");
        }
    }
}
