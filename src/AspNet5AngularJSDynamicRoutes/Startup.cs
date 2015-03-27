﻿using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Diagnostics;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Logging.Console;

namespace AspNet5AngularJSDynamicRoutes
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			Configuration = new Configuration()
				.AddJsonFile("config.json")
				.AddEnvironmentVariables();
		}

		public IConfiguration Configuration { get; set; }

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerfactory)
		{
			loggerfactory.AddConsole();

			if (string.Equals(env.EnvironmentName, "Development", StringComparison.OrdinalIgnoreCase))
			{
				app.UseBrowserLink();
				app.UseErrorPage(ErrorPageOptions.ShowAll);
			}
			else
			{
				app.UseErrorHandler("/Home/Error");
			}

			app.UseStaticFiles();

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller}/{action}/{id?}",
					defaults: new { controller = "Home", action = "Index" });
			});
		}
	}
}