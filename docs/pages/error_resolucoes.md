# Erros e resoluções

Antes de verificar algum erro, certifique-se de estar com o clonechat com a versão mais recente.

Títulos marcados com :x: serão removidos da guia em breve

## Blank id

![Blank id error image](/blank_id_error.png)

Ele ocorre por conta de mensagens que foram apagadas desse canal, pois o clone chat analisa todas as mensagem do canal e quando ele encontra alguma que foi apagada ele retorna o blank id, fique tranquilo pois isso não atrapalha o funcionamento.

## CHAT_FORWARDS_RESTRICTED

![404 CHAT_FORWARDS_RESTRICTED image](/404_cfr.png)

Esse erro ocorre pois o canal que você esta tentando clonar possui a restrição de salvamento de arquivos, para resolver é simples basta executar o arquivo `clonechat_protect_run.py` ou `exec_clonechat_protect.bat` (caso esteja no Windows) e refazer o processo de colocar os id dos canais de origem e destino.

## CHAT ID INVALID

![404 CHAT_CHAT_ID_INVALID image](/chaid.jpg)

Esse erro indica que o ID do canal está inválido, Revise o id e caso tenha dúvidas em relação a id de canais, consulte [Guia chat id](/pages/perguntas_frequentes#como-pegar-o-chat-id-de-um-grupo-canal)

## MEDIA_CAPTION_TOO_LONG

![MEDIA_CAPTION_TOO_LONG image](/mctl_error.png)

Ele ocorre por conta que o Telegram possui diferentes limites para o plano free e o plano pago (premium). Para resolver esse erro basta excluir o `clonechat.py` e instalar essa versão que "pula" os arquivos que tiverem descrição maior.

## ModuleNotFoundError

![ModuleNotFoundError image](/mnfe_error.png)

Bom, esse erro acontece quando não é achado o arquivo na pasta, na imagem acima vemos que o erro vem seguindo de "Setup" ou seja, o arquivo "setup" não está na pasta ou o programa não reconheceu e deu esse erro, pra resolver é bem simples, basta baixar o arquivo novamente e apagar o antigo.

## Socket.send() raised exception

![socket send image](/ssrw_error.png)

Esse erro se dá por conta da conexão do seu dispositivo com a o pyrogram ou por conta da internet fraca, em muita vezes e só esperar ou reiniciar o programa que ele volta normalmente, em caso de sua internet estar fraca não tem muito o que fazer.

## Messages.GetHistory (modo bot)

![GetHistory image](/gethistory_error.jpg)

Erro se dá por conta dos bots do Telegram não ter acesso ao histórico antigo do grupo/canal,o bot só vai ter acesso às mensagens que foram enviadas depois que ele entrou no grupo/canal.

## Sintaxe do nome do arquivo

![Win error sintaxe image](/sintaxe_error.png)

Delete os arquivos .session e tente novamente. Esse erro é causado por conta da sessão do Telegram.

## Tgcrypto extension Error

![image](/tgcrypto_error.jpg)

A mensagem de erro que você está vendo indica que é necessário ter o Microsoft Visual C++ 14.0 ou uma versão mais recente instalada para compilar a extensão `tgcrypto`. Para resolver esse problema, siga estas etapas:

Instale as Ferramentas de Compilação do Microsoft Visual C++:

Você pode baixar as ferramentas de compilação necessárias no site da Microsoft Visual Studio. [Clique aqui](https://visualstudio.microsoft.com/visual-cpp-build-tools/)

Faça o download e instale as Ferramentas de Compilação do Visual C++. Exemplo na imagem abaixo:

**Atualize ou Instale o Microsoft Visual Studio:**

![image](/vstgcrypto_error.jpg)

Alternativamente, você pode instalar ou atualizar o Microsoft Visual Studio, que inclui as ferramentas de compilação necessárias. Certifique-se de selecionar a opção `Desenvolvimento para área de trabalho com C++" durante a instalação`.

## :x: [WinError 267] O nome de diretório é invalido

::: info
Na versão 113 esse erro foi corrigido, agora chats contendo caracteres especiais não geram erros no sistema de arquivos
:::

![Win error 267 image](/win_error.png)

## :x: JSONDecodeError

::: info
Antes da v116 o clonechat_protect_up gerava erro "json.decoder.JSONDecodeError" ao executar a função show_history_overview. Causado por o histórico estar em processo de download. Agora emite mensagem de espera pelo download do histórico. Atualize seu clonechat para a versão mais recente para corrigir o erro
:::

![image](/json_decode_error.jpg)

## :x: KeyError file_name

::: info
Antes da v117 o clonechat gerava erro "KeyError file_name" ao executar clonechat_protect_dw. Atualize seu clonechat para a versão mais recente para corrigir o erro
:::

![image](/key_erro_file_name.jpg)

## :x: NotADirectoryError

::: info
Antes da v115 o clonechat gerava erro "NotADirectoryError" ao executar DownloadAll, ocorrendo em chats com titulo contendo caracteres especiais. Atualize seu clonechat para a versão mais recente para corrigir o erro
:::

![image](/NotADirectoryError.jpg)

## Erros de api

1. Error. Try again

![image](/error_api_try.png)

Nesse exemplo acima temos o error.Try again que pode ter varias resoluções.

1.-Erro causado por conta de dados incorretos.

2.-erro causado por conta de internet lenta.

3.- erro causado por conta de arquivos .session passados.

Nos erros causados por dados incorretos ou por conta de arquivos .session é recomendado apagar todos os arquivos que contem .session no final, em algumas situações por conta de atualizações no Telegram esse erro é causado.

2- Erro ao criar API

![image](/error_web_api.png)

Esse erro é principalmente causado pelo uso de vpn/número gringo.

- Caso seu número seja Brasileiro verifique se está usando VPN ou DNS. Mesmo desativando e o erro persistir mude de navegador ou de rede. O site nao constuma aceitar VPN.

- Número gringo geralmente nao dá erro pra criar conta, caso aconteca tente o processo com uma VPN de mesma origem.
