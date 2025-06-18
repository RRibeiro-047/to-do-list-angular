# ✨ Advanced To-Do List

Uma aplicação moderna de lista de tarefas desenvolvida com **Angular 17+**, **SCSS** e **Angular Animations**, seguindo as melhores práticas de desenvolvimento front-end.

![Angular](https://img.shields.io/badge/Angular-17+-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![SCSS](https://img.shields.io/badge/SCSS-1.70+-pink)
![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Características

### ✨ Funcionalidades Principais
- ✅ **Adicionar tarefas** com validação
- ✅ **Marcar como completa** com um clique
- ✅ **Excluir tarefas** individualmente
- ✅ **Limpar tarefas concluídas** em massa
- ✅ **Limpar todas as tarefas** com confirmação
- ✅ **Persistência automática** no localStorage
- ✅ **Estatísticas em tempo real** (total, concluídas, pendentes)
- ✅ **Barra de progresso** visual
- ✅ **Timestamps inteligentes** (ex: "2h ago", "Yesterday")

### 🎨 Design e UX
- 🌙 **Tema escuro moderno** com gradientes
- 📱 **Design responsivo** para todos os dispositivos
- ⚡ **Animações fluidas** com Angular Animations
- 🎯 **Interface intuitiva** com ícones emoji
- 🎉 **Feedback visual** para ações do usuário
- ♿ **Acessibilidade** com ARIA labels

### 🏗️ Arquitetura Técnica
- 🧩 **Standalone Components** (Angular 17+)
- 🔄 **Programação reativa** com RxJS
- 🎭 **Separação de responsabilidades** (Service Pattern)
- 🎨 **SCSS com variáveis** e mixins
- 📦 **Componentização modular**
- 🚀 **Performance otimizada** com OnPush e trackBy

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Angular** | 17+ | Framework SPA com arquitetura moderna |
| **TypeScript** | 5.0+ | Superset do JavaScript com tipagem estática |
| **SCSS/SASS** | 1.70+ | Pré-processador CSS para estilos avançados |
| **Angular Animations** | 17+ | Animações nativas e performáticas |
| **RxJS** | 7.8+ | Programação reativa e gerenciamento de estado |

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── todo-list/              # Componente principal
│   │       ├── todo-list.component.ts
│   │       ├── todo-list.component.html
│   │       ├── todo-list.component.scss
│   │       └── todo-list.component.spec.ts
│   ├── services/
│   │   └── todo.service.ts         # Gerenciamento de dados e localStorage
│   ├── models/
│   │   └── todo.models.ts          # Interfaces TypeScript
│   ├── app.component.ts            # Componente raiz (standalone)
│   └── app.config.ts               # Configuração da aplicação
├── styles.scss                     # Estilos globais
└── main.ts                         # Bootstrap da aplicação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm 9+
- Angular CLI 17+

### Instalação e Execução

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd advanced-todo

# Instale as dependências
npm install

# Execute a aplicação
ng serve

# Abra no navegador
# http://localhost:4200
```

### Outros Comandos Úteis

```bash
# Build para produção
ng build --prod

# Executar testes
ng test

# Executar linter
ng lint

# Gerar componente
ng generate component nome-do-componente
```

## 🎯 Funcionalidades Detalhadas

### 📝 Gerenciamento de Tarefas
- **Adicionar**: Digite a tarefa e pressione Enter ou clique em "Add Task"
- **Completar**: Clique na tarefa ou no checkbox para marcar como concluída
- **Excluir**: Use o ícone de lixeira para remover tarefas
- **Limpar**: Botões para limpar tarefas concluídas ou todas as tarefas

### 📊 Estatísticas e Progresso
- **Contadores**: Total, concluídas e pendentes
- **Barra de progresso**: Visualização do percentual de conclusão
- **Celebração**: Emoji de festa quando todas as tarefas são concluídas

### 💾 Persistência de Dados
- **localStorage**: Todas as tarefas são salvas automaticamente
- **Carregamento**: Tarefas são restauradas ao reabrir a aplicação
- **Sincronização**: Estado sempre atualizado entre abas

### 🎨 Animações e Transições
- **Entrada**: Animação slide-in para novos itens
- **Saída**: Animação fade-out para itens removidos
- **Hover**: Efeitos visuais interativos
- **Loading**: Transições suaves entre estados

## 🏗️ Arquitetura do Código

### 🧩 Componente Principal (`TodoListComponent`)
```typescript
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  animations: [/* Animações Angular */]
})
export class TodoListComponent implements OnInit {
  // Propriedades reativas
  todos: Todo[] = [];
  newTodo = '';

  // Métodos de negócio
  addTodo() { /* ... */ }
  toggleTodo(id: number) { /* ... */ }
  deleteTodo(id: number) { /* ... */ }
  
  // Getters computados
  get completedCount(): number { /* ... */ }
  get progressPercentage(): number { /* ... */ }
}
```

### 🔧 Serviço (`TodoService`)
```typescript
@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  public todos$ = this.todosSubject.asObservable();

  // Métodos CRUD
  addTodo(title: string): void { /* ... */ }
  toggleTodo(id: number): void { /* ... */ }
  deleteTodo(id: number): void { /* ... */ }
  
  // Persistência
  private saveToStorage(): void { /* ... */ }
  private loadFromStorage(): void { /* ... */ }
}
```

### 📝 Modelo de Dados (`Todo`)
```typescript
export interface Todo {
  id: number;           // Identificador único
  title: string;        // Texto da tarefa
  completed: boolean;   // Status de conclusão
  createdAt: Date;      // Data de criação
}
```

## 🎨 Guia de Estilos SCSS

O projeto utiliza um sistema de variáveis SCSS para manter consistência visual:

```scss
// Cores principais
$primary-color: #667eea;
$background-dark: #1a202c;
$surface-dark: #2d3748;
$text-primary: #ffffff;
$success-color: #48bb78;
$danger-color: #f56565;

// Espaçamentos e bordas
$border-radius: 12px;
$transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### 🎭 Animações Personalizadas
- **fadeInOut**: Entrada e saída suave de itens
- **slideIn**: Animação de entrada do container
- **listAnimation**: Efeito stagger para listas
- **bounce**: Feedback visual para ações

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:

- **Desktop**: 1200px+ (layout completo)
- **Tablet**: 768px - 1199px (layout adaptado)
- **Mobile**: < 768px (layout em coluna única)

```scss
@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }
  
  .section-header {
    flex-direction: column;
    gap: 1rem;
  }
}
```

## 🚀 Possíveis Expansões Futuras

### 🔄 Funcionalidades
- [ ] **Categorias** de tarefas com cores
- [ ] **Filtros** (todas, pendentes, concluídas)
- [ ] **Pesquisa** de tarefas
- [ ] **Ordenação** por data, alfabética, prioridade
- [ ] **Modo escuro/claro** toggle
- [ ] **Lembretes** com notificações
- [ ] **Drag & Drop** para reordenar

### 🌐 Integrações
- [ ] **Backend API** (Node.js, Firebase)
- [ ] **Autenticação** de usuários
- [ ] **Sincronização** em tempo real
- [ ] **PWA** com offline support
- [ ] **Push notifications**

### 🧪 Qualidade
- [ ] **Testes unitários** completos (Jest)
- [ ] **Testes E2E** (Cypress)
- [ ] **Storybook** para componentes
- [ ] **CI/CD** pipeline
- [ ] **Docker** containerização

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ usando as melhores práticas de desenvolvimento front-end moderno.

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!** ⭐
