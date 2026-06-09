@echo off
cd /d "C:\Luis Vaez\PortafolioLuisVaez-IA-main"
if exist .git\index.lock del /f .git\index.lock
git add -A
git commit -m "fix: remove duplicate domain nav pills from portfolio page"
git push
del /f go2.bat
