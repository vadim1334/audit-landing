@echo off

chcp 65001 >nul

cd /d "%~dp0"

title Аудит рабочих задач — финальная сборка



echo.

echo  ========================================

echo   Финальная сборка (медленно, ~1-3 мин)

echo  ========================================

echo.

echo  Нужна только для итогового показа без режима правок.

echo  Для ежедневной работы используйте ОТКРЫТЬ_ЛЕНДИНГ.bat

echo.



where npm >nul 2>&1

if errorlevel 1 (

    echo  [ОШИБКА] Не установлен Node.js — https://nodejs.org/

    pause

    exit /b 1

)



REM Stop server on port 3000 so npm run start binds cleanly

for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr LISTENING') do (

    taskkill /PID %%a /F >nul 2>&1

)



if not exist "node_modules\" (

    call npm install

    if errorlevel 1 (

        pause

        exit /b 1

    )

)



echo  Собираем...

if exist ".next\" rmdir /s /q ".next" 2>nul

call npm run build

if errorlevel 1 (

    echo  Сборка не удалась.

    pause

    exit /b 1

)



echo  Запуск production-версии...

start "" "http://localhost:3000"

call npm run start



pause

