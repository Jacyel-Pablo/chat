import { Routes } from '@angular/router';
import { IndexComponent } from './componetes/index/index.component';
import { CriarContaComponent } from './componetes/criar-conta/criar-conta.component';
import { ChatMainComponent } from './componetes/chat-main/chat-main.component';

export const routes: Routes = [
    {path: "", component: IndexComponent},
    {path: "criar_conta", component: CriarContaComponent},
    {path: "chat_main", component: ChatMainComponent}
];
