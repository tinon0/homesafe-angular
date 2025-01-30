
# Desarrollo de Aplicación Web para HomeSafe

Bienvenido al repositorio de la aplicación web **HomeSafe**. Esta solución moderna permite a los clientes de **HomeSafe** gestionar de manera eficiente y segura el sistema de alarmas instalado en sus hogares. La plataforma está desarrollada con **Angular**, ofreciendo una interfaz amigable y accesible desde cualquier dispositivo.

## 🛠️ Descripción del Proyecto

El proyecto tiene como objetivo proporcionar a los usuarios una experiencia sencilla y eficaz para manejar su sistema de seguridad. El MVP (Producto Mínimo Viable) incluye las siguientes funcionalidades clave:

1. **Pantalla de ingreso**: Un sistema de autenticación robusto que valida el **email** y **contraseña** del usuario, garantizando la seguridad de la plataforma.
2. **Pantalla de armado y desarmado**: Permite a los usuarios activar o desactivar el sistema de alarmas, con indicadores de estado y detalles sobre las zonas afectadas.
3. **Formulario para agregar un nuevo modo de alarma**: Ofrece la posibilidad de personalizar los modos de alarma, incluyendo la creación de nuevas zonas.

## 🌐 Características Principales

- **Autenticación y Seguridad**: Validación de **email** y **contraseña** con criterios específicos para garantizar un inicio de sesión seguro.
- **Control de Alarmas**: Los usuarios pueden ver el estado actual de su sistema de seguridad, con la capacidad de cambiar el modo de armado o desarmado.
- **Personalización de Modos**: Los usuarios pueden crear nuevos modos de alarma, adaptados a las necesidades específicas de su hogar.
- **Formulario Reactivo**: Utilizamos formularios reactivos para mejorar la experiencia de usuario y garantizar un flujo de trabajo ágil y sin errores.

## 🔑 Funcionalidades Clave

### 1. Pantalla de Ingreso

Los usuarios deberán ingresar con su **email** (formato: `usuario@homesafe.io`) y **contraseña** (mínimo 10 caracteres, con mayúsculas, minúsculas y caracteres especiales). Esta información será validada a través de un **API** seguro para garantizar que solo los usuarios autenticados tengan acceso a la plataforma.

- **Endpoint de validación**: `https://6317ca93f6b281877c5d7785.mockapi.io/users`

### 2. Pantalla de Armado y Desarmado

Dependiendo del estado de la alarma (armada o desarmada), el sistema mostrará un mensaje con el color adecuado:

- **Desarmado**: Botón "ARMAR" en verde.
- **Armado**: Botón "DESARMAR" en rojo y la cantidad de zonas afectadas.

El estado de la alarma y las zonas configuradas se gestionan y almacenan en la base de datos del sistema.

- **Endpoint para guardar estado de la alarma**: `https://6317ca93f6b281877c5d7785.mockapi.io/alarm-status`

### 3. Formulario de Carga de Nuevo Modo

Los usuarios pueden personalizar su sistema de alarmas creando nuevos modos. Cada modo debe tener:

- **Nombre del modo** (mínimo 5 caracteres).
- **Zonas**: Listado de zonas seleccionadas del sistema.

**Validaciones del formulario**:

- No se permiten zonas duplicadas.
- Se muestra un mensaje de error si el usuario intenta agregar una zona que ya existe.

- **Endpoint para cargar modos**: `https://674531d6b4e2e04abea50775.mockapi.io/alarm-mode`

### 🚀 Requisitos Técnicos

- **Frontend**: Aplicación web desarrollada con **Angular**.
- **Ruteo**: Implementación de ruteo para navegar entre las pantallas.
- **Formularios Reactivos**: Uso de formularios reactivos para la entrada de datos, garantizando una experiencia de usuario fluida.
- **Validaciones**: Implementación de validaciones a nivel de interfaz y API para garantizar la integridad de los datos.

## 📦 Cómo Ejecutar el Proyecto

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/usuario/homesafe-app.git
   cd homesafe-app
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**:
   ```bash
   ng serve
   ```

4. Accede a la aplicación en tu navegador visitando `http://localhost:4200`.

## 📑 Mockups

A continuación, se muestran los mockups de las pantallas principales de la aplicación:

- **Pantalla de Login**:  
  ![Login](https://i.postimg.cc/2yhLKKTV/login.png)

- **Panel de Control**:  
  ![Panel #1](https://i.postimg.cc/ncfDDnc7/p1.png)
  ![Panel #2](https://i.postimg.cc/gcZhjxdm/p2.png)

- **Formulario Nuevo Modo**:  
  ![Formulario Nuevo Modo #1](https://i.postimg.cc/TR0Jv52s/f1.png)
  ![Formulario Nuevo Modo #2](https://i.postimg.cc/Jn9BKLNf/f2.png)

---

# HomeSafe Web Application Development

Welcome to the **HomeSafe** web application repository. This modern solution allows **HomeSafe** customers to efficiently and securely manage their home security systems. The platform is developed using **Angular**, offering a user-friendly interface that is accessible from any device.

## 🛠️ Project Description

The project aims to provide users with a simple and effective experience to manage their security system. The MVP (Minimum Viable Product) includes the following key functionalities:

1. **Login Screen**: A robust authentication system that validates the user's **email** and **password**, ensuring the platform's security.
2. **Arm/Disarm Screen**: Allows users to activate or deactivate the alarm system, with status indicators and details about the affected zones.
3. **Form to Add a New Alarm Mode**: Provides the ability to customize alarm modes, including the creation of new zones.

## 🌐 Key Features

- **Authentication and Security**: Validates **email** and **password** with specific criteria to ensure a secure login process.
- **Alarm Control**: Users can view the current status of their security system and change the arm/disarm mode.
- **Mode Customization**: Users can create new alarm modes tailored to the specific needs of their home.
- **Reactive Forms**: We use reactive forms to enhance the user experience and ensure a smooth workflow with error-free data entry.

## 🔑 Key Functionalities

### 1. Login Screen

Users will need to log in with their **email** (format: `user@homesafe.io`) and **password** (minimum 10 characters, including uppercase, lowercase, and special characters). This information will be validated through a **secure API** to ensure that only authenticated users have access to the platform.

- **Validation Endpoint**: `https://6317ca93f6b281877c5d7785.mockapi.io/users`

### 2. Arm/Disarm Screen

Depending on the alarm's state (armed or disarmed), the system will display the appropriate message:

- **Disarmed**: The "ARM" button will appear in green.
- **Armed**: The "DISARM" button will appear in red, along with the number of affected zones.

The alarm status and the configured zones are managed and stored in the system's database.

- **Endpoint to save alarm status**: `https://6317ca93f6b281877c5d7785.mockapi.io/alarm-status`

### 3. Add New Mode Form

Users can customize their alarm system by creating new modes. Each mode must have:

- **Mode name** (minimum 5 characters).
- **Zones**: A list of selected zones from the system.

**Form Validations**:

- Duplicate zones are not allowed.
- An error message is shown if the user tries to add an existing zone.

- **Endpoint to add modes**: `https://674531d6b4e2e04abea50775.mockapi.io/alarm-mode`

### 🚀 Technical Requirements

- **Frontend**: The web application is developed using **Angular**.
- **Routing**: Routing is implemented to navigate between screens.
- **Reactive Forms**: Reactive forms are used for data input to ensure a smooth user experience.
- **Validations**: Interface and API-level validations are implemented to ensure data integrity.

## 📦 How to Run the Project

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/homesafe-app.git
   cd homesafe-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   ng serve
   ```

4. Access the application in your browser by visiting `http://localhost:4200`.

## 📑 Mockups

Below are the mockups for the main screens of the application:

- **Login Screen**:  
  ![Login](https://i.postimg.cc/2yhLKKTV/login.png)

- **Control Panel**:  
  ![Panel #1](https://i.postimg.cc/ncfDDnc7/p1.png)
  ![Panel #2](https://i.postimg.cc/gcZhjxdm/p2.png)

- **New Mode Form**:  
  ![New Mode Form #1](https://i.postimg.cc/TR0Jv52s/f1.png)
  ![New Mode Form #2](https://i.postimg.cc/Jn9BKLNf/f2.png)
