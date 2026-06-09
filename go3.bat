@echo off
cd /d "C:\Luis Vaez\PortafolioLuisVaez-IA-main"
if exist .git\index.lock del /f .git\index.lock
git add -A
git commit -m "feat: about page — portrait right, no circle photo, fade blend + glow"
git push
del /f go3.bat
