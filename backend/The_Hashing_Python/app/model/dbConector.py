import mysql.connector


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="proyect_zero"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM producto")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)