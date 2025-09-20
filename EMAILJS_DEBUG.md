# 🔧 EmailJS Debugging Guide

## Ongelma: "Failed to send message"

Tämä virhe tarkoittaa, että EmailJS-asetukset eivät ole vielä kunnossa. Tässä askel-askeleelta korjaus:

## 🔍 Vaihe 1: Tarkista Browser Console

1. Avaa sivusi (localhost:5173)
2. Paina **F12** avataksesi Developer Tools
3. Mene **Console**-välilehteen
4. Yritä lähettää viesti
5. Katso mitä virheviestejä tulee

## ⚙️ Vaihe 2: Päivitä EmailJS-asetukset

Sinun pitää muuttaa tiedosto `src/config/emailjs.ts`:

### Nykyiset asetukset (EI TOIMI):
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // ❌ Placeholder
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // ❌ Placeholder  
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // ❌ Placeholder
  TO_EMAIL: 'kelotechfi@gmail.com', // ✅ Oikein
};
```

### Oikeat asetukset (TOIMII):
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123', // ✅ Oikea Service ID
  TEMPLATE_ID: 'template_xyz789', // ✅ Oikea Template ID
  PUBLIC_KEY: 'user_abcdefgh123', // ✅ Oikea Public Key
  TO_EMAIL: 'kelotechfi@gmail.com', // ✅ Oikein
};
```

## 🚀 Vaihe 3: Hanki oikeat tiedot EmailJS:stä

### A) Mene osoitteeseen: https://www.emailjs.com/
### B) Kirjaudu sisään tilillesi
### C) Hanki Service ID:
1. Mene "Email Services"
2. Kopioi **Service ID** (esim. `service_abc123`)

### D) Hanki Template ID:
1. Mene "Email Templates"  
2. Kopioi **Template ID** (esim. `template_xyz789`)

### E) Hanki Public Key:
1. Mene "Account" → "General"
2. Kopioi **Public Key** (esim. `user_abcdefgh123`)

## 📝 Vaihe 4: Päivitä tiedosto

1. Avaa `src/config/emailjs.ts`
2. Korvaa placeholder-arvot oikeilla arvoilla:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_SINUN_ID', // Korvaa tämä
  TEMPLATE_ID: 'template_SINUN_ID', // Korvaa tämä
  PUBLIC_KEY: 'user_SINUN_KEY', // Korvaa tämä
  TO_EMAIL: 'kelotechfi@gmail.com',
};
```

## 🔄 Vaihe 5: Testaa uudelleen

1. Tallenna tiedosto
2. Päivitä sivu selaimessa
3. Yritä lähettää viesti uudelleen
4. Tarkista Console-virheilmoitukset

## 🆘 Jos ei vieläkään toimi:

### Tarkista Template:
EmailJS template pitää sisältää nämä muuttujat:
- `{{from_name}}`
- `{{from_email}}`  
- `{{phone}}`
- `{{message}}`

### Tarkista Service:
- Gmail/Outlook yhteys pitää olla aktiivinen
- Service pitää olla "Connected" tilassa

### Yleisiä virheitä:
- ❌ Väärät ID:t kopioidtu
- ❌ Template ei sisällä oikeita muuttujia
- ❌ Service ei ole yhdistetty sähköpostiin
- ❌ Public Key väärä

## 📧 Apua tarvittaessa:

Jos ongelma jatkuu, lähetä minulle:
1. Console-virheviesti (F12 → Console)
2. EmailJS Service ID (voit sensuroida osan)
3. Template sisältö

Korjataan yhdessä! 🚀
