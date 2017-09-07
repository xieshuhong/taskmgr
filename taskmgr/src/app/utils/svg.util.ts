import { MdIconRegistry } from  "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";


export const loadSvgResources = (ir:MdIconRegistry, ds:DomSanitizer) => {
    const dayDir = 'assets/days';
    const avatarDir = 'assets/avatar';
    const days = [
       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
       22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
    const iconDir = 'assets/icons';
    ir.addSvgIconSetInNamespace('avatars',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));    
    ir.addSvgIcon('gifts',ds.bypassSecurityTrustResourceUrl('assets/gifts.svg'));
    ir.addSvgIcon('day',ds.bypassSecurityTrustResourceUrl('assets/sidebar/day.svg'));
    ir.addSvgIcon('month',ds.bypassSecurityTrustResourceUrl('assets/sidebar/month.svg'));
    ir.addSvgIcon('project',ds.bypassSecurityTrustResourceUrl('assets/sidebar/project.svg'));
    ir.addSvgIcon('projects',ds.bypassSecurityTrustResourceUrl('assets/sidebar/projects.svg'));    
    ir.addSvgIcon('week',ds.bypassSecurityTrustResourceUrl('assets/sidebar/week.svg'));  
    ir.addSvgIcon('move',ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    ir.addSvgIcon('add',ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
    ir.addSvgIcon('delete',ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
    ir.addSvgIcon('avatars',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.addSvgIcon('unassigned',ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));        
    days.forEach( d => 
        ir.addSvgIcon(`day${d}`,ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${d}.svg`)))
 }