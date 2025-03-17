using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IT_Platform_ClassLib.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedEntitiesVer1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Freelancers",
                keyColumn: "UserID",
                keyValue: 1,
                columns: new[] { "Address", "Gender", "MiddleName", "PhoneNumber" },
                values: new object[] { "Ho CHi Minh", "Male", "Phuoc Minh", "0123456789" });

            migrationBuilder.UpdateData(
                table: "Freelancers",
                keyColumn: "UserID",
                keyValue: 2,
                columns: new[] { "Address", "Gender", "MiddleName", "PhoneNumber" },
                values: new object[] { "Dong Nai", "Male", "Huynh Thai", "0123456789" });

            migrationBuilder.UpdateData(
                table: "Freelancers",
                keyColumn: "UserID",
                keyValue: 3,
                columns: new[] { "Address", "Gender", "MiddleName", "PhoneNumber" },
                values: new object[] { "Dong Nai", "Female", "Ngoc Tram", "0123456789" });

            migrationBuilder.UpdateData(
                table: "Freelancers",
                keyColumn: "UserID",
                keyValue: 4,
                columns: new[] { "Address", "Gender", "PhoneNumber" },
                values: new object[] { "Tra Vinh", "Male", "0123456789" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Freelancers",
                keyColumn: "UserID",
                keyValue: 1,
                columns: new[] { "Address", "Gender", "MiddleName", "PhoneNumber" },
                values: new object[] { "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Freelancers",
                keyColumn: "UserID",
                keyValue: 2,
                columns: new[] { "Address", "Gender", "MiddleName", "PhoneNumber" },
                values: new object[] { "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Freelancers",
                keyColumn: "UserID",
                keyValue: 3,
                columns: new[] { "Address", "Gender", "MiddleName", "PhoneNumber" },
                values: new object[] { "", "", "", "" });

            migrationBuilder.UpdateData(
                table: "Freelancers",
                keyColumn: "UserID",
                keyValue: 4,
                columns: new[] { "Address", "Gender", "PhoneNumber" },
                values: new object[] { "", "", "" });
        }
    }
}
