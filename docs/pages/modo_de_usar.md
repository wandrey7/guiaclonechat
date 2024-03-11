# Fazer o Login

Na primeira vez que você for usar o clonechat será preciso fazer uma conexão com o Telegram, você só vai precisar fazer isso quando instalar ele da primeira vez ou quando apagar os arquivos `user.session` e `user_up.session`

Após clicar no arquivo de inicialização do clonechat vai aparecer a seguinte mensagem no terminal

> "Enter phone number or bot token:"

::: tip 💡 Dica
Você está em dúvida sobre as diferenças de modo user e modo bot? [Clique aqui](/pages/perguntas_frequentes) para saber mais.
:::

Caso for usar o modo bot vá para X, caso for usar o modo user continue aqui!

Digite o seu número de telefone com DDI +55 para números Brasileiros, após isso digite enter.

> Exemplo: +5573982512841

Na mensagem perguntando se o número está correto digite y. Após isso será enviado um código para o seu Telegram, digite ele no terminal

::: warning ⚠ Atenção
Se você tiver Autenticação de dois fatores (2Fa) ativado, será solicitado sua senha!
:::

## Modo de usar

::: danger ⚠ Atenção
Certifique-se de estar logado com suas credenciais, caso não esteja [clique aqui](/pages/configurando_ambiente.html#configurando-o-clonechat)
:::

1- Digite o chat_id do canal/grupo de origem. E confirme com [ENTER]

2- Digite o chat_id do canal/grupo de destino (o canal onde deseja salvar as mensagens). E confirme com [ENTER]

3- Escolha o que deseja clonar

::: tip 💡 Dica
Caso não saiba como pegar o id de origem/ destino [clique aqui](/pages/perguntas_frequentes.html#como-pegar-o-chat-id-de-um-grupo-canal)
:::

- Após confirmar o id de origem e o id de destino aparecerá um menu como esse abaixo para filtragem.

```Bash
0 - Clona todos os arquivos
1 - Fotos
2 - Apenas texto
3 - Documentos (pdf, zip, rar, ...)
4 - Stickers/figurinhas
5 - GIF's
6 - Arquivos de áudio (música)
7 - Mensagens de voz
8 - Vídeos
9 - Enquetes
```

- Se quiser clonar todos os arquivos digite 0.
- Você pode selecionar múltiplas opções, basta separar elas com vírgulas. Ex.: 1,3 para clonar apenas fotos e documentos.

4- Após selecionar os filtros, escolha se deseja iniciar ou continuar uma clonagem.

- Digite 1 para iniciar uma clonagem do zero.
- Digite 2 para continar uma clonagem já existente.
- Confime com [Enter]
