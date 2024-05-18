using System.Globalization;
using Server.Types;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// 1) define a unique string
string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// 2) define allowed domains, in this case "http://example.com" and "*" = all
//    domains, for testing purposes only.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
      builder =>
      {
          builder.WithOrigins(
            "http://example.com", "*");
      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseCors(MyAllowSpecificOrigins);

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapGet(
    "/events",
    () => new Event[]
        {
            new Event {
                Name = "Craft Group",
                Location = "London",
                Date = "15/04/2024"
            },
            new Event {
                Name = "Workshop",
                Location = "London",
                Date = "25/04/2024"
            }
        });

app.Run();
