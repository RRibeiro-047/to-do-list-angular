# ✨ To-Do List/angular

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

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ usando as melhores práticas de desenvolvimento front-end moderno.

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela!** ⭐
