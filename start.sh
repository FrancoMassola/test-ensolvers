cd Backend 
echo -e " PORT=4000 \n DB_USER = ensolvers \n DB_PASSWORD = ensolvers123 \n DB_SERVER = localhost \n DB_DATABASE = testchallenge" > .env
cd ..
sudo systemctl Start mssql-server
sqlcmd -S localhost -U ensolvers -P ensolvers123
sqlcmd -q "CREATE TABLE Folders (
    id_folder int IDENTITY(1,1) PRIMARY KEY,
    name_folder varchar(40) NOT NULL
);"  
sqlcmd -q "CREATE TABLE Tasks (
    id_task int IDENTITY(1,1) PRIMARY KEY,
    name_task varchar(40) NOT NULL,
	status_task bit,
    id_task_folder int FOREIGN KEY REFERENCES Folders(id_folder)ON DELETE CASCADE 
);"
docker-compose -f composer.yaml up