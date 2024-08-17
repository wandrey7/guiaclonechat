# Configurando o ambiente

_Chegou a hora de configurar o clonechat._

## Configurando o clonechat

::: tip API Telegram
Para usar o clonechat é necessario ter credenciais da API do Telegram
:::

Para obter as credenciais para a API do Telegram:

1- Acesse a área de [gestão de apps](https://my.telegram.org/auth?to=apps) no site do Telegram.

2- Entre com seu número de telefone em modelo internacional. Com prefixo `+55` para o caso de telefone brasileiro, seguido do DDD local e seu número de telefone

> Exemplo: +5573982512841

3- Você receberá um SMS ou mensagem no Telegram contendo o codigo de autenticação

> Exemplo do código: eCdfCGtSu5f

4- Após colocar o código você será redirecionado para um págiga com um formulário, Exemplo a ser seguido:

```txt
Título do aplicativo: digite qualquer nome
Nome curto: digite qualquer coisa entre 5 e 12 letras
Url: (deixe em branco)
Plataforma: desktop .
Description: (deixe em branco)
```

## Fazendo o Login

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

5 - Após isso finalize o formulário e aparecerá o `api_id` e `api_hash`. Copie ambos!

::: danger ⚠ Atenção

NÃO passe ou mostre suas credenciais para ninguém! Se for pedir ajuda oculte essas informações!
:::

::: tip Processo em vídeo
Para assistir o processo em vídeo, clique [aqui](https://www.youtube.com/watch?v=8lKnE541Dvk)
:::

## Configurando as credenciais

Agora você deve colocar as credenciais logo ao executar o arquivo `exec_clonechat.bat` ou `clonechat.py` Assim que executar ele vai pedir o `api_id` e o `api_hash`. Você fez esses dois no passo Obtendo as credenciais do Telegram

Na tela que aparecer cole primeiro o `api_id` e dê enter. Em seguida ele pedirá o `api_hash`, cole e dê enter também.

Se não deu nenhum erro avance para X.
