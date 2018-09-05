import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatSidenavModule, MatCheckboxModule, MatToolbarModule, MatTreeModule, MatSelectModule],
    exports: [MatSidenavModule, MatCheckboxModule, MatToolbarModule, MatTreeModule, MatSelectModule],
})

export class MaterialModule {}