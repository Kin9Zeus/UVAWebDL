# Checklist de Verificación de Rutas y Configuración

Este documento sirve como guía para asegurar que todas las operaciones en el proyecto Web UVA 2.0 se realicen en la ruta correcta.

## 1. Ruta Raíz del Proyecto
La única ruta válida para la ejecución de comandos, instalación de dependencias y creación de archivos es:
`C:\Users\Aleck Martinez\Desktop\Carpetas\Web UVA 2.0\uva-web`

## 2. Configuración del IDE (TRAE / VS Code)
- **Terminal**: Se ha configurado el archivo `.vscode/settings.json` en la carpeta raíz contenedora para que todas las nuevas terminales se abran automáticamente en `uva-web`.
- **Verificación**: Al abrir una nueva terminal, el prompt debe mostrar `.../uva-web`.

## 3. Prevención de Archivos Duplicados
- No ejecutar `npm install`, `git init` o comandos de creación de archivos en la carpeta padre `Web UVA 2.0`.
- Si se observan archivos como `package.json`, `tsconfig.json` o carpetas `node_modules` en la carpeta padre, deben ser eliminados inmediatamente.

## 4. Scripts y Comandos
- Todos los scripts en `package.json` asumen que se ejecutan desde `uva-web`.
- Para ejecutar comandos desde una ruta externa, usar: `npm --prefix uva-web run <comando>`.

## 5. Procedimiento para Nuevos Desarrolladores
1. Clonar el repositorio.
2. Abrir la carpeta `Web UVA 2.0` en el IDE.
3. Verificar que la terminal se abra en `uva-web`.
4. Ejecutar `npm install` solo si la ruta es correcta.

## 6. Solución de Problemas Comunes
- **Error**: "npm ERR! enoent ENOENT: no such file or directory, open '.../package.json'"
  - **Causa**: Se está ejecutando el comando en la carpeta padre.
  - **Solución**: Ejecutar `cd uva-web` o abrir una nueva terminal (que ahora debería abrirse en la ruta correcta por defecto).

- **Error**: Importaciones fallidas o módulos no encontrados.
  - **Causa**: Posiblemente se están importando archivos desde fuera de `src` o usando rutas relativas incorrectas.
  - **Solución**: Usar siempre alias `@/` definidos en `tsconfig.json` (ej. `import Component from '@/components/Component'`).
