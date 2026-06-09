@echo off
cd /d "C:\Luis Vaez\PortafolioLuisVaez-IA-main"
if exist .git\index.lock del /f .git\index.lock
git add -A
git commit -m "feat: portfolio page redesign — hero card, centered domain headers, no emojis, domain nav"
git push
del /f go.bat
