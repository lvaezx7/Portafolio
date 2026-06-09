@echo off
cd /d "C:\Luis Vaez\PortafolioLuisVaez-IA-main"
echo Deleting lock...
if exist .git\index.lock del /f .git\index.lock
echo Lock deleted (or not present).
echo Running git add...
git add -A
echo Running git commit...
git commit -m "feat: hero floating panels, parallax, cursor glow, scroll hint, denser canvas"
echo Running git push...
git push
echo Done! Exit code: %ERRORLEVEL%
> push_result.txt echo Push completed at %DATE% %TIME%
git log --oneline -3 >> push_result.txt
