# Instalacja

Vite to szybki i lekki bundler do projektów JavaScript/TypeScript, który jest świetnym narzędziem do tworzenia aplikacji front-endowych. Aby zainstalować i uruchomić projekt za pomocą Vite, wykonaj poniższe kroki:

1. **Zainstaluj Node.js i npm** (jeśli jeszcze nie masz zainstalowanego Node.js):
   - Pobierz i zainstaluj Node.js ze strony [nodejs.org](https://nodejs.org/).
   - Po instalacji sprawdź wersję Node.js i npm, wpisując w terminalu:
     ```bash
     node -v
     npm -v
     ```

2. **Zainstaluj Vite**:
   - W katalogu swojego projektu otwórz terminal i wpisz następujące polecenie, aby stworzyć nowy projekt z Vite:
     ```bash
     npm create vite@latest
     ```
   - Vite poprosi o nazwę projektu. Wprowadź nazwę projektu, np. `reward-dashboard`, i wybierz framework **React** (jeśli projekt używa Reacta).
   
   - Następnie przejdź do katalogu projektu:
     ```bash
     cd reward-dashboard
     ```

3. **Zainstaluj zależności projektu**:
   - W terminalu wpisz:
     ```bash
     npm install
     ```
   - To polecenie zainstaluje wszystkie niezbędne pakiety.

4. **Uruchom aplikację**:
   - Aby uruchomić projekt w trybie deweloperskim, wpisz:
     ```bash
     npm run dev
     ```
   - Vite uruchomi serwer deweloperski, który będzie dostępny na lokalnym porcie (domyślnie `http://localhost:5173`). Otwórz tę stronę w przeglądarce.


# Instalacja Tailwind CSS:

- Aby pobrać tailwind wpisz:
```bash
     npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

```
