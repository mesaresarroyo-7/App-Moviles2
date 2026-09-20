# App Móviles 2 — Little Caesars

Aplicación móvil desarrollada con Expo, React Native, TypeScript y Firebase.

## Stack

- Expo
- React Native
- TypeScript
- Expo Router
- Firebase

## Ejecutar en desarrollo

```bash
npm install
npm start
```

También puedes usar:

```bash
npm run android
npm run web
```

## Generar APK instalable

Este repositorio incluye `eas.json` con un perfil `preview` que genera un APK para instalar directamente en un dispositivo Android.

```bash
npx eas-cli login
npx eas-cli build --platform android --profile preview
```

El identificador Android configurado es:

```text
com.mesaresarroyo.littlecaesars
```

## Build para Google Play

El perfil `production` genera un Android App Bundle (AAB):

```bash
npx eas-cli build --platform android --profile production
```

## Seguridad

Los archivos `.env`, artefactos APK/AAB, credenciales de firma y carpetas nativas generadas están excluidos mediante `.gitignore`.

No publiques contraseñas, tokens, claves privadas ni archivos de firma en el repositorio.
