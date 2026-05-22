@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Аудит рабочих задач — лендинг

echo.
echo  ========================================
echo   Лендинг «Аудит рабочих задач»
echo  ========================================
echo.

where npm >nul 2>&1
if errorlevel 1 (
    echo  [ОШИБКА] Не установлен Node.js — https://nodejs.org/
    pause
    exit /b 1
)

REMостановить старый сервер на порту 3000 (иначе «голый скелет» без стилей)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
)

if not exist "node_modules\" (
    echo  Шаг 1: зависимости...
    call npm install
    if errorlevel 1 ( pause & exit /b 1 )
)

echo  Шаг 2: сборка (1-2 мин)...
if exist ".next\" rmdir /s /q ".next" 2>nul
call npm run build
if errorlevel 1 (
    echo  Сборка не удалась. Закройте Excel и попробуйте снова.
    pause
    exit /b 1
)

echo  Шаг 3: запуск http://localhost:3000
echo  Не закрывайте это окно!
echo.

timeout /t 2 /nobreak >nul
start "" "http://localhost:3000"
call npm run start

pause
