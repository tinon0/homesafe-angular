import { Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { NewModeComponent } from './new-mode/new-mode.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: "panel", component : PanelComponent
    },
    {
        path: "newMode", component : NewModeComponent
    },
    {
        path: "**", component : LoginComponent
    }
];
