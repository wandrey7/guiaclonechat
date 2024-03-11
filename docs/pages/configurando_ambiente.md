# Configurando o ambiente

_Chegou a hora de baixar e configurar o clonechat._

## Baixando o Clonechat

### Download direto

1- Abra o [repositório do clonechat](https://github.com/apenasrr/clonechat)

2- Clique em `code` e vá para `Download ZIP`

<video autoplay loop src="/github_code.mp4" ></video>

3- Após o download extraia o arquivo

### Download com git

Caso tenha o git instalado, no terminal digite:

```Bash
git clone https://github.com/apenasrr/clonechat.git
```

## Atualizando as dependências

### Windows

O clonechat vem com um arquivo para ajuda-lo a instalar as dependências.

Basta executar o arquivo `update_libs.bat` e ao final da instalação apertar qualquer tecla.

### Linux

Abra o terminal do Linux e vá até a pasta do clonechat.

Execute o comando:

```Bash
pip -r install requirements.txt
```

### Android

Com pydroid já baixado, baixe o clonechat e extraia.

Após isso vá para o pydroid e instale o tgcrypto e pyrogram, após isso navegue entre os diretorios e selecione o arquivo .py (depende da clonagem que for fazer (privado ou público)).

Dúvidas? Assista o vídeo abaixo:

<center><video controls src="/instalando_celular.mp4" width="320" height="240"></video></center>

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

5 - Após isso finalize o formulário e aparecerá o `api_id` e `api_hash`. Copie ambos!

::: danger ⚠ Atenção

NÃO passe ou mostre suas credenciais para ninguém! Se for pedir ajuda oculte essas informações!
:::

::: tip Processo em vídeo
Para assistir o processo em vídeo, clique [aqui](https://www.youtube.com/watch?v=8lKnE541Dvk)
:::

## Colocando as credenciais

Agora você deve colocar as credenciais logo ao executar o arquivo `exec_clonechat.bat` ou `clonechat.py` Assim que executar ele vai pedir o `api_id` e o `api_hash`. Você fez esses dois no passo Obtendo as credenciais do Telegram

Na tela que aparecer cole primeiro o `api_id` e dê enter. Em seguida ele pedirá o `api_hash`, cole e dê enter também.

Se não deu nenhum erro avance para X.

::: tip Dica
A versão protect funciona do mesmo jeito, Se for a primeira vez usando o clonechat e for usar logo o protect ele irá te pedir o api_id e api_hash duas vezes!
:::
