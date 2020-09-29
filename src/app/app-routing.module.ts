import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogEntryComponent } from "./blog-entry/blog-entry.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthenticationGuard } from "./guards/authentication.guard";

const routes: Routes = [
  { path: "", redirectTo: "/blog", pathMatch: "full" },
  { path: "blog", component: BlogComponent },
  { path: "blog-entry/:id", component: BlogEntryComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
