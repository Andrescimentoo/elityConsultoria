import {createBrowserRouter} from 'react-router-dom'
import { Home } from './components/home/home.jsx'
import { ExibirHistoricoDeLeads } from './components/exibirHistoricoDeLeads/exibirHistoricoDeLeads.jsx'
import { GerarLeads } from './components/geranciadorDeLeads/gerarLeads/gerarLeads.jsx'

export const router = createBrowserRouter([
    {
        path: '/', // endereço/rota igual quando escrevemos Route (/Home,homeComponent) 
        element: <Home />
    },
    // agora criamos a nova pagina
    {
        path: '/historicoDeLeads',
        element: <ExibirHistoricoDeLeads />
    },
    {
        path: '/GeranciarLeads',
        element: <GerarLeads />
    }

]) 