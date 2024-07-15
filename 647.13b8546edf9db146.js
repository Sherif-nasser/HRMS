"use strict";(self.webpackChunkHRMS=self.webpackChunkHRMS||[]).push([[647],{2135:(k,h,c)=>{c.d(h,{u:()=>A});var t=c(5879);let A=(()=>{class Z{transform(n,m){return n?m?(m=m.toLowerCase(),n.filter(u=>{const e=u.full_name?u.full_name.toLowerCase():"",C=u.first_name?u.first_name.toLowerCase():"",v=u.employee&&u.employee.first_name?u.employee.first_name.toLowerCase():"",i=u.employee&&u.employee.last_name?u.employee.last_name.toLowerCase():"",g=u.last_name?u.last_name.toLowerCase():"",r=u.title?u.title.toLowerCase():"",l=u.name?u.name.toLowerCase():"",a=u.user&&u.user.name?u.user.name.toLowerCase():"",_=u.head?u.head.toLowerCase():"",f=u.description?u.description.toLowerCase():"";return e.includes(m)||g.includes(m)||l.includes(m)||a.includes(m)||_.includes(m)||f.includes(m)||C.includes(m)||v.includes(m)||i.includes(m)||r.includes(m)})):n:[]}static#e=this.\u0275fac=function(m){return new(m||Z)};static#t=this.\u0275pipe=t.Yjl({name:"filter",type:Z,pure:!0,standalone:!0})}return Z})()},7647:(k,h,c)=>{c.r(h),c.d(h,{default:()=>U});var t=c(6814),A=c(1818),Z=c(2135),T=c(8733),n=c(846),m=c(4414),u=c(6223),e=c(5879);const C=function(s,b){return[s,b]};function v(s,b){if(1&s){const o=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td")(4,"span"),e._uU(5),e.qZA()(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td",34)(9,"span"),e._uU(10),e.qZA()(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td",35),e._uU(14),e.qZA(),e.TgZ(15,"td",36)(16,"a",37),e.NdJ("click",function(){const x=e.CHM(o).$implicit,P=e.oxw();return e.KtG(P.viewTask(x))}),e._UZ(17,"i",38),e._uU(18," \u0639\u0631\u0636"),e.qZA(),e.TgZ(19,"a",39),e.ALo(20,"localize"),e._UZ(21,"i",40),e._uU(22," \u062a\u0639\u062f\u064a\u0644"),e.qZA()()()}if(2&s){const o=b.$implicit,d=b.index;e.xp6(2),e.Oqu(d),e.xp6(3),e.Oqu(o.title),e.xp6(2),e.Oqu(o.employee_name),e.xp6(2),e.Tol("\u0645\u0633\u062a\u0645\u0631"==o.status?"taskActive":"\u0645\u0639\u0644\u0642"==o.status?"taskPause":"taskStop"),e.xp6(1),e.Oqu(o.status),e.xp6(2),e.Oqu(o.service),e.xp6(2),e.Oqu(o.start_date),e.xp6(5),e.Q6J("routerLink",e.WLB(11,C,e.lcZ(20,9,"/dashboard/tasks/add-task"),o.id))}}function i(s,b){1&s&&(e.TgZ(0,"tr")(1,"td",41),e._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),e.qZA()())}let g=(()=>{class s{constructor(o,d){this.router=o,this.localize=d,this.tasks=[],this.searchQuery="",this.loading=!0}onPageChange(o){}navigateToAddTask(){const o=this.localize.translateRoute("/dashboard/tasks/add-task");this.router.navigate([o])}viewTask(o){if(o){const d=this.localize.translateRoute("/dashboard/tasks/view-task");this.router.navigate([d,o.id])}else console.error("No employee to view")}static#e=this.\u0275fac=function(d){return new(d||s)(e.Y36(n.F0),e.Y36(T.An))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-tasks-list"]],standalone:!0,features:[e.jDz],decls:68,vars:11,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","exportfile","text-sm-end"],[1,"btn","px-5"],[1,"fa-solid","fa-file-arrow-down","me-2"],[1,"row","list-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[1,"row","align-items-center"],[1,"col-xl-3","col-lg-2","addNew","mb-2"],[1,"btn","w-100",3,"click"],[1,"fa-solid","fa-circle-plus","me-2"],[1,"col-xl-7","col-lg-7","col-sm-8","searchINP","mb-2"],["type","search","placeholder","\u0627\u0644\u0628\u062d\u062b",1,"form-control","form-control-lg","rounded-3",3,"ngModel","ngModelChange"],[1,"col-xl-2","col-lg-3","col-sm-4","text-center","filterBTN","mb-2"],[1,"btn","px-sm-4","px-5"],[1,"fa-solid","fa-sliders"],[1,"card-body","p-0"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row"],[1,"col-md-4"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-4","text-center"],[1,"col-md-4","text-end"],["name","","id","",1,"px-4","py-3"],["value","10"],[1,"btn"],[1,"text-center"],[1,"fw-bold"],[1,"action","text-center"],[1,"btn","get",3,"click"],[1,"fa-solid","fa-eye"],[1,"btn","edit",3,"routerLink"],[1,"fa-solid","fa-pen-to-square"],["colspan","6",1,"text-center"]],template:function(d,p){1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"\u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"app-breadcrumb"),e.qZA(),e.TgZ(9,"div",5)(10,"button",6),e._UZ(11,"i",7),e._uU(12," \u062a\u0635\u062f\u064a\u0631 \u0643\u0645\u0644\u0641 "),e.qZA(),e.TgZ(13,"p")(14,"small"),e._uU(15,"\u0633\u0648\u0641 \u064a\u062a\u0645 \u062a\u0635\u062f\u064a\u0631 \u0627\u0644\u0645\u0644\u0641 Exel (.xlsx) "),e.qZA()()()(),e.TgZ(16,"div",8)(17,"div",9)(18,"div",10)(19,"div",11)(20,"div",12)(21,"div",13)(22,"a",14),e.NdJ("click",function(){return p.navigateToAddTask()}),e._UZ(23,"i",15),e._uU(24," \u0625\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629 \u062c\u062f\u064a\u062f "),e.qZA()(),e.TgZ(25,"div",16)(26,"input",17),e.NdJ("ngModelChange",function(P){return p.searchQuery=P}),e.qZA()(),e.TgZ(27,"div",18)(28,"button",19),e._UZ(29,"i",20),e._uU(30," \u062a\u0635\u0646\u064a\u0641 "),e.qZA()()()(),e.TgZ(31,"div",21)(32,"div",22)(33,"table",23)(34,"thead")(35,"tr")(36,"th"),e._uU(37,"\u062a\u0631\u0642\u064a\u0645"),e.qZA(),e.TgZ(38,"th"),e._uU(39,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0647\u0645\u0629"),e.qZA(),e.TgZ(40,"th"),e._uU(41,"\u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0645\u0633\u0624\u0644"),e.qZA(),e.TgZ(42,"th"),e._uU(43,"\u062d\u0627\u0644\u0647 \u0627\u0644\u0645\u0647\u0645\u0629"),e.qZA(),e.TgZ(44,"th"),e._uU(45,"\u0646\u0648\u0639 \u0627\u0644\u062e\u062f\u0645\u0629"),e.qZA(),e.TgZ(46,"th"),e._uU(47,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0628\u062f\u0621"),e.qZA(),e._UZ(48,"th"),e.qZA()(),e.TgZ(49,"tbody"),e.YNc(50,v,23,14,"tr",24),e.ALo(51,"filter"),e.YNc(52,i,3,0,"tr",25),e.ALo(53,"filter"),e.qZA()()()(),e.TgZ(54,"div",11)(55,"div",26)(56,"div",27)(57,"pagination",28),e.NdJ("pageChange",function(P){return p.onPageChange(P)}),e.qZA()(),e.TgZ(58,"div",29),e._uU(59,"\u0639\u0631\u0636 1 \u0625\u0644\u0649 10 \u0645\u0646 \u0623\u0635\u0644 60 \u0633\u062c\u0644\u0627\u064b"),e.qZA(),e.TgZ(60,"div",30)(61,"select",31)(62,"option",32),e._uU(63,"10"),e.qZA(),e.TgZ(64,"option",32),e._uU(65,"10"),e.qZA()(),e.TgZ(66,"button",33),e._uU(67,"\u0639\u0631\u0636"),e.qZA()()()()()()()()),2&d&&(e.xp6(26),e.Q6J("ngModel",p.searchQuery),e.xp6(24),e.Q6J("ngForOf",e.xi3(51,5,p.tasks,p.searchQuery)),e.xp6(2),e.Q6J("ngIf",0===e.xi3(53,8,p.tasks,p.searchQuery).length&&!p.loading),e.xp6(5),e.Q6J("currentPage",p.currentPage)("totalPages",p.totalPages))},dependencies:[t.ez,t.sg,t.O5,A.Q,Z.u,T.fQ,T.lO,n.Bz,n.rH,m.L,u.u5,u.YN,u.Kr,u.Fj,u.JJ,u.On]})}return s})();function r(s,b){if(1&s&&(e.ynx(0),e.TgZ(1,"div",59)(2,"button",60),e._UZ(3,"i",61),e._uU(4," \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0647\u0645\u0629 "),e.qZA()(),e.BQk()),2&s){const o=e.oxw();e.xp6(2),e.Q6J("disabled",!o.taskForm.valid)}}function l(s,b){if(1&s){const o=e.EpF();e.TgZ(0,"div",59)(1,"button",62),e.NdJ("click",function(){e.CHM(o);const p=e.oxw();return e.KtG(p.updateTask())}),e._uU(2," \u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629 "),e.qZA()()}if(2&s){const o=e.oxw();e.xp6(1),e.Q6J("disabled",!o.taskForm.valid)}}const a=function(s){return[s]};let _=(()=>{class s{constructor(o){this.activatedRoute=o,this.isEditMode=!1,this.socialId="",this.taskForm=new u.cw({title:new u.NI("",u.kI.required),service:new u.NI("",u.kI.required),employee_id:new u.NI("",u.kI.required),client_id:new u.NI("",u.kI.required),status:new u.NI("",u.kI.required),custody_status:new u.NI("",u.kI.required),custodyDescription:new u.NI("",u.kI.required),statement:new u.NI("",u.kI.required),instructions:new u.NI("",u.kI.required),visitDetails:new u.NI("",u.kI.required),cashed:new u.NI("",u.kI.required),remainder:new u.NI("",u.kI.required),achievement:new u.NI("",u.kI.required),notes:new u.NI("",u.kI.required),startDate:new u.NI("",u.kI.required),deadline:new u.NI("",u.kI.required)})}ngOnInit(){this.activatedRoute.paramMap.subscribe(o=>{const d=o.get("id");d&&(this.isEditMode=!0,this.socialId=d)})}updateTask(){}onSubmit(){}static#e=this.\u0275fac=function(d){return new(d||s)(e.Y36(n.gz))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-add-task"]],standalone:!0,features:[e.jDz],decls:116,vars:8,consts:[[1,"container-fluid","py-5","px-1"],[1,"row","title-top","mb-3"],[1,"col-12","mb-3"],[1,"fw-bold","fs-2"],[1,"col-sm-6"],[1,"col-sm-6","text-end","back"],[1,"text-decoration-none",3,"routerLink"],[1,"fa-solid","fa-chevron-left","ms-2"],[1,"row","add-row"],[1,"col-12"],[1,"card","rounded-4"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col-md-6","mb-3"],["for","title",1,"form-label"],["type","text","name","title","formControlName","title","id","title",1,"form-control","form-control-lg"],["for","service",1,"form-label"],["type","text","name","service","id","service","formControlName","service",1,"form-control","form-control-lg"],["for","employee",1,"form-label"],["name","employee_id","formControlName","employee_id","id","employee_id",1,"form-select","form-select-lg"],["value","id"],["for","client",1,"form-label"],["name","client_id","formControlName","client_id","id","client_id",1,"form-select","form-select-lg"],[1,"form-label"],["formControlName","status","value","\u0645\u0633\u062a\u0645\u0631","type","radio","name","status","id","active","hidden",""],["for","active",1,"me-2"],["formControlName","status","value","\u0645\u0639\u0644\u0642","type","radio","name","status","id","paused","hidden",""],["for","paused",1,"me-2"],["formControlName","status","value","\u0645\u063a\u0644\u0642","type","radio","name","status","id","stop","hidden",""],["for","stop",1,"me-2"],["type","radio","formControlName","custody_status","value","recieved","name","custody_status","id","recieved","hidden",""],["for","recieved",1,"me-2"],["type","radio","formControlName","custody_status","value","notRecieved","name","custody_status","id","notRecieved","hidden",""],["for","notRecieved",1,"me-2"],["for","custodyDescription",1,"form-label"],["formControlName","custodyDescription","name","custodyDescription","id","custodyDescription","cols","30","rows","5",1,"form-control"],["for","statement",1,"form-label"],["formControlName","statement","name","statement","id","statement","cols","30","rows","5",1,"form-control"],["for","instructions",1,"form-label"],["formControlName","instructions","name","instructions","id","instructions","cols","30","rows","5",1,"form-control"],["for","visitDetails",1,"form-label"],["formControlName","visitDetails","name","visitDetails","id","visitDetails","cols","30","rows","5",1,"form-control"],["for","cashed",1,"form-label"],["formControlName","cashed","type","text","name","cashed","id","cashed",1,"form-control","form-control-lg"],["for","remainder",1,"form-label"],["formControlName","remainder","type","text","name","remainder","id","remainder",1,"form-control","form-control-lg"],["for","achievement",1,"form-label"],["formControlName","achievement","name","achievement","id","achievement","cols","30","rows","5",1,"form-control"],["for","notes",1,"form-label"],["formControlName","notes","name","notes","id","notes","cols","30","rows","5",1,"form-control"],[1,"input-group","input-group-lg"],["type","date","formControlName","startDate","name","startDate","id","startDate",1,"form-control","form-control-lg"],["for","startDate",1,"input-group-text"],[1,"fa-regular","fa-calendar"],["type","date","formControlName","deadline","name","deadline","id","deadline",1,"form-control","form-control-lg"],["for","deadline",1,"input-group-text"],[4,"ngIf","ngIfElse"],["editButton",""],[1,"form-group","col-12","mb-3"],["type","submit",1,"btn","px-5","py-3",3,"disabled"],[1,"fa-solid","fa-circle-plus","me-2"],["type","button",1,"btn","px-5","py-3",3,"disabled","click"]],template:function(d,p){if(1&d&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4,"\u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u0644\u0648\u062d\u0629 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a"),e.qZA()(),e.TgZ(7,"div",4),e._UZ(8,"app-breadcrumb"),e.qZA(),e.TgZ(9,"div",5)(10,"a",6),e.ALo(11,"localize"),e._uU(12,"\u0631\u062c\u0648\u0639 "),e._UZ(13,"i",7),e.qZA()()(),e.TgZ(14,"div",8)(15,"div",9)(16,"div",10)(17,"div",11)(18,"h5"),e._uU(19,"\u0623\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629"),e.qZA(),e.TgZ(20,"form",12),e.NdJ("ngSubmit",function(){return p.onSubmit()}),e.TgZ(21,"div",13)(22,"div",14)(23,"label",15),e._uU(24,"\u0627\u0633\u0645 \u0627\u0644\u0645\u0647\u0645\u0629"),e.qZA(),e._UZ(25,"input",16),e.qZA(),e.TgZ(26,"div",14)(27,"label",17),e._uU(28,"\u0646\u0648\u0639 \u0627\u0644\u062e\u062f\u0645\u0629"),e.qZA(),e._UZ(29,"input",18),e.qZA(),e.TgZ(30,"div",14)(31,"label",19),e._uU(32,"\u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0645\u0643\u0644\u0641"),e.qZA(),e.TgZ(33,"select",20)(34,"option",21),e._uU(35,"\u0625\u0628\u0631\u0627\u0647\u064a\u0645"),e.qZA(),e.TgZ(36,"option",21),e._uU(37,"\u0632\u064a\u0627\u062f \u0639\u0628\u062f \u0627\u0644\u0639\u0638\u064a\u0645"),e.qZA()()(),e.TgZ(38,"div",14)(39,"label",22),e._uU(40,"\u0627\u0644\u0645\u0647\u0645\u0629 \u062a\u062e\u0635 \u0627\u0644\u0639\u0645\u064a\u0644 "),e.qZA(),e.TgZ(41,"select",23)(42,"option",21),e._uU(43,"\u0645\u062d\u0645\u062f \u0627\u0644\u062d\u0633\u064a\u0646\u064a"),e.qZA(),e.TgZ(44,"option",21),e._uU(45,"\u0625\u0628\u0631\u0627\u0647\u064a\u0645"),e.qZA()()(),e.TgZ(46,"div",14)(47,"p",24),e._uU(48,"\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0647\u0645\u0629"),e.qZA(),e._UZ(49,"input",25),e.TgZ(50,"label",26),e._uU(51,"\u0645\u0633\u062a\u0645\u0631"),e.qZA(),e._UZ(52,"input",27),e.TgZ(53,"label",28),e._uU(54,"\u0645\u0639\u0644\u0642"),e.qZA(),e._UZ(55,"input",29),e.TgZ(56,"label",30),e._uU(57,"\u0645\u063a\u0644\u0642"),e.qZA()(),e.TgZ(58,"div",14)(59,"p",24),e._uU(60,"\u0627\u0633\u062a\u0644\u0627\u0645 \u0639\u0647\u062f\u0629"),e.qZA(),e._UZ(61,"input",31),e.TgZ(62,"label",32),e._uU(63,"\u062a\u0645 \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645"),e.qZA(),e._UZ(64,"input",33),e.TgZ(65,"label",34),e._uU(66,"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0627\u0633\u062a\u0644\u0627\u0645"),e.qZA()(),e.TgZ(67,"div",14)(68,"label",35),e._uU(69,"\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0639\u0647\u062f\u0629"),e.qZA(),e._UZ(70,"textarea",36),e.qZA(),e.TgZ(71,"div",14)(72,"label",37),e._uU(73,"\u0627\u0644\u0628\u064a\u0627\u0646"),e.qZA(),e._UZ(74,"textarea",38),e.qZA(),e.TgZ(75,"div",14)(76,"label",39),e._uU(77,"\u062a\u0639\u0644\u064a\u0645\u0627\u062a"),e.qZA(),e._UZ(78,"textarea",40),e.qZA(),e.TgZ(79,"div",14)(80,"label",41),e._uU(81,"\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0632\u064a\u0627\u0631\u0629"),e.qZA(),e._UZ(82,"textarea",42),e.qZA(),e.TgZ(83,"div",14)(84,"label",43),e._uU(85,"\u062a\u0645 \u0635\u0631\u0641"),e.qZA(),e._UZ(86,"input",44),e.qZA(),e.TgZ(87,"div",14)(88,"label",45),e._uU(89,"\u0627\u0644\u0628\u0627\u0642\u064a"),e.qZA(),e._UZ(90,"input",46),e.qZA(),e.TgZ(91,"div",14)(92,"label",47),e._uU(93,"\u0627\u0644\u0627\u0646\u062c\u0627\u0632"),e.qZA(),e._UZ(94,"textarea",48),e.qZA(),e.TgZ(95,"div",14)(96,"label",49),e._uU(97,"\u0645\u0644\u0627\u062d\u0638\u0627\u062a"),e.qZA(),e._UZ(98,"textarea",50),e.qZA(),e.TgZ(99,"div",14)(100,"p",24),e._uU(101,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0628\u062f\u0621"),e.qZA(),e.TgZ(102,"div",51),e._UZ(103,"input",52),e.TgZ(104,"label",53),e._UZ(105,"i",54),e.qZA()()(),e.TgZ(106,"div",14)(107,"p",24),e._uU(108,"\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0646\u062a\u0647\u0627\u0621"),e.qZA(),e.TgZ(109,"div",51),e._UZ(110,"input",55),e.TgZ(111,"label",56),e._UZ(112,"i",54),e.qZA()()(),e.YNc(113,r,5,1,"ng-container",57),e.YNc(114,l,3,1,"ng-template",null,58,e.W1O),e.qZA()()()()()()()),2&d){const x=e.MAs(115);e.xp6(10),e.Q6J("routerLink",e.VKq(6,a,e.lcZ(11,4,"/dashboard/tasks"))),e.xp6(10),e.Q6J("formGroup",p.taskForm),e.xp6(93),e.Q6J("ngIf",!p.isEditMode)("ngIfElse",x)}},dependencies:[t.ez,t.O5,m.L,n.Bz,n.rH,T.fQ,T.lO,u.u5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u._,u.JJ,u.JL,u.UX,u.sg,u.u]})}return s})();const U=[{path:"",component:(()=>{class s{static#e=this.\u0275fac=function(d){return new(d||s)};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-main-task"]],standalone:!0,features:[e.jDz],decls:1,vars:0,template:function(d,p){1&d&&e._UZ(0,"router-outlet")},dependencies:[t.ez,n.lC]})}return s})(),children:[{path:"",component:g,data:{breadcrumbs:[{label:"\u0627\u0644\u0645\u0647\u0627\u0645 \u0648\u0627\u0644\u062e\u062f\u0645\u0627\u062a",url:"/dashboard/tasks/add-task"}]}},{path:":slug",component:_,data:{breadcrumbs:[{label:" \u0625\u0636\u0627\u0641\u0629 \u0645\u0647\u0645\u0629",url:"/dashboard/tasks/add-task"}]}},{path:"add-task/:id",component:_,data:{breadcrumbs:[{label:"\u062a\u0639\u062f\u064a\u0644 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629"}]}}]}]},4414:(k,h,c)=>{c.d(h,{L:()=>v});var t=c(6814),A=c(846),Z=c(8733),T=c(2181),n=c(5879);function m(i,g){1&i&&(n.TgZ(0,"li",6),n._uU(1,"/"),n.qZA())}function u(i,g){if(1&i&&(n.ynx(0),n.TgZ(1,"li",4)(2,"a",5),n.ALo(3,"localize"),n._uU(4),n.qZA()(),n.YNc(5,m,2,0,"li",3),n.BQk()),2&i){const r=g.$implicit,l=g.index,a=n.oxw().$implicit;n.xp6(2),n.Q6J("routerLink",n.lcZ(3,3,r.url)),n.xp6(2),n.Oqu(r.label),n.xp6(1),n.Q6J("ngIf",l<a.segments.length-1)}}function e(i,g){1&i&&(n.TgZ(0,"li",6),n._uU(1,"/"),n.qZA())}function C(i,g){if(1&i&&(n.ynx(0),n.YNc(1,u,6,5,"ng-container",2),n.YNc(2,e,2,0,"li",3),n.BQk()),2&i){const r=g.$implicit,l=g.index,a=n.oxw();n.xp6(1),n.Q6J("ngForOf",r.segments),n.xp6(1),n.Q6J("ngIf",l<a.breadcrumbs.length-1)}}let v=(()=>{class i{constructor(r,l){this.router=r,this.activatedRoute=l,this.breadcrumbs=[]}ngOnInit(){this.routerSubscription=this.router.events.pipe((0,T.h)(r=>r instanceof A.m2)).subscribe(()=>{this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}),this.breadcrumbs=this.createBreadcrumbs(this.activatedRoute.root)}createBreadcrumbs(r,l="",a=[]){let _=[],f=r;for(;f.firstChild;){f=f.firstChild;const U=f.snapshot.url.map(b=>b.path).join("/");""!==U&&(l+=`/${U}`);const s=f.snapshot.data.breadcrumbs;if(s&&s!=_&&Array.isArray(s)&&""!==U){_=s;const b=s.map(o=>({label:o.label,url:o.url||l}));a.push({segments:b})}}return a}ngOnDestroy(){}static#e=this.\u0275fac=function(l){return new(l||i)(n.Y36(A.F0),n.Y36(A.gz))};static#t=this.\u0275cmp=n.Xpm({type:i,selectors:[["app-breadcrumb"]],standalone:!0,features:[n.jDz],decls:3,vars:1,consts:[["aria-label","breadcrumb"],[1,"breadcrumb","mb-0"],[4,"ngFor","ngForOf"],["class","separator",4,"ngIf"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"separator"]],template:function(l,a){1&l&&(n.TgZ(0,"nav",0)(1,"ol",1),n.YNc(2,C,3,2,"ng-container",2),n.qZA()()),2&l&&(n.xp6(2),n.Q6J("ngForOf",a.breadcrumbs))},dependencies:[t.ez,t.sg,t.O5,A.Bz,A.rH,Z.fQ,Z.lO],styles:['.ec-breadcrumb[_ngcontent-%COMP%]{padding:15px 0;margin-bottom:50px;background-color:#f7f7f7;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee}.ec-breadcrumb[_ngcontent-%COMP%]   .ec-breadcrumb-title[_ngcontent-%COMP%]{text-decoration:none;color:#444;display:block;font-size:15px;font-family:Montserrat;line-height:22px;font-weight:700;margin:0 auto;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]{text-align:right}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-weight:300;letter-spacing:.02rem;line-height:1.2;text-transform:capitalize}.ec-breadcrumb-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;color:#444}.ec-breadcrumb-list[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{color:#3474d4}.ec-breadcrumb-list[_ngcontent-%COMP%]   .ec-breadcrumb-item.active[_ngcontent-%COMP%]:before{color:#3474d4}.ec-breadcrumb-item[_ngcontent-%COMP%]{display:flex}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]{padding-left:7px}.ec-breadcrumb-item[_ngcontent-%COMP%] + .ec-breadcrumb-item[_ngcontent-%COMP%]:before{display:inline-block;padding-right:7px;color:#444;content:"\\f101";font-family:EcIcons;font-size:15px}a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}.separator[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.breadcrumb[_ngcontent-%COMP%]   .breadcrumb-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--dark-one)}']})}return i})()},1818:(k,h,c)=>{c.d(h,{Q:()=>v});var t=c(5879),A=c(6223),Z=c(6814);function T(i,g){if(1&i){const r=t.EpF();t.TgZ(0,"li",2)(1,"a",8),t.NdJ("click",function(){t.CHM(r);const a=t.oxw();return t.KtG(a.navigateTo(1))}),t._uU(2,"1"),t.qZA()()}}function n(i,g){1&i&&(t.TgZ(0,"li",2)(1,"a",9),t._uU(2,"..."),t.qZA()())}function m(i,g){if(1&i){const r=t.EpF();t.TgZ(0,"li",2)(1,"a",8),t.NdJ("click",function(){const _=t.CHM(r).$implicit,f=t.oxw();return t.KtG(f.navigateTo(_))}),t._uU(2),t.qZA()()}if(2&i){const r=g.$implicit,l=t.oxw();t.ekj("active",l.currentPage===r),t.xp6(2),t.Oqu(r)}}function u(i,g){1&i&&(t.TgZ(0,"li",2)(1,"a",9),t._uU(2,"..."),t.qZA()())}function e(i,g){if(1&i){const r=t.EpF();t.TgZ(0,"li",2)(1,"a",8),t.NdJ("click",function(){t.CHM(r);const a=t.oxw();return t.KtG(a.navigateTo(a.totalPages))}),t._uU(2),t.qZA()()}if(2&i){const r=t.oxw();t.xp6(2),t.Oqu(r.totalPages)}}const C={provide:A.JU,useExisting:(0,t.Gpc)(()=>v),multi:!0};let v=(()=>{class i{constructor(){this.pageChange=new t.vpe}navigateTo(r){this.pageChange.emit(r),this.scrollToTop()}ngOnInit(){}scrollToTop(){window.scroll({top:0,left:0,behavior:"smooth"})}calculatePages(){const r=[];if(this.totalPages<=5)for(let a=1;a<=this.totalPages;a++)r.push(a);else{let a,_;this.currentPage<=Math.floor(2.5)?(a=1,_=5):this.currentPage+Math.floor(2.5)>=this.totalPages?(a=this.totalPages-5+1,_=this.totalPages):(a=this.currentPage-Math.floor(2.5),_=this.currentPage+Math.floor(2.5));for(let f=a;f<=_;f++)r.push(f)}return r}static#e=this.\u0275fac=function(l){return new(l||i)};static#t=this.\u0275cmp=t.Xpm({type:i,selectors:[["pagination"]],inputs:{currentPage:"currentPage",totalPages:"totalPages"},outputs:{pageChange:"pageChange"},standalone:!0,features:[t._Bn([C]),t.jDz],decls:15,vars:9,consts:[["aria-label","Page navigation"],[1,"pagination","justify-content-center"],[1,"page-item","mx-2"],["aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item mx-2",4,"ngIf"],["class","page-item mx-2",3,"active",4,"ngFor","ngForOf"],["aria-label","Next",1,"page-link",3,"click"],[1,"page-link",3,"click"],[1,"page-link"]],template:function(l,a){1&l&&(t.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),t.NdJ("click",function(){return a.navigateTo(a.currentPage-1)}),t.TgZ(4,"span",4),t._uU(5,"\xab"),t.qZA()()(),t.YNc(6,T,3,0,"li",5),t.YNc(7,n,3,0,"li",5),t.YNc(8,m,3,3,"li",6),t.YNc(9,u,3,0,"li",5),t.YNc(10,e,3,1,"li",5),t.TgZ(11,"li",2)(12,"a",7),t.NdJ("click",function(){return a.navigateTo(a.currentPage+1)}),t.TgZ(13,"span",4),t._uU(14,"\xbb"),t.qZA()()()()()),2&l&&(t.xp6(2),t.ekj("disabled",1===a.currentPage),t.xp6(4),t.Q6J("ngIf",a.currentPage>3),t.xp6(1),t.Q6J("ngIf",a.currentPage>4),t.xp6(1),t.Q6J("ngForOf",a.calculatePages()),t.xp6(1),t.Q6J("ngIf",a.currentPage<a.totalPages-3),t.xp6(1),t.Q6J("ngIf",a.currentPage<a.totalPages-2),t.xp6(1),t.ekj("disabled",a.currentPage===a.totalPages))},dependencies:[Z.ez,Z.sg,Z.O5],styles:[".pagination[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]{cursor:pointer}"]})}return i})()}}]);