# Medarbetarportal React

## Vad applikationen gör
Den visar ansökningar från Medarbetarportalens ApplicationsApi som jag gjorde för grupprojektet.
Applikationen hämtar och visar ansökningarna och dess tillhörande information i en tabell.

## Hur man kör applikationen

### Krav
- Node.js (v18 eller senare)
- ApplicationsApi måste köras lokalt

### Starta ApplicationsApi
```bash
cd ApplicationsApi
dotnet run
```
API:et körs på http://localhost:5252

### Starta React-appen
```bash
npm install
npm start
```
Applikationen öppnas på http://localhost:3000

## AI-användning
Claude (Anthropic) har använts som stöd under utvecklingen. AI hjälpte med:
CSS design, felsökning, CORS-konfigurationen i ApplicationsApi samt substitut för googling för att få fram namn på existerande funktioner.