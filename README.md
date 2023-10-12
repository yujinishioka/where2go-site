# Where 2 Go

O app **Where 2 Go** procura entregar a melhor experiência de viagens que alguém poderia ter, com a utilização da análise de dados e da Inteligência Artificial torna possível um mapeamento das melhores atrações, restaurantes e hospedagens para cada pessoa de forma individual ou grupal, dependendo das suas preferências.

---

## Integrantes

RM | Nome | Links
--- | --- | ---
**94170** | Felipe Breno Sugisawa Altran | [![Github](https://img.shields.io/badge/Github-gray)](https://github.com/febreno) [![Linkedin](https://img.shields.io/badge/Linkedin-blue)](https://www.linkedin.com/in/felipe-sugisawa)
**93187** | Gabriel João da Silva | [![Github](https://img.shields.io/badge/Github-gray)](https://github.com/gjoao98) [![Linkedin](https://img.shields.io/badge/Linkedin-blue)](https://www.linkedin.com/in/gabriel-joao)
**94513** | Leandro Alves de Souza Braga | [![Github](https://img.shields.io/badge/Github-gray)](https://github.com/bragaLeandro) [![Linkedin](https://img.shields.io/badge/Linkedin-blue)](https://www.linkedin.com/in/leandrobraga1)
**94266** | Vinicius Alves Torres | [![Github](https://img.shields.io/badge/Github-gray)](https://github.com/ViniciusAlvesTorres) [![Linkedin](https://img.shields.io/badge/Linkedin-blue)](https://www.linkedin.com/in/vinicius-alves-torres-702973203)
**92895** | Vinicius Yuji Nishioka | [![Github](https://img.shields.io/badge/Github-gray)](https://github.com/yujinishioka) [![Linkedin](https://img.shields.io/badge/Linkedin-blue)](https://www.linkedin.com/in/yuji-nishioka-643b22218)

---

# Lista de Melhorias
- [ ] Formulário com mais campos e acertivos
- [ ] Home
- [ ] Menu

---

## Iniciando o projeto

<details>
<summary>Expo</summary>

---
### **Dependências**

|Dependency | Version |
| --- | --- |
| Node | 18.x |
| npm | 8.19.2 |

*instalando dependências*
```
npm i
```

*rodando o projeto*
```
npm start
```
---
</details>

<details>
<summary>Android Studio</summary>

---

### **Dependências**

| Dependency | Version  |
| --- | --- |
| Node | 18.x |
| JDK | 11 |
| npm | 8.19.2 |
| Android Studio | 2022.2.1.20 |
  
### **Recomendações**

* Visual Studio Code
* Chocolatey

### **Instalando dependências e recomendações**

### Chocolatey

Utilize um **terminal com permissão de administrador**.

O comando a seguir instala o Chocolatey e adiciona a passagem de ambiente.

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Node e o JDK11

**Obs: Caso ja tenha os 2 programas instalados ou algum deles, pule essa etapa ou adicione apenas aquele que esteja faltando "nodejs-lts" ou "openjdk11".**

```
choco install -y nodejs-lts openjdk11
```

Android Studio

https://developer.android.com/studio

Visual Studio Code

https://code.visualstudio.com/

---

### **Configurando Android Studio**

Após abrir o Android Studio:

```
File -> Settings
```

Dentro de Settings:

```
Appearance & Behavior -> System Settings -> Android SDK
```

Selecione a opção **Show Package Details**

Marcar as opções **Android SDK Platform 31** e **Intel x86 Atom_64 System Image** que estarão dentro das opções de **Android 12.0(S)**

Na seção **SDK Tools** selecione a opção **Show Package Details**

Marcar a opção **31.0.0** em **Android SDK Build-Tools**

Clicar em **Apply** e depois **OK**

---

### **Variáveis de Ambiente**

Dentro das váriaveis de ambiente adicione uma nova variável para o **usuário** com os seguintes atributos:

**Obs: altere o valor de <usuário> pelo seu nome de usuário.**

```
Name: ANDROID_HOME
Value: "C:\Users\<usuário>\AppData\Local\Android\Sdk"
```

Para vizualizar se a variável foi adicionada corretamente, uilize o comando no **Powershell**, e procure por **ANDROID_HOME**.

```
Get-ChildItem -Path Env:\
```

Nas variáveis do **sistema**, **edite** a variável **Path** e adicione uma nova com o caminho:

**Obs: altere o valor de <usuário> pelo seu nome de usuário.**

```
C:\Users\<usuário>\AppData\Local\Android\Sdk\platform-tools
```

---

### **Comandos**

*instalando dependências*
```
npm i
```

*rodando o projeto*
```
npm start
```

ou

```
expo start
```

---

</details>
