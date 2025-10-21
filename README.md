Este é o front-end da aplicação ToDo List, desenvolvido em React com JavaScript, consumindo a API REST do back-end desenvolvido em Java com Spring Boot.
O sistema permite criar, listar, atualizar e deletar tarefas categorizadas, exibindo o status de conclusão de cada uma.

🚀 Tecnologias utilizadas

React.js (JavaScript)

Axios (para requisições HTTP)

React Router (se usado para navegação)

CSS / Styled Components / Tailwind (conforme utilizado no projeto)

Integração com API REST do back-end Spring Boot

Configuração de CORS no back-end para permitir comunicação

📂 Estrutura do projeto (exemplo)
src/
├── api/             # Configuração e chamadas à API via Axios
├── components/      # Componentes reutilizáveis (Formulário, Lista de Tarefas, etc)
├── pages/           # Páginas ou views (Home, Dashboard, etc)
├── styles/          # Arquivos CSS ou estilos
├── utils/           # Funções auxiliares e helpers
└── App.js           # Componente raiz da aplicação

🎯 Funcionalidades principais

Listar todas as tarefas cadastradas (GET /api/forms)

Criar nova tarefa (POST /api/forms)

Atualizar tarefa existente (PUT /api/forms/{id})

Deletar tarefa (DELETE /api/forms/{id})

Visualizar status de conclusão (completed)

Filtrar ou agrupar tarefas por categoria: ESTUDOS, TRABALHO, LAZER

Interface responsiva e intuitiva para facilitar o uso
