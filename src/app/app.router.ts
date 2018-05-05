import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

const ROTAS: Routes = [
    { path: '', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'detalhes', component: DetalhesComponent },
    { path: 'cadastro-produto', component: CadastroProdutoComponent }
];