"use strict";(self.webpackChunkHRMS=self.webpackChunkHRMS||[]).push([[351],{9351:(I,f,a)=>{a.r(f),a.d(f,{default:()=>Q});var c=a(6814),v=a(4414),d=a(846),u=a(6223),p=a(8733),j=a(2135),Z=a(8034),_=a(1818),t=a(5879),m=a(9862),g=a(553),T=a(6996);let A=(()=>{class r{constructor(e,o){this.http=e,this.navService=o,this.jobsListUrl=`${g.N.url}job-descriptions-paginated`,this.showJobUrl=`${g.N.url}job-description/show`,this.updateJobUrl=`${g.N.url}job-description/update`,this.createJobUrl=`${g.N.url}job-description/create`,this.deleteJobUrl=`${g.N.url}job-description/delete`}getJobsList(e){let o=new m.LE;return e&&Object.keys(e).forEach(i=>{o=o.append(i,e[i])}),this.http.get(this.jobsListUrl,{params:o})}getJobById(e){let o=new m.LE;return e&&Object.keys(e).forEach(i=>{o=o.append(i,e[i])}),this.http.get(this.showJobUrl,{params:o})}addJob(e,o){let i=new m.LE;o&&Object.keys(o).forEach(n=>{i=i.append(n,o[n])});const s=new FormData;return Object.keys(e).forEach(n=>{Array.isArray(e[n])?e[n].forEach((b,h)=>{s.append(`${n}[${h}]`,b)}):s.append(n,e[n])}),this.http.post(this.createJobUrl,s,{params:i})}updateJob(e,o){let i=new m.LE;o&&Object.keys(o).forEach(n=>{i=i.append(n,o[n])});const s=new FormData;return Object.keys(e).forEach(n=>{Array.isArray(e[n])?e[n].forEach((b,h)=>{s.append(`${n}[${h}]`,b)}):s.append(n,e[n])}),this.http.post(this.updateJobUrl,s,{params:i})}deleteJob(e){const o=new FormData;return Object.keys(e).forEach(i=>{Array.isArray(e[i])?e[i].forEach((s,n)=>{o.append(`${i}[${n}]`,s)}):o.append(i,e[i])}),this.http.post(this.deleteJobUrl,o)}static#t=this.\u0275fac=function(o){return new(o||r)(t.LFG(m.eN),t.LFG(T.f))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var x=a(7700);const F=function(r,l){return[r,l]};function U(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",22)(1,"div",23)(2,"div",24)(3,"div",9)(4,"div",25)(5,"h5",26),t._uU(6),t.qZA()(),t.TgZ(7,"div",27)(8,"a",28),t.ALo(9,"localize"),t._UZ(10,"i",29),t._uU(11," \u062a\u0639\u062f\u064a\u0644"),t.qZA(),t.TgZ(12,"button",30),t.NdJ("click",function(){const s=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.deleteJob(s.id,s.position))}),t._UZ(13,"i",31),t._uU(14," \u062d\u0630\u0641 "),t.qZA()()()(),t.TgZ(15,"div",8)(16,"p"),t._uU(17),t.qZA()()()()}if(2&r){const e=l.$implicit;t.xp6(6),t.Oqu(e.position),t.xp6(2),t.Q6J("routerLink",t.WLB(5,F,t.lcZ(9,3,"/dashboard/jobs/add-job"),e.id)),t.xp6(9),t.Oqu(e.description)}}function y(r,l){1&r&&(t.TgZ(0,"div",6)(1,"h5",32),t._uU(2,"\u0644\u0627 \u062a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}let C=(()=>{class r{constructor(e,o,i,s){this.router=e,this.localize=o,this.jobService=i,this.dialog=s,this.searchQuery="",this.loading=!1,this.jobs=[]}ngOnInit(){this.getAllJobs()}getAllJobs(e=1){this.loading=!0,this.jobService.getJobsList({page:e}).subscribe({next:o=>{this.jobs=o.data,this.currentPage=o.current_page,this.totalPages=o.last_page,this.loading=!1},error:o=>{this.loading=!1,console.error("There was an error!",o)}})}deleteJob(e,o){const i={job_description_id:e};this.dialog.open(Z.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${o} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `}}).afterClosed().subscribe(n=>{n&&this.jobService.deleteJob(i).subscribe({next:b=>{this.getAllJobs()},error:b=>{console.error("There was an error deleting the admin!",b)}})})}getDescriptionArray(e){return Array.isArray(e)?e:"string"==typeof e?[e]:[]}navigateToAddJob(){const e=this.localize.translateRoute("/dashboard/jobs/add-job");this.router.navigate([e])}onPageChange(e){this.getAllJobs(e)}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(d.F0),t.Y36(p.An),t.Y36(A),t.Y36(x.uw))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-jobs-list"]],standalone:!0,features:[t.jDz],decls:31,vars:11,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-8"],[1,"row","list-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-2","addNew","mb-2"],[1,"btn","w-100","py-3","rounded-4",3,"click"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-7","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3",3,"ngModel","ngModelChange"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"row","g-3"],["class","col-lg-6",4,"ngFor","ngForOf"],["class","col-12",4,"ngIf"],[3,"currentPage","totalPages","pageChange"],[1,"col-lg-6"],[1,"card"],[1,"card-body","border-b"],[1,"col-8"],[1,"mb-0"],[1,"col-4","action","text-end"],[1,"btn","edit","mx-2",3,"routerLink"],[1,"fa-regular","fa-pen-to-square","me-2"],[1,"btn","delete","bg-danger",3,"click"],[1,"fa-regular","fa-trash-can"],[1,"fs-2","text-center"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0648\u0638\u0627\u0626\u0641"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA()(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t.NdJ("click",function(){return i.navigateToAddJob()}),t._UZ(16,"i",12),t._uU(17," \u0625\u0636\u0627\u0641\u0629 \u0645\u0633\u0645\u064a \u0648\u0638\u064a\u0641\u064a "),t.qZA()(),t.TgZ(18,"div",13)(19,"input",14),t.NdJ("ngModelChange",function(n){return i.searchQuery=n}),t.qZA()(),t.TgZ(20,"div",15)(21,"button",16),t._UZ(22,"i",17),t._uU(23," \u062a\u0635\u0646\u064a\u0641 "),t.qZA()()()(),t.TgZ(24,"div",8)(25,"div",18),t.YNc(26,U,18,8,"div",19),t.ALo(27,"filter"),t.YNc(28,y,3,0,"div",20),t.ALo(29,"filter"),t.qZA()(),t.TgZ(30,"pagination",21),t.NdJ("pageChange",function(n){return i.onPageChange(n)}),t.qZA()()()()()),2&o&&(t.xp6(19),t.Q6J("ngModel",i.searchQuery),t.xp6(7),t.Q6J("ngForOf",t.xi3(27,5,i.jobs,i.searchQuery)),t.xp6(2),t.Q6J("ngIf",0===t.xi3(29,8,i.jobs,i.searchQuery).length&&!i.loading),t.xp6(2),t.Q6J("currentPage",i.currentPage)("totalPages",i.totalPages))},dependencies:[c.ez,c.sg,c.O5,v.L,j.u,p.fQ,p.lO,d.Bz,d.rH,u.u5,u.Fj,u.JJ,u.On,_.Q]})}return r})();var L=a(3143);function w(r,l){if(1&r&&(t.TgZ(0,"option",28),t._uU(1),t.qZA()),2&r){const e=l.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function N(r,l){if(1&r&&(t.ynx(0),t.TgZ(1,"div",16)(2,"label",25),t._uU(3,"\u0627\u0644\u0642\u0633\u0645"),t.qZA(),t.TgZ(4,"select",26),t.YNc(5,w,2,2,"option",27),t.qZA()(),t.BQk()),2&r){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.departments)}}function q(r,l){if(1&r&&(t.ynx(0),t.TgZ(1,"div",20)(2,"button",29),t._UZ(3,"i",30),t._uU(4,"\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0648\u0638\u064a\u0641\u0629 "),t.qZA(),t.TgZ(5,"a",31),t.ALo(6,"localize"),t._uU(7,"\u0627\u0644\u063a\u0627\u0621"),t.qZA()(),t.BQk()),2&r){const e=t.oxw();t.xp6(2),t.Q6J("disabled",!e.jobForm.valid),t.xp6(3),t.Q6J("routerLink",t.lcZ(6,2,"/dashboard/jobs"))}}function D(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"div",20)(1,"button",32),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.updateJob())}),t._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0648\u0638\u0641 "),t.qZA(),t.TgZ(3,"a",31),t.ALo(4,"localize"),t._uU(5,"\u0627\u0644\u063a\u0627\u0621"),t.qZA()()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("disabled",!e.jobForm.valid),t.xp6(2),t.Q6J("routerLink",t.lcZ(4,2,"/dashboard/jobs"))}}const E=function(r){return[r]};let J=(()=>{class r{constructor(e,o,i,s,n){this.activatedRoute=e,this.jobService=o,this.localize=i,this.router=s,this.desService=n,this.isEditMode=!1,this.jobId="",this.loading=!1,this.jobDetails={},this.departments=[],this.jobForm=new u.cw({title:new u.NI("",u.kI.required),description:new u.NI("",u.kI.required),department_id:new u.NI("",u.kI.required)})}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const o=e.get("id");o?(this.isEditMode=!0,this.jobId=o,this.getJobDescription(o),this.jobForm.get("department_id")?.clearValidators()):(this.loadDepartments(),this.jobForm.get("department_id")?.setValidators(u.kI.required)),this.jobForm.get("department_id")?.updateValueAndValidity()})}getJobDescription(e){this.loading=!0,this.jobService.getJobById({job_description_id:e}).subscribe({next:i=>{this.jobDetails=i.data,this.setFormVluesEditMode(this.jobDetails),this.loading=!1},error:i=>{this.loading=!1,console.error("There was an error!",i)}})}navigateToJobsList(){const e=this.localize.translateRoute("/dashboard/jobs");this.router.navigate([e])}setFormVluesEditMode(e){this.jobForm.patchValue({title:e.position,description:e.description})}loadDepartments(){this.desService.getAllDepartments().subscribe({next:e=>{this.departments=e.data},error:e=>{console.error("Failed to load departments:",e)}})}updateJob(){this.jobForm.valid&&this.jobService.updateJob({job_description_id:this.jobDetails.id,position:this.jobForm.controls.title.value,description:this.jobForm.controls.description.value}).subscribe({next:o=>{this.navigateToJobsList()},error:o=>{console.error("Failed to add employee:",o)}})}onSubmit(){this.jobForm.valid&&(console.log(this.jobForm.value),this.jobService.addJob({position:this.jobForm.controls.title.value,description:this.jobForm.controls.description.value,department_id:this.jobForm.controls.department_id.value}).subscribe({next:o=>{this.navigateToJobsList()},error:o=>{console.error("Failed to add employee:",o)}}))}static#t=this.\u0275fac=function(o){return new(o||r)(t.Y36(d.gz),t.Y36(A),t.Y36(p.An),t.Y36(d.F0),t.Y36(L._))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-add-job"]],standalone:!0,features:[t.jDz],decls:37,vars:9,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-9"],[1,"col-sm-3","back","text-sm-end"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"mb-4"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","title",1,"form-label"],["type","text","id","title","name","title","formControlName","title",1,"form-control","form-control-lg"],[4,"ngIf"],[1,"form-group","col-12","mb-3"],["for","description",1,"form-label"],["type","text","formControlName","description","name","description","id","description"],[4,"ngIf","ngIfElse"],["editButton",""],["for","department_id",1,"form-label"],["id","department_id","name","department_id","formControlName","department_id",1,"form-control","form-control-lg"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"btn","px-5","py-2","me-2","mb-sm-0","mb-2",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"btn","mb-sm-0","mb-2",3,"routerLink"],["type","button",1,"btn","px-5","py-2","me-2","mb-sm-0","mb-2",3,"disabled","click"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0627\u0644\u0648\u0638\u0627\u0626\u0641"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"app-breadcrumb"),t.qZA(),t.TgZ(9,"div",5)(10,"a",6),t.ALo(11,"localize"),t._uU(12,"\u0631\u062c\u0648\u0639 "),t._UZ(13,"i",7),t.qZA()()(),t.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"div",12)(19,"h4",13),t._uU(20,"\u0627\u0636\u0627\u0641\u0629 \u0648\u0638\u064a\u0641\u0629"),t.qZA(),t.TgZ(21,"form",14),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(22,"div",15)(23,"div",16)(24,"label",17),t._uU(25,"\u0627\u0644\u0645\u0633\u0645\u064a \u0627\u0644\u0648\u0638\u064a\u0641\u064a"),t.qZA(),t._UZ(26,"input",18),t.qZA(),t.YNc(27,N,6,1,"ng-container",19),t.TgZ(28,"div",20)(29,"label",21),t._uU(30,"\u0648\u0635\u0641 \u0627\u0644\u0648\u0638\u064a\u0641\u0629"),t.qZA(),t.TgZ(31,"ul")(32,"li"),t._UZ(33,"input",22),t.qZA()()(),t.YNc(34,q,8,4,"ng-container",23),t.YNc(35,D,6,4,"ng-template",null,24,t.W1O),t.qZA()()()()()()()()),2&o){const s=t.MAs(36);t.xp6(10),t.Q6J("routerLink",t.VKq(7,E,t.lcZ(11,5,"/dashboard/jobs"))),t.xp6(11),t.Q6J("formGroup",i.jobForm),t.xp6(6),t.Q6J("ngIf",!i.isEditMode),t.xp6(7),t.Q6J("ngIf",!i.isEditMode)("ngIfElse",s)}},dependencies:[c.ez,c.sg,c.O5,p.fQ,p.lO,d.Bz,d.rH,u.UX,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.sg,u.u,u.u5,v.L]})}return r})();const Q=[{path:"",component:(()=>{class r{static#t=this.\u0275fac=function(o){return new(o||r)};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-main-job"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(o,i){1&o&&t._UZ(0,"router-outlet")},dependencies:[c.ez,d.lC]})}return r})(),children:[{path:"",component:C,data:{breadcrumbs:[{label:"\u0627\u0644\u0648\u0638\u0627\u0626\u0641",url:"/dashboard/jobs/add-job"}]}},{path:":slug",component:J,data:{breadcrumbs:[{label:" \u0625\u0636\u0627\u0641\u0629 \u0648\u0638\u064a\u0641\u0629",url:"/dashboard/jobs/add-job"}]}},{path:"add-job/:id",component:J,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0648\u0638\u064a\u0641\u0629"}]}}]}]}}]);