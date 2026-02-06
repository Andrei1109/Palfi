@echo off
echo Configurare mediu Node.js v22...
set "PATH=C:\Users\andre\AppData\Local\nvm\v22.22.0;%PATH%"
echo.
echo Versiunea Node curenta:
node -v
echo.
echo Pornire server BragWeb Labs...
npm run dev
pause
