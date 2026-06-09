@echo off
cd /d "C:\Luis Vaez\PortafolioLuisVaez-IA-main"
if exist .git\index.lock del /f .git\index.lock
git add -A
git commit -m "fix: about portrait — centered, wider column, dual-edge fade, balanced layout"
git push
del /f go4.bat
