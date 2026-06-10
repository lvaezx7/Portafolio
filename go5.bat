@echo off
cd /d "C:\Luis Vaez\PortafolioLuisVaez-IA-main"
if exist .git\index.lock del /f .git\index.lock
git add -A
git commit -m "feat: portfolio — animated hero card, scan line, shimmer, card sweep, domain watermarks"
git push
del /f go5.bat
