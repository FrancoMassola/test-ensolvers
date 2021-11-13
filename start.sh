cd Backend 
touch .env 
echo 
PORT=4000
DB_USER = administrador
DB_PASSWORD = admiN123
DB_SERVER = testchallenge
DB_DATABASE = testchallenge
 > .env
cd ..
sudo systemctl Start mssql-server
sqlcmd -S localhost -U ensolvers -P ensolvers123
sqlcmd -q "CREATE TABLE Folder (
    id_folder int IDENTITY(1,1) PRIMARY KEY,
    name_folder varchar(40) NOT NULL
);"  
sqlcmd -q "CREATE TABLE Task (
    id_task int IDENTITY(1,1) PRIMARY KEY,
    name_task varchar(40) NOT NULL,
	status_task bit,
    id_task_folder int FOREIGN KEY REFERENCES Folder(id_folder)ON DELETE CASCADE 
);"
docker-compose -f composer.yaml up