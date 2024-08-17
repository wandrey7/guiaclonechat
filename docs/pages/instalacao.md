## Instalação do Python

::: info ⚠

Caso já tenha Python instalado pule para [Configurando ambiente](/pages/configurando_ambiente.md).

:::
Para o clonechat funcionar você precisa possuir o Python instalado no seu computador. Selecione o sistema operacional que está usando abaixo e siga o tutorial de instalação do Python.

### Windows

1- Baixe o Python nesse [Link](https://www.python.org/downloads/)

2- Abra o arquivo baixado e certifique-se de deixar a opção _Add Python 3.X.X to PATH_

3- Ele deve ficar como na imagem abaixo:

![image](/python-path.png)

4- Clique em **Install now**

5- Espere terminal e feche o programa

### Linux

> Debian, Ubuntu e derivados

```Bash
sudo apt update
sudo apt install python3

```

::: warning Outros
Para outras Distribuições linux consulte o site de downloads do [Python](https://www.python.org/downloads/)!
:::

### Android

Instale o [pydroid](https://play.google.com/store/apps/details?id=ru.iiec.pydroid3) na loja de apps

::: tip Outros
Existe opções como Termux etc. Fique a vontade para usar outros, mas nesse tutorial irei utilizar o pydroid.
:::

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
pip install -r requirements.txt --upgrade
```

### Android

Com pydroid já baixado, baixe o clonechat e extraia.

Após isso vá para o pydroid e instale o tgcrypto e pyrogram, após isso navegue entre os diretorios e selecione o arquivo .py (depende da clonagem que for fazer (privado ou público)).

Dúvidas? Assista o vídeo abaixo:

<center><video controls src="/instalando_celular.mp4" width="320" height="240"></video></center>
