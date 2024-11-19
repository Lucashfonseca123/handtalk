# Teste Hand Talk

## Tecnologia
- React Native (0.76.2)
- Hooks (Não foi utilizado gerenciador de estados)
- Firebase

## Funcionamento
- Inicie instalando as dependências com yarn install (npm install)
- Utilize yarn android para rodar em um dispositivo/android

_obs: Nesse projeto não foi configurado para IOS por não ter uma conta de assinatura_

## Estrutura

![alt text](https://i.ibb.co/3C5pxmW/Teste-Hand-Talk-drawio.png)

Esse projeto foi pensado utilizando alguns conceitos e padrões do mercado, a arquitetura foi baseada no conceito de divisão por domínios (Domain-Driven Design (DDD)). 
A ideia é que a aplicação seja escalável de maneira saudável, isolando responsabilidades (Don't repeat yourself) e garantindo responsabilidade única (Single Responsiblity Principle), por isso, a divisão dentro da pasta features:
- Auth
- Configuration
- Rendering

Em conjunto, foram definidos alguns ítens globais para também garantir o isolamento de responsabilidades.
 - components: Contém todos os components globais para serem reutilizados, nessa tela que temos a renderização das formas geométricas isoladas. 
 - features: Contém todos os domínios da nossa aplicação, facilitando a adição de novas funcionalidades além de garantir o melhor manutenção
 - hooks: Faz o papel de gerenciador de estados da aplicação, devido o baixo tamanho de funcionalidades, gerar hooks de maneiras manuais trás rápidez e legibilidade no compartilhamento de dados entre telas ou features.
 - navigation: Contém toda a configuração de navegação da nossa aplicação, nele que são configurados as rodas e as interfaces, tipando todas as proprieades da mesma. 


## Considerações
Essa aplicação foi focada em arquitetura e funcionalidade, design ficou em segundo plano devido a tempo. Infelizmente, todo o final de semana do dia 15/11 ao 18/11 a documentação esteve fora do ar: https://threejs.org. O que dificultou a implementação da ferramenta de renderização 3d, por esse motivo, somente o scaffold dos componentes foram desenvolvidos. <p>Entretanto, foi possível concluir toda a configuração com o Firebase, para selecionar e salvar configurações de uma determinada forma geométrica, além das cores e rotação. Também foi concluída toda a parte de autenticação. 
- Para facilitar o login, já deixei pré selecionado uma credencial no input, seguem os usuários: 
- user: ht@gmail.com | password: handstalk
- user: ht2@gmail.com | password: handstalk
Fico a disposição para desenvolver quaisquer funcionalidades adicionais (ou não implementadas por tempo) necessárias. 