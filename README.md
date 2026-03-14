# Api-Gohan
API en Express para servir endpoints y una página de documentación (`api-page/`).

## Requisitos
- Node.js >= 20

## Instalación
```bash
npm install
```

## Configuración
- Edita `assets/settings.json` (categorías, creator y `apikey`).
- Opcional: habilita logs a Discord con la variable de entorno `DISCORD_WEBHOOK_URL`.

Ejemplo (PowerShell):
```powershell
$env:DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."
```

## Ejecutar
```bash
npm start
```
En Windows, si PowerShell bloquea `npm`, usa:
```bash
npm.cmd start
```
o ejecuta directo:
```bash
node index.js
```

## GitHub
- `node_modules/` ya está ignorado por `.gitignore`.
- Recomendado: subir también `package-lock.json` para reproducibilidad.
