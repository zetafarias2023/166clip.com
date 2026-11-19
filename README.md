# CHATCRACK

## ⚠️ Si "no guarda nada": publicá las reglas de Firebase

Netlify solo publica la web. Las reglas de seguridad se publican aparte y, si no las actualizás, Firebase rechaza
favoritos, bloqueos, audios, verificaciones y el panel de admin (la app te lo avisa con un mensaje).

Sin consola de comandos: Firebase Console > Firestore Database > **Reglas** > pegá todo `firestore.rules` > **Publicar**.
Después Storage > **Reglas** > pegá todo `storage.rules` > **Publicar** (si pide permisos entre Storage y Firestore, aceptá).
Con la CLI: `firebase deploy --only firestore:rules,storage`.
El dueño/admin ya quedó configurado como fariaszeta794@gmail.com.

## App en Play Store / App Store (Capacitor)

`npm i @capacitor/core @capacitor/android @capacitor/ios && npm i -D @capacitor/cli`, luego `npm run build`,
`npx cap add android`, `npx cap sync` y `npx cap open android`. La configuración ya está en `capacitor.config.json`.

Red social original de perfiles y contactos: perfiles, seguidores y mensajes. React + TypeScript + Vite + Tailwind, sobre Firebase
(Authentication, Firestore, Storage, Hosting).

## Qué incluye esta etapa

Se conserva todo lo del proyecto original: login con Google, perfiles, trabajos (hasta 12 imágenes),
seguidores, verificación, mensajes con fotos, "Visto", no leídos, avisos con sonido, panel de admin y reportes.

Nuevo: identidad visual negro, verde neón y violeta; inicio con buscador, estadísticas reales, categorías,
destacados y recién llegados; buscador avanzado (texto, categoría, disponibles, verificados, orden);
foto de perfil; ventanas propias en lugar de `alert`/`prompt`; skeleton de carga; responsive;
reglas de seguridad reforzadas; lecturas de Firestore reducidas.

Todavía NO incluye (llegan en las etapas 2 a 4): servicios y contrataciones, reseñas, favoritos, rankings,
dashboard con gráficos, comunidad, academia, pagos. Tampoco hay testimonios ni "novedades" porque
serían contenido inventado; se agregan cuando existan reseñas reales y un lugar donde publicarlas.

## Instalar y correr

Requisitos: Node 20 o superior y la CLI de Firebase (`npm i -g firebase-tools`, luego `firebase login`).

    npm install
    npm run dev          # http://localhost:5173
    npm run typecheck    # revisa los tipos
    npm run build        # genera dist/

La configuración de Firebase ya viene cargada (proyecto zeta166-933e3). Si querés usar otro proyecto,
copiá `.env.example` a `.env` y completá los valores.

## Publicar (en este orden)

1. `firebase deploy --only firestore:rules,storage` (reglas e índices).
2. `npm run build && firebase deploy --only hosting`.
   También podés hacer todo junto con `npm run deploy`.
3. En Authentication > Configuración > Dominios autorizados, agregá tu dominio si usás uno propio.

Si Storage todavía no está activado: Firebase Console > Storage > Comenzar (modo producción). En proyectos
nuevos puede pedirte el plan Blaze; configurá una alerta de presupuesto.

## Ser admin (solo vos)

1. Poné tu Gmail como dueño: `npm run set-owner -- tu@gmail.com`
   (reemplaza el marcador en `firestore.rules`, `storage.rules` y `src/config.ts`).
2. Publicá: `firebase deploy --only firestore:rules,storage` y después el hosting.
3. Entrá con ese Gmail: aparece Admin, y tu perfil queda verificado automáticamente.
   Nadie más puede ser dueño: la regla compara tu email verificado de Google.
4. Si ya existe el perfil "zeta166" en otra cuenta, entrá a su perfil como admin y tocá Verificar.

## Subir imágenes

Cualquier persona con sesión iniciada puede subir los trabajos de su portafolio (ya no hay que pedir permiso). Los límites de peso y tipo los controlan las reglas de Storage.
Las fotos grandes se achican en el navegador antes de subirse.

## Datos existentes

Los perfiles, seguidores, verificaciones y chats del proyecto anterior siguen funcionando: los nombres de
colecciones y campos son los mismos. Los perfiles viejos no tienen fecha de alta (`createdAt`), así que se
ordenan al final en "recién llegados" hasta que su dueño guarde el perfil una vez.

## Completar antes de promocionar

- `src/config.ts` > `LEGAL`: fecha, nombre o razón social, país y mail para Privacidad y Términos.
  Pedí una revisión legal. Cuando empiecen los pagos (Etapa 4) habrá que reescribirlos.
- App Check (protección contra bots): Firebase Console > App Check > registrá la web con reCAPTCHA v3,
  pegá la clave de sitio en `VITE_APPCHECK_SITE_KEY` y, después de comprobar que todo anda, activá el
  "enforcement" para Firestore y Storage.

## Seguridad: qué cubren las reglas y qué no

- Perfiles: solo campos conocidos, tipos y tamaños validados, enlaces de portafolio solo https.
- Chats: solo los dos participantes; el id de la conversación debe ser `uidA_uidB`; solo se puede abrir un
  chat con alguien que tenga perfil; los mensajes validan autor, hora del servidor y contenido (texto o foto).
- Reportes: uno por persona y perfil. Verificaciones, destacados y administración: solo admins.
- Storage: solo JPG, PNG, WEBP y GIF; límites de 2 MB (foto de perfil) y 5 MB (el resto).
- No cubierto aún: límite de mensajes por minuto, contenido de cada elemento de `works` (la web ya filtra
  lo que no es de Firebase Storage al mostrarlo) y bloqueo de usuarios. Para eso hacen falta Cloud Functions
  (Etapa 2/3).

IMPORTANTE: las reglas no se pudieron probar con el emulador de Firebase en este entorno. Probá estos casos
después de publicarlas: crear y editar perfil, seguir y dejar de seguir, enviar texto y foto en un chat nuevo
y en uno existente, marcar visto, reportar, pedir verificación y aprobar como admin. Si algo falla, abrí la
consola del navegador (F12) y pasame la línea roja. Las reglas están en `firestore.rules` y `storage.rules`.

## Escala

El directorio descarga hasta 200 perfiles de una sola vez (`PROFILE_LIMIT` en `src/config.ts`) y filtra en el
navegador. Alcanza para empezar. Con más editores conviene paginar y buscar en el servidor.
Los seguidores se cuentan con una consulta de conteo al abrir cada perfil, no en la lista.

## Estructura

    src/components   piezas reutilizables (layout, tarjetas, modal, toasts)
    src/pages        pantallas
    src/hooks        sesión, datos, chat, avisos
    src/services     acceso a Firestore y Storage
    src/firebase     cliente de Firebase y App Check
    src/types        tipos
    src/styles       estilos globales (Tailwind)
    functions        reservado para Cloud Functions



## Avatares

No se suben fotos de perfil: cada persona elige un avatar (dibujos SVG en `src/lib/avatars.tsx`).
Básicos para todos, Pro con 20 seguidores y Élite con 500 (se cambian en `TIER_MIN`).
El desbloqueo se controla en la app; las reglas de Firestore solo validan que el id sea un texto corto.

## Chatcrack Pro (USD 5, PayPal)

Pago único que desbloquea todos los avatares. El botón abre PayPal con el cobro a `PAYPAL_EMAIL` (en `src/config.ts`).
Después el usuario pega el ID de transacción y toca "Ya pagué". En **Admin > Pagos Pro** comprobás el pago en tu PayPal
y tocás **Aprobar** (crea `proUsers/<uid>`). Para cobrar automático haría falta PayPal Webhooks + una Cloud Function (plan Blaze).

## Llamadas de voz

Botón del teléfono en el chat. Usa WebRTC: Firestore solo avisa (colección `calls`) y el audio va directo entre los dos.
Solo suena mientras la otra persona tiene la web abierta. Si en alguna red móvil no conecta, hace falta un servidor TURN:
cargá `VITE_TURN_URL`, `VITE_TURN_USER` y `VITE_TURN_PASS` en las variables de Netlify.

## Notas de voz

Se graban en MP4/AAC cuando el navegador puede (suenan en todos); si no, WebM u OGG. Requieren HTTPS y permiso de micrófono.
