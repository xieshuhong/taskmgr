import { NgModule, SkipSelf, Optional } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from "./header/header.component";
import { HttpModule } from "@angular/http";
import { MdIconRegistry } from  "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { loadSvgResources } from "../utils/svg.util";
import { SharedModule } from "../shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';

@NgModule({
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [HeaderComponent,FooterComponent, SidebarComponent],
  exports: [HeaderComponent,FooterComponent, SidebarComponent]
})
export class CoreModule {
   constructor(@SkipSelf() @Optional() parent:CoreModule, 
               ir:MdIconRegistry,
               ds:DomSanitizer
  ){   
       if(parent){
         throw new Error('模块已经存在,不能再次加载！');  
       }

       loadSvgResources(ir,ds)

   }
 }
