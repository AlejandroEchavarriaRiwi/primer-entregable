# Guía de Instalación 🚀

## Tabla de Contenidos
- [Prerrequisitos](#prerrequisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Solución de Problemas](#solución-de-problemas)
- [Soporte](#soporte)

## Prerrequisitos
Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada: 14.x o superior)
- [Git](https://git-scm.com/)

## Instalación

### 1. Clonar el Repositorio 📥

```bash
git clone https://github.com/AlejandroEchavarriaRiwi/primer-entregable.git
cd primer-entregable
```

### 2. Instalar Dependencias 📦

```bash
npm install
```

## Ejecución

### Iniciar en Modo Desarrollo 🔥

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Solución de Problemas

### Problemas Comunes y Soluciones 🔧

| Problema | Solución |
|----------|----------|
| Error de dependencias | Ejecuta `npm install` nuevamente |
| Puerto 3000 en uso | Usa `npm run dev -- -p 3001` para cambiar el puerto |
| Variables de entorno | Verifica la configuración en `.env.local` |

### Mensajes de Error Específicos

- **Error 'Module not found'**: 
  ```bash
  npm cache clean --force
  npm install
  ```

## Soporte

¿Necesitas ayuda? 
- 📫 Crea un issue en el repositorio
- 💬 Contacta al equipo de desarrollo
- 📚 Consulta la [documentación de Next.js](https://nextjs.org/docs)

---
⭐ Desarrollado por [AlejandroEchavarriaRiwi](https://github.com/AlejandroEchavarriaRiwi)
