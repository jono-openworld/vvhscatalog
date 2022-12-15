@echo off
:: Folder of files to sync with github
cd /D "G:\My Drive\vvhs\personal\CS\Course Catalog Project\vvhscatalog"

:: Get local date time in yyyy-mm-dd_hh-mm-ss.ttt format
for /F "usebackq tokens=1,2 delims==" %%i in (`wmic os get LocalDateTime /VALUE 2^>NUL`) do if '.%%i.'=='.LocalDateTime.' set ldt=%%j
set ldt=%ldt:~0,4%-%ldt:~4,2%-%ldt:~6,2%-@-%ldt:~8,2%-%ldt:~10,2%-%ldt:~12,6%
:: echo Local date is [%ldt%]

:: Push all to github vvhscatalog project
git add --all
git commit --quiet -m "autoCommit %ldt%"
git push --quiet


