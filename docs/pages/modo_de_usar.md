# Modos de usar

::: tip 💡 Dica
Não sabe como pegar o id de origem/ destino? [clique aqui](/pages/perguntas_frequentes.html)
:::

Se for a primeira vez que você está usando o clonechat, é preciso instalar um ambiente virtual. Execute o arquivo `install.bat`

## Clonando canais com encaminhamento ativo

Para clonar as postagens de um canal/grupo para outro canal/grupo. Use o `exec_clonechat.bat`

Digite o id do chat, link de convite ou username do grupo/canal.

Selecione os tipos de arquivos a serem clonados, separe eles por vírgulas.`Ex.: 1, 2, 3`

Digite `1` caso queira continuar a clonagem anterior ou `2` para uma nova clonagem

Agora basta aguardar a clonagem ser feita!

## Clonando canais com encaminhamento desativado

Para clonar as postagens de um canal/grupo com conteúdo protegido, basta executar os arquivos `exec_clonechat_protect_dw.bat` e `exec_clonechat_protect_up.bat`.

Execute ambos os arquivos para iniciar o processo de clonagem. Em alguns casos, pode haver uma mensagem "Hold on...", que indica que o sistema está baixando os metadados. Geralmente isso demora 1s por cada 100 mensagens.

Às vezes, o canal de origem pode ter dados demais para serem guardados. O clonechat_protect ajuda a resolver isso, o limite padrão é 5.000 MiB. Se isso for atingido, o clonechat_protect parará de baixar e aguardará mais espaço.

Se quiser mudar esse limite , é só editar o arquivo "user/config.ini" e ajustar o valor da chave "cache_folder_max_size_mb" para o que você preferir. O valor deve ser escrito em megabytes.

## Baixando arquivo de canais com tópicos

Para baixar todos os arquivos de um "tópico" em um grupo com essa função. `Use exec_downloadtopic.bat` e cole um link de mensagem do tópico a ser baixado.

## Baixando arquivos de canais

Para baixar todos os arquivos de um canal (fotos, vídeos, áudios, documentos, etc) e salva em ordem de postagem. Use `exec_downloadall.bat`. Siga os mesmos passos do tópico #[Clonando canais com encaminhamento ativo]

::: info 💡 Info
Deseja enviar esses arquivo baixados para um canal/grupo do Telegram? [clique aqui](perguntas_frequentes.md#após-fazer-o-download-de-arquivos-de-um-canal)
:::
