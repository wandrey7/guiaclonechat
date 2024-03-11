# Perguntas e Respostas

## O que é clonechat?

O clonechat é um programa feito em Python que realiza clonagem de canais/grupos No Telegram. Perfeito para backup's.

## Funciona em canais com encaminhamento desativado?

Sim, desde a versão 110 é possivel clonar grupos/canais protegidos através do clonechat_protect_run.py ou exec_clonechat_protect.bat (Windows).

## Existe risco de usar o clonechat?

Não, se não for alterado o delay entre cada mensagem. O recomendado é 10s de delay entre cada mensagem e 1000 mensagens por dia. Caso for testar um delay menor ou uma clonagem maior é recomendável que não use a sua conta principal, use uma conta feita com [bot de sms](https://t.me/NotzSMSBot?start=1310302765).

## Como pegar o chat_id de um grupo/canal?

::: tip Dicas
Existem várias formas de pegar o caht_id, mostrarei primeiro a que vai funcionar em chat privado e público e depois as demais.
:::

1- Através da URL da mensagem.

- Ao clicar na mensagem (Smartphone) ou clicar com botão direito do mouse aparece `Copiar link` após copiar esse link ele será algo como: Ex: https://t.me/c/1623956857/67852 sendo que esse 1623956857 é o id, só precisa acrescentar - 100. Resultado -1001623956857

2- Com um Bot

- Encaminhando uma mensagem para o bot @myidbot ele retorna o id da mensagem completo. (Não funciona pra canais privado)

3- Com 64Gram Desktop

- Atráves desse [client Telegram](https://github.com/TDesktop-x64/tdesktop) é possivel pegar id de canais públicos e privados.

<center><img src="/64gram.png" alt="Exemplo"></center>

## O clonechat clona mensagens apagadas?

Não, o clonechat não clona mensagens apagadas!

## O clonechat clona grupos com tópicos?

Não, nativamente o clonechat não clona grupos com tópicos. Mas ele tem o código aberto que possibilita que seja modificado para tal necessidade.

## Versão protect em branco

Normal, A versão protect do clonechat faz um scan no grupo/canal todo pra procurar as mensagens disponível
