@echo off
chcp 65001 >nul
cd /d "%~dp0\.."
echo Обновление данных из Excel...
python scripts\export_audit_v2.py
if errorlevel 1 (
    echo Ошибка. Закройте файл Excel на рабочем столе и повторите.
    pause
    exit /b 1
)
echo Готово. Теперь запустите ОТКРЫТЬ_ЛЕНДИНГ.bat
pause
