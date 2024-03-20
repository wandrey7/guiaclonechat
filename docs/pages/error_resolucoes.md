# Erros e resoluções

Aqui trataremos os principais erros do clonechat.

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

[Clique aqui para baixar](https://github.com/wandrey7/guiaclonechat/blob/main/docs/public/clonechat.py)

::: danger ⚠ Atenção
Caso opte por usar a versão modificada os arquivos que for "pulado" não será clonado. Caso queira clonar esses arquivos, terá que adquerir o Telegram Premium!
:::

## ModuleNotFoundError

![ModuleNotFoundError image](/mnfe_error.png)

Bom, esse erro acontece quando não é achado o arquivo na pasta, na imagem acima vemos que o erro vem seguindo de "Setup" ou seja, o arquivo "setup" não está na pasta ou o programa não reconheceu e deu esse erro, pra resolver é bem simples, basta baixar o arquivo novamente e apagar o antigo.

## Socket.send() raised exception

![socket send image](/ssrw_error.png)

Esse erro se dá por conta da conexão do seu dispositivo com a o pyrogram ou por conta da internet fraca, em muita vezes e só esperar ou reiniciar o programa que ele volta normalmente, em caso de sua internet estar fraca não tem muito o que fazer.

## Messages.GetHistory (modo bot)

![GetHistory image](/gethistory_error.jpg)

Erro se dá por conta dos bots do Telegram não ter acesso ao histórico antigo do grupo/canal,o bot só vai ter acesso às mensagens que foram enviadas depois que ele entrou no grupo/canal.

## [WinError 267] O nome de diretório é invalido

![Win error 267 image](/win_error.png)

Erro que ocorre na clonagem de canal com caracteres especiais no nome.

> Ex:. Á

A solução se aplica ao `Clonechat_protect` mas pode ser usada a mesma lógica para os demais códigos.

Edite o arquivo `clonechat_protect.py`em `clonechat\protect_content\clonechat_protect.py` e colocar na `linha número 360`, esse trecho.

```python
chat_origin_title = re.sub(r":", "", chat_origin_title)
```

Em `r":"` pode-se colocar caracteres indesejados, como no exemplo: `r".\*!,'|"#;:?%"`, em meus testes só consegui sucesso com ":".

Os caracteres indesejados serão substituídos por nada, caso queira substituir por underscore ou espaço em branco, basta alterar o conteúdo: `re.sub(r":", "underscore ou espaço aqui...", chat_origin_title)`

::: danger ⚠ Atenção
É preciso importar a biblioteca re acrescentando "import re" no começo do arquivo!
:::

<h3 align="center">Resumindo em uma foto</h3>

![image](/err_img_267w.png)

Caso queira o arquivo clonechat_protect.py já editado e funcionado basta baixar abaixo:

[Clique aqui para baixar](https://github.com/wandrey7/guiaclonechat/blob/main/docs/public/clonechat_protect.py)

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
