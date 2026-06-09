@echo off
cd /d "C:\Luis Vaez\PortafolioLuisVaez-IA-main"
if exist .git\index.lock del /f .git\index.lock
git add -A
git commit -m "feat: hero floating panels, parallax, cursor glow, scroll hint, denser canvas"
git push
pause
